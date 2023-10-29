/* eslint-disable @typescript-eslint/no-var-requires */
import {Counter, Histogram, register} from 'prom-client';
import {NextFunction, Request, Response} from 'express';

const http_request_count = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});

const response_time_histogram = new Histogram({
    name: 'http_response_time_seconds',
    help: 'Histogram of response times',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 0.5, 1, 2, 5],
});

function _get_elapsed_time(startTime: [number, number]): number {
    const elapsedNanoseconds = process.hrtime(startTime);
    return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}

export async function _metrics_endpoint(req: Request, res: Response) {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
}

export function _metrics_middleware(req: Request, res: Response, next: NextFunction) {
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
