"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./utilities/config");
const wallet_router_1 = __importDefault(require("./routes/wallet.router"));
const wallet_controller_1 = __importDefault(require("./controllers/wallet.controller"));
const wallet_repository_1 = __importDefault(require("./repositories/wallet.repository"));
const error_middleware_1 = require("./middlewares/error.middleware");
const initialize_1 = __importStar(require("./utilities/initialize"));
const vlogger_1 = __importDefault(require("@instamenta/vlogger"));
(async function initialize_service() {
    const database = initialize_1.default.database();
    const _http_server = initialize_1.default.server();
    const [contract, owner, users] = await initialize_1.default.wallet_contract();
    const vlogger = vlogger_1.default.getInstance();
    //! Components
    const walletRepository = new wallet_repository_1.default(database);
    const walletController = new wallet_controller_1.default(walletRepository, vlogger, contract);
    const walletRouter = new wallet_router_1.default(walletController).getRouter();
    _http_server.use('/wallet', walletRouter);
    //! Error & Not-Found Handling
    _http_server.use(error_middleware_1._404Handler);
    _http_server.use(error_middleware_1._errorHandler);
    //! Start Web APi
    _http_server.listen(config_1.config.PORT, () => vlogger.getVlogger(config_1.config.SERVICE_NAME).info({
        f: 'initialize_service', m: `[ [ ${config_1.config.SERVICE_NAME} ] Running on port: [ ${config_1.config.PORT} ]`
    }));
    _http_server.on('error', e => vlogger.getVlogger(config_1.config.SERVICE_NAME).error({
        f: 'initialize_service', m: `[ ${config_1.config.SERVICE_NAME} ] ran into Error:`, e
    }));
})();
initialize_1.graceful_shutdown.process_on(['unhandledRejection', 'uncaughtException']);
initialize_1.graceful_shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);
