"use strict";
/** @file Has all cool tools. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpressAPI = exports.metricsMiddleware = exports.metricsEndpoint = exports.processOnce = exports.processOn = void 0;
const express_1 = __importDefault(require("express"));
const prom_client_1 = require("prom-client");
const index_1 = require("../index");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
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
/**
 * @param CASES
 */
function processOn(CASES) {
    CASES.forEach((TYPE) => {
        process.on(TYPE, (e) => {
            try {
                index_1.prisma.$disconnect().then(() => console.log('Prisma Client Disconnected...'));
                console.error({ e, msg: `${index_1.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}` });
            }
            catch {
                process.exit(1);
            }
        });
    });
}
exports.processOn = processOn;
/**
 * @param CASES
 */
function processOnce(CASES) {
    CASES.forEach((TYPE) => {
        process.once(TYPE, (e) => {
            try {
                index_1.prisma.$disconnect().then(() => console.log('Prisma Client Disconnected...'));
                console.error({ e, msg: `${index_1.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}` });
                process.exit(0);
            }
            finally {
                process.kill(process.pid, TYPE);
            }
        });
    });
}
exports.processOnce = processOnce;
/**
 * @param req
 * @param res
 */
async function metricsEndpoint(req, res) {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(await prom_client_1.register.metrics());
}
exports.metricsEndpoint = metricsEndpoint;
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
exports.metricsMiddleware = metricsMiddleware;
/**
 * @param startTime
 * @returns
 */
function getElapsedTimeInSeconds(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}
/**
 * @returns
 */
function getExpressAPI() {
    const API = (0, express_1.default)();
    API.use((0, cors_1.default)());
    API.use((0, helmet_1.default)());
    API.use((0, compression_1.default)());
    API.use(express_1.default.json());
    API.use((0, cookie_parser_1.default)());
    API.use((0, morgan_1.default)('combined'));
    (0, prom_client_1.collectDefaultMetrics)();
    API.use(metricsMiddleware);
    API.get('/metrics', metricsEndpoint);
    return API;
}
exports.getExpressAPI = getExpressAPI;
