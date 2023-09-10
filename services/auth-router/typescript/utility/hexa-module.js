"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = exports.metricsEndpoint = exports.processOnce = exports.processOn = void 0;
const prom_client_1 = require("prom-client");
const index_1 = require("../index");
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
function processOn(CASES) {
    CASES.forEach((TYPE) => {
        process.on(TYPE, (e) => {
            try {
                console.error({ e, msg: `${index_1.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}` });
            }
            catch {
                process.exit(1);
            }
        });
    });
}
exports.processOn = processOn;
function processOnce(CASES) {
    CASES.forEach((TYPE) => {
        process.once(TYPE, (e) => {
            try {
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
async function metricsEndpoint(req, res) {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(await prom_client_1.register.metrics());
}
exports.metricsEndpoint = metricsEndpoint;
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
function getElapsedTimeInSeconds(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}
