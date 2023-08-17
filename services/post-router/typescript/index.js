"use strict";
/** @file Start and initializes all services and the router. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const post_routes_1 = __importDefault(require("./routes/post-routes"));
const post_controller_1 = __importDefault(require("./controller/post-controller"));
const error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
const prom_client_1 = require("prom-client");
const hexa_tools_1 = require("./utility/hexa-tools");
const API_PORT = hexa_tools_1.Dot.GET('ROUTER_PORT', 5095), SERVICE_NAME = hexa_tools_1.Dot.GET('SERVICE_NAME', 'Post-Router-Service'), API = (0, express_1.default)(), postController = new post_controller_1.default(), postRouter = new post_routes_1.default(postController).getRouter();
(0, prom_client_1.collectDefaultMetrics)();
API.use((0, cors_1.default)());
API.use((0, helmet_1.default)());
API.use((0, cookie_parser_1.default)());
API.use((0, morgan_1.default)('combined'));
API.use(express_1.default.json());
API.use(hexa_tools_1.metricsMiddleware);
API.get('/metrics', hexa_tools_1.SCRAPE_ENDPOINT);
API.use('/post', postRouter);
API.use(error_middleware_1.default);
(function initializeService() {
    API.listen(Number(API_PORT), () => {
        console.log(`${SERVICE_NAME} is running on port: ${API_PORT}`);
        // Await connectProducer();
    });
    API.on('error', (error) => {
        console.log('API ran into Error:', error);
    });
})();
(0, hexa_tools_1.processOn)(['unhandledRejection', 'uncaughtException']);
(0, hexa_tools_1.processOnce)(['SIGTERM', 'SIGINT', 'SIGUSR2']);
