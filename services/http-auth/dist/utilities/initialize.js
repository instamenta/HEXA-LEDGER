"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graceful_shutdown = exports.initialize_database = exports.initialize_server = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const monitoring_middleware_1 = require("../middlewares/monitoring.middleware");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const vlogger_1 = __importDefault(require("@instamenta/vlogger"));
function initialize_server() {
    const _server = (0, express_1.default)();
    //* Extensions
    _server.use(require('cors')());
    _server.use(require('helmet')());
    _server.use(require('compression')());
    _server.use(require('cookie-parser')());
    _server.use(require('morgan')('dev'));
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
    vlogger_1.default.getInstance().getVlogger(config_1.config.SERVICE_NAME)
        .info({ f: 'initialize_database', m: '[ Connecting to Mongo Client ]' });
    const db_client = new mongodb_1.MongoClient(config_1.config.DB_URI, config_1.config.DB_OPTIONS);
    vlogger_1.default.getInstance().getVlogger(config_1.config.SERVICE_NAME)
        .info({ f: 'initialize_database', m: `[ Connecting to Database "${config_1.config.DB_NAME} ]` });
    return db_client.db(config_1.config.DB_NAME);
}
exports.initialize_database = initialize_database;
class graceful_shutdown {
    static process_on(_cases_) {
        _cases_.forEach((_type_) => {
            process.on(_type_, (error) => {
                try {
                    vlogger_1.default.getInstance().getVlogger('NODE_PROCESS')
                        .error({ e: error, f: 'process_on', m: `[${config_1.config.SERVICE_NAME}] ~ process.on: [${_type_}] ` });
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
                    vlogger_1.default.getInstance().getVlogger('NODE_PROCESS')
                        .error({ e: error, f: 'process_once', m: `[${config_1.config.SERVICE_NAME}] - process.on: [${_type_}] ` });
                    process.exit(0);
                }
                finally {
                    process.kill(process.pid, _type_);
                }
            });
        });
    }
}
exports.graceful_shutdown = graceful_shutdown;
