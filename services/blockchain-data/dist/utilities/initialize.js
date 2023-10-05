"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeWeb3Provider = exports.Graceful_Shutdown = exports.initialize_database = exports.initialize_server = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const monitoring_middleware_1 = require("../middlewares/monitoring.middleware");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const web3_1 = require("web3");
function initialize_server() {
    const _server = (0, express_1.default)();
    //* Extensions
    _server.use(require('cors')());
    _server.use(require('helmet')());
    _server.use(require('compression')());
    _server.use(require('cookie-parser')());
    _server.use(require('morgan')('combined'));
    _server.use(express_1.default.json());
    //* Prometheus
    _server.use(monitoring_middleware_1._metrics_middleware);
    _server.get('/metrics', monitoring_middleware_1._metrics_endpoint);
    //* Clerk
    _server.use((0, clerk_sdk_node_1.ClerkExpressWithAuth)({ jwtKey: config_1.config.CLERK_JWT_PUBLIC_KEY }));
    return _server;
}
exports.initialize_server = initialize_server;
function initialize_database() {
    console.log('[Connecting to Mongo Client]');
    const db_client = new mongodb_1.MongoClient(config_1.config.DB_URI, config_1.config.DB_OPTIONS);
    console.log(`[Connecting to Database "${config_1.config.DB_NAME}]"`);
    return db_client.db(config_1.config.DB_NAME);
}
exports.initialize_database = initialize_database;
class Graceful_Shutdown {
    static process_on(_cases_) {
        _cases_.forEach((_type_) => {
            process.on(_type_, (error) => {
                try {
                    console.error({ message: `[${config_1.config.SERVICE_NAME}] ~ process.on: [${_type_}] `, error });
                }
                catch {
                    process.exit(1);
                }
            });
        });
    }
    static process_once(_cases_) {
        _cases_.forEach((_type_) => {
            process.once(_type_, (error) => {
                try {
                    console.error({ message: `[${config_1.config.SERVICE_NAME}] - process.on: [${_type_}] `, error });
                    process.exit(0);
                }
                finally {
                    process.kill(process.pid, _type_);
                }
            });
        });
    }
}
exports.Graceful_Shutdown = Graceful_Shutdown;
function initializeWeb3Provider() {
    // @ts-ignore
    const web3 = new web3_1.Web3(new web3_1.Web3.providers.HttpProvider(`https://${config_1.config.ETHEREUM_NETWORK}.infura.io/v3/${config_1.config.PROVIDER_API_KEY}`));
    console.log(`[Connected Web3 Provider on network: ${config_1.config.ETHEREUM_NETWORK}]`);
    return web3;
}
exports.initializeWeb3Provider = initializeWeb3Provider;
