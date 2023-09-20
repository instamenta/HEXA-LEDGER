"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const thread_router_1 = __importDefault(require("./routes/thread.router"));
const thread_controller_1 = __importDefault(require("./controllers/thread.controller"));
const thread_repository_1 = __importDefault(require("./repositories/thread.repository"));
const config_1 = require("./utilities/config");
const error_middleware_1 = require("./middlewares/error.middleware");
(function initializeService() {
    const _server = getServer();
    const db = (0, config_1.getDatabase)();
    const threadRepository = new thread_repository_1.default(db);
    const threadController = new thread_controller_1.default(threadRepository);
    const threadRouter = new thread_router_1.default(threadController).getRouter();
    _server.use('/thread', threadRouter);
    _server.use(error_middleware_1._404Handler);
    _server.use(error_middleware_1._errorHandler);
    _server.listen(config_1.config.PORT, () => console.log(`[${config_1.config.SERVICE_NAME}] Running on port: [${config_1.config.PORT}]`));
    _server.on('error', e => console.log(`${config_1.config.SERVICE_NAME} ran into Error:`, e));
})();
function getServer() {
    const _server = (0, express_1.default)();
    _server.use(require('cors')());
    _server.use(express_1.default.json());
    _server.use(require('cookie-parser')());
    return _server;
}
