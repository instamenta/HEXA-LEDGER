/* eslint-disable @typescript-eslint/no-var-requires */
import {_metrics_endpoint, _metrics_middleware} from '../middlewares/monitoring.middleware';
import {ClerkExpressWithAuth, StrictAuthProp} from '@clerk/clerk-sdk-node';
import {Long, MongoClient} from 'mongodb';
import {config} from './config';
import express from 'express';
import Vlogger from "@instamenta/vlogger";
import {SimpleWallet, SimpleWallet__factory} from "../../typechain-types";
import {ethers, Wallet, JsonRpcProvider} from 'ethers'

export async function initialize_contract()
    : Promise<{ contract: SimpleWallet, signer: Wallet, provider: JsonRpcProvider }
> {
    //* Get the Infura JSON RPC Provider
    const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${config.INFURA_API_KEY}`,);

    //* Get the Signer's Wallet
    const signer = new ethers.Wallet(config.SEPOLIA_PRIVATE_KEY, provider);

    //* Connect with the Simple Wallet Contract
    const contract = SimpleWallet__factory.connect(config.CONTRACT_ADDRESS, signer);

    return {contract, signer, provider};
}

export function initialize_server(): express.Express {
    const _server = express();

    //* Extensions
    _server.use(require('cors')());
    _server.use(require('helmet')());
    _server.use(require('compression')());
    _server.use(require('cookie-parser')());
    _server.use(require('morgan')('dev'));
    _server.use(express.json());

    //* Prometheus
    _server.use(_metrics_middleware);
    _server.get('/metrics', _metrics_endpoint);

    //* Clerk
    _server.use(ClerkExpressWithAuth({jwtKey: config.CLERK_JWT_PUBLIC_KEY}));

    return _server;
}

export function initialize_database() {
    //* Connect with the Mongo Client
    Vlogger.getInstance().getVlogger(config.SERVICE_NAME)
        .info({f: 'initialize_database', m: '[ Connecting to Mongo Client ]'})
    const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

    //* Connect with the Mongo Database
    Vlogger.getInstance().getVlogger(config.SERVICE_NAME)
        .info({f: 'initialize_database', m: `[ Connecting to Database "${config.DB_NAME} ]`})
    return db_client.db(config.DB_NAME);
}

export class graceful_shutdown {

    public static process_on(_cases_: string[]): void {
        _cases_.forEach((_type_: string) => {
            process.on(_type_, (error: Error) => {
                try {
                    Vlogger.getInstance().getVlogger('NODE_PROCESS')
                        .error({e: error, f: 'process_on', m: `[${config.SERVICE_NAME}] ~ process.on: [${_type_}] `})
                } catch {
                    process.exit(1);
                }
            });
        });
    }

    public static process_once(_cases_: string[]): void {
        _cases_.forEach((_type_: string) => {
            process.once(_type_, (error: Error) => {
                try {
                    Vlogger.getInstance().getVlogger('NODE_PROCESS')
                        .error({e: error, f: 'process_once', m: `[${config.SERVICE_NAME}] - process.on: [${_type_}] `})
                    process.exit(0);
                } finally {
                    process.kill(process.pid, _type_);
                }
            });
        });
    }
}

declare global {
    namespace Express {
        interface Request extends StrictAuthProp {
        }
    }
}

// @ts-ignore
BigInt.prototype.toJSON = function() {
    return this.toString();
};

// @ts-ignore
Long.prototype.toJSON = function () {
    return this.toString(); // Convert the Long to a string
};

export default {
    server: initialize_server,
    database: initialize_database,
    wallet_contract: initialize_contract,
}