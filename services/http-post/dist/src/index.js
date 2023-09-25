"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./utilities/config");
const thread_router_1 = __importDefault(require("./routes/thread.router"));
const thread_controller_1 = __importDefault(require("./controllers/thread.controller"));
const thread_repository_1 = __importDefault(require("./repositories/thread.repository"));
const error_middleware_1 = require("./middlewares/error.middleware");
const initialize_1 = require("./utilities/initialize");
(function initializeService() {
    const _server = (0, initialize_1.initialize_server)();
    const db = (0, initialize_1.initialize_database)();
    //! Components
    const threadRepository = new thread_repository_1.default(db);
    const threadController = new thread_controller_1.default(threadRepository);
    const threadRouter = new thread_router_1.default(threadController).getRouter();
    _server.use('/thread', threadRouter);
    //! Error & Not-Found Handling
    _server.use(error_middleware_1._404Handler);
    _server.use(error_middleware_1._errorHandler);
    //! Start Web APi
    _server.listen(config_1.config.PORT, () => console.log(`[${config_1.config.SERVICE_NAME}] Running on port: [${config_1.config.PORT}]`));
    _server.on('error', e => console.log(`${config_1.config.SERVICE_NAME} ran into Error:`, e));
})();
initialize_1.Graceful_Shutdown.process_on(['unhandledRejection', 'uncaughtException']);
initialize_1.Graceful_Shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);
