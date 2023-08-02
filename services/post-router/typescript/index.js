"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Start and initializes all services and the router. */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const post_routes_1 = __importDefault(require("./routes/post-routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
// Import {connectProducer} from './producer';
const API_PORT = process.env.ROUTER_PORT || '5095';
const SERVICE_NAME = process.env.SERVICE_NAME || 'Post-Router-Service';
const API = (0, express_1.default)();
API.use((0, cors_1.default)());
API.use((0, cookie_parser_1.default)());
API.use(express_1.default.json());
API.use('/post', post_routes_1.default);
API.use(error_middleware_1.default);
(async function initializeService() {
    await API.listen(Number(API_PORT), () => {
        console.log(`${SERVICE_NAME} is running on port: ${API_PORT}`);
        // Await connectProducer();
    });
    API.on('error', (error) => {
        console.log('API ran into Error:', error);
    });
})().catch((error) => console.log(error));
['unhandledRejection', 'uncaughtException'].forEach((type) => {
    process.on(type, (error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`);
            console.error(error);
        }
        catch {
            process.exit(1);
        }
    });
});
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach((type) => {
    process.once(type, (error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`, error);
            process.exit(0);
        }
        finally {
            process.kill(process.pid, type);
        }
    });
});
