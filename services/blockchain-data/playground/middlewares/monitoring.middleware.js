const {Counter, Histogram, register} = require('prom-client')
    , {NextFunction, Request, Response} = require('express')
;

/** @type {Counter<string>} */
const http_request_count = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});

/** @type {Histogram<string>} */
const response_time_histogram = new Histogram({
    name: 'http_response_time_seconds',
    help: 'Histogram of response times',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5],
});

/**
 * @param {number[]} startTime
 * @return {number}
 */
function _get_elapsed_time(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}

/**
 * @param {Request} request
 * @param {Response} response
 * @return {Promise<void>}
 */
async function _metrics_endpoint(request, response) {
    response.set('Content-Type', register.contentType);
    response.end(await register.metrics());
}

/**
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
function _metrics_middleware(request, response, next) {
    response.on('finish', () => {
        http_request_count.inc({
            method: request.method,
            route: request.route ? request.route.path : 'unknown',
            status: response.statusCode,
        });
        response_time_histogram.observe({
            method: request.method,
            route: request.route ? request.route.path : 'unknown',
            status: response.statusCode,
        }, _get_elapsed_time(process.hrtime()));
    });
    next();
}

module.exports = {
    _metrics_endpoint,
    _metrics_middleware,
}