"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsMiddleware = exports.SCRAPE_ENDPOINT = exports.processOnce = exports.processOn = exports.Dot = void 0;
/** @file Has all cool tools. */
const dot_configurator_1 = __importDefault(require("dot_configurator"));
const prom_client_1 = require("prom-client");
exports.Dot = new dot_configurator_1.default(process.env);
const httpRequestCount = getPrometheusCounter();
const responseTimeHistogram = getPrometheusHistogram();
/** @param CASES */
function processOn(CASES) {
    CASES.forEach((TYPE) => {
        process.on(TYPE, (error) => {
            try {
                console.error(`${exports.Dot.GET('SERVICE_NAME', 'User-Router-Service')} - process.on ${TYPE}`);
                console.error(error);
            }
            catch {
                process.exit(1);
            }
        });
    });
}
exports.processOn = processOn;
/** @param CASES */
function processOnce(CASES) {
    CASES.forEach((TYPE) => {
        process.once(TYPE, (error) => {
            try {
                console.error(`${exports.Dot.GET('SERVICE_NAME', 'User-Router-Service')} - process.on ${TYPE}`, error);
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
 * Handler used for Scraping Data for Prometheus.
 * @param req
 * @param res
 */
async function SCRAPE_ENDPOINT(req, res) {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(await prom_client_1.register.metrics());
}
exports.SCRAPE_ENDPOINT = SCRAPE_ENDPOINT;
/**
 * Middleware that handles collecting data for Prometheus and Grafana.
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
 * Gets the Elapsed time used from Prometheus.
 * @param startTime
 * @returns
 */
function getElapsedTimeInSeconds(startTime) {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}
/**
 * Returns a Prometheus Counter with the specified label names.
 * @returns
 */
function getPrometheusCounter() {
    return new prom_client_1.Counter({
        name: 'http_requests_total',
        help: 'Total number of HTTP requests',
        labelNames: ['method', 'route', 'status'],
    });
}
/**
 * Returns a Prometheus Histogram with the specified label names and buckets.
 * @returns
 */
function getPrometheusHistogram() {
    return new prom_client_1.Histogram({
        name: 'http_response_time_seconds',
        help: 'Histogram of response times',
        labelNames: ['method', 'route', 'status'],
        buckets: [0.1, 0.5, 1, 2, 5],
    });
}
