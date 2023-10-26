/* eslint-disable @typescript-eslint/no-var-requires */
import {_metrics_endpoint, _metrics_middleware} from '../middlewares/monitoring.middleware';
import {ClerkExpressWithAuth, StrictAuthProp} from '@clerk/clerk-sdk-node';
import {MongoClient} from 'mongodb';
import {config} from './config';
import express from 'express';
import Vlogger from "@instamenta/vlogger";
// @ts-ignore
import {ethers} from "hardhat";
import {HardhatEthersSigner} from '@nomicfoundation/hardhat-ethers/signers'
import {SimpleWallet} from "../../typechain-types";

export async function initialize_simple_wallet_contract(): Promise<[SimpleWallet, HardhatEthersSigner, HardhatEthersSigner[]]> {
    const contract: SimpleWallet = await ethers.deployContract("SimpleWallet");
    await contract.waitForDeployment();

    let owner: HardhatEthersSigner;
    let users: HardhatEthersSigner[];

    [owner, ...users] = await ethers.getSigners();

    return [contract, owner, users];
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
    Vlogger.getInstance().getVlogger(config.SERVICE_NAME)
        .info({f: 'initialize_database', m: '[ Connecting to Mongo Client ]'})
    const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

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

export default {
    server: initialize_server,
    database: initialize_database,
    wallet_contract: initialize_simple_wallet_contract,
}