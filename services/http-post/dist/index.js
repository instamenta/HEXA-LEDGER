"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const thread_router_1 = __importDefault(require("./routes/thread.router"));
const thread_controller_1 = __importDefault(require("./controllers/thread.controller"));
const SERVICE_NAME = process.env.SERVICE_NAME;
const PORT = process.env.PORT;
(function initializeService() {
    const _server = (0, express_1.default)();
    _server.use((0, cors_1.default)());
    _server.use(express_1.default.json());
    _server.use((0, cookie_parser_1.default)());
    const threadController = new thread_controller_1.default();
    const threadRouter = new thread_router_1.default(threadController).getRouter();
    _server.use('/thread', threadRouter);
    _server.listen(PORT, () => console.log(`[${SERVICE_NAME}] running on port: [${PORT}]`));
    _server.on('error', (e) => console.log(`${SERVICE_NAME} ran into Error:`, e));
})();
