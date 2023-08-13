"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Start and initializes all services and the router. */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
const prom_client_1 = require("prom-client");
const API_PORT = process.env.ROUTER_PORT || '5085', SERVICE_NAME = process.env.SERVICE_NAME || 'User-Router-Service', API = (0, express_1.default)();
(0, prom_client_1.collectDefaultMetrics)();
const httpRequestCount = new prom_client_1.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});
API.use((0, cors_1.default)());
API.use((0, cookie_parser_1.default)());
API.use((0, morgan_1.default)('combined'));
API.use(express_1.default.json());
API.use(metricsMiddleware);
API.use('/auth', auth_routes_1.default);
API.use('/user', user_routes_1.default);
API.get('/metrics', (req, res) => {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(prom_client_1.register.metrics());
});
API.use(error_middleware_1.default);
(async function initializeService() {
    await API.listen(Number(API_PORT), () => {
        console.log(`${SERVICE_NAME}  is running on port: ${API_PORT}`);
    });
    API.on('error', (error) => {
        console.log('API ran into Error:', error);
    });
})().catch((error) => console.log(error));
/**
 * @param req
 * @param res
 * @param next
 */
function metricsMiddleware(req, res, next) {
    res.on('finish', () => httpRequestCount.inc({
        method: req.method,
        route: req.route ? req.route.path : 'unknown',
        status: res.statusCode,
    }));
    next();
}
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
