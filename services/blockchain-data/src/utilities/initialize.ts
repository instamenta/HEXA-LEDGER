/* eslint-disable @typescript-eslint/no-var-requires */
import {_metrics_endpoint, _metrics_middleware} from '../middlewares/monitoring.middleware';
import {ClerkExpressWithAuth, LooseAuthProp} from '@clerk/clerk-sdk-node';
import {MongoClient} from 'mongodb';
import {config} from './config';
import express from 'express';
import {Web3} from 'web3'


export function initialize_server(): express.Express {
    const _server = express();

    //* Extensions
    _server.use(require('cors')());
    _server.use(require('helmet')());
    _server.use(require('compression')());
    _server.use(require('cookie-parser')());
    _server.use(require('morgan')('combined'));
    _server.use(express.json());

    //* Prometheus
    _server.use(_metrics_middleware);
    _server.get('/metrics', _metrics_endpoint);

    //* Clerk
    _server.use(ClerkExpressWithAuth({jwtKey: config.CLERK_JWT_PUBLIC_KEY} as any));

    return _server;
}

export function initialize_database() {
    console.log('[Connecting to Mongo Client]');
    const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

    console.log(`[Connecting to Database "${config.DB_NAME}]"`);
    return db_client.db(config.DB_NAME);
}

export class Graceful_Shutdown {

    public static process_on(_cases_: string[]): void {
        _cases_.forEach((_type_: string) => {
            process.on(_type_, (error: Error) => {
                try {
                    console.error({message: `[${config.SERVICE_NAME}] ~ process.on: [${_type_}] `, error});
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
                    console.error({message: `[${config.SERVICE_NAME}] - process.on: [${_type_}] `, error});
                    process.exit(0);
                } finally {
                    process.kill(process.pid, _type_);
                }
            });
        });
    }
}

export function initializeWeb3Provider(): Web3 {
    // @ts-ignore
    const web3 =  new Web3(new Web3.providers.HttpProvider(
        `https://${config.ETHEREUM_NETWORK}.infura.io/v3/${config.PROVIDER_API_KEY}`
    ));
    console.log(`[Connected Web3 Provider on network: ${config.ETHEREUM_NETWORK}]`)
    return web3
}

declare global {
    namespace Express {
        interface Request extends LooseAuthProp {
        }
    }
}

