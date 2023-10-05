"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./utilities/config");
const router_1 = __importDefault(require("./routes/router"));
const tx_controller_1 = __importDefault(require("./controllers/tx.controller"));
const tx_repository_1 = __importDefault(require("./repositories/tx.repository"));
const error_middleware_1 = require("./middlewares/error.middleware");
const initialize_1 = require("./utilities/initialize");
(function initializeService() {
    const _server = (0, initialize_1.initialize_server)();
    const db = (0, initialize_1.initialize_database)();
    const web3 = (0, initialize_1.initializeWeb3Provider)();
    //! Components
    const repository = new tx_repository_1.default(db);
    const controller = new tx_controller_1.default(repository, web3);
    const router = new router_1.default(controller).getRouter();
    _server.use('/blockchain', router);
    //! Error & Not-Found Handling
    _server.use(error_middleware_1._404Handler);
    _server.use(error_middleware_1._errorHandler);
    //! Start Web APi
    _server.listen(config_1.config.PORT, () => console.log(`[${config_1.config.SERVICE_NAME}] Running on port: [${config_1.config.PORT}]`));
    _server.on('error', e => console.log(`${config_1.config.SERVICE_NAME} ran into Error:`, e));
})();
initialize_1.Graceful_Shutdown.process_on(['unhandledRejection', 'uncaughtException']);
initialize_1.Graceful_Shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);
