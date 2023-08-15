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
const post_routes_1 = __importDefault(require("./routes/post-routes"));
const error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
const prom_client_1 = require("prom-client");
const dot_configurator_1 = __importDefault(require("dot_configurator"));
const API_PORT = process.env.ROUTER_PORT || '5095', SERVICE_NAME = process.env.SERVICE_NAME || 'Post-Router-Service', API = (0, express_1.default)();
(0, prom_client_1.collectDefaultMetrics)();
console.log(process.env);
const Dot = new dot_configurator_1.default(process.env);
console.log(Dot.GET('MY_OBJECT'));
const httpRequestCount = new prom_client_1.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});
const responseTimeHistogram = new prom_client_1.Histogram({
    name: 'http_response_time_seconds',
    help: 'Histogram of response times',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5],
});
API.use((0, cors_1.default)());
API.use((0, cookie_parser_1.default)());
API.use((0, morgan_1.default)('combined'));
API.use(express_1.default.json());
API.use(metricsMiddleware);
API.use('/post', post_routes_1.default);
API.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom_client_1.register.contentType);
    const metrics = await prom_client_1.register.metrics();
    res.end(metrics);
});
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
/**
 * @param req
 * @param res
 * @param next
 */
function metricsMiddleware(req, res, next) {
    res.on('finish', () => {
        httpRequestCount.inc({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
        });
        responseTimeHistogram.observe({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
        }, getElapsedTimeInSeconds(process.hrtime()));
    });
    next();
}
/**
 * @param startTime
 * @returns
 */
function getElapsedTimeInSeconds(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
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
