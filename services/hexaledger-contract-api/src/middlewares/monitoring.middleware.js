"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._metrics_middleware = exports._metrics_endpoint = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const prom_client_1 = require("prom-client");
const http_request_count = new prom_client_1.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});
const response_time_histogram = new prom_client_1.Histogram({
    name: 'http_response_time_seconds',
    help: 'Histogram of response times',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5],
});
function _get_elapsed_time(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}
async function _metrics_endpoint(req, res) {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(await prom_client_1.register.metrics());
}
exports._metrics_endpoint = _metrics_endpoint;
function _metrics_middleware(req, res, next) {
    res.on('finish', () => {
        http_request_count.inc({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
        });
        response_time_histogram.observe({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
        }, _get_elapsed_time(process.hrtime()));
    });
    next();
}
exports._metrics_middleware = _metrics_middleware;
