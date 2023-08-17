/** @file Has all cool tools. */
import DotConfig from 'dot_configurator';
import {NextFunction, Request, Response} from 'express';
import {Counter, Histogram, register} from 'prom-client';

export const Dot: DotConfig = new DotConfig(process.env as Record<string, string>);

const httpRequestCount = getPrometheusCounter();
const responseTimeHistogram = getPrometheusHistogram();

/** @param CASES */
export function processOn(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.on(TYPE, (error: Error) => {
         try {
            console.error(`${Dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`);
            console.error(error);
         } catch {
            process.exit(1);
         }
      });
   });
}

/** @param CASES */
export function processOnce(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.once(TYPE, (error: Error) => {
         try {
            console.error(`${Dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`, error);
            process.exit(0);
         } finally {
            process.kill(process.pid, TYPE);
         }
      });
   });
}

/**
 * Handler used for Scraping Data for Prometheus.
 * @param req
 * @param res
 */
export async function SCRAPE_ENDPOINT (req: Request, res: Response) {
   res.set('Content-Type', register.contentType);
   res.end(await register.metrics());
}

/**
 * Middleware that handles collecting data for Prometheus and Grafana.
 * @param req
 * @param res
 * @param next
 */
export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
   res.on('finish', () => {
      httpRequestCount.inc({
         method: req.method,
         route: req.route ? req.route.path : 'unknown',
         status: res.statusCode,
      });
      responseTimeHistogram.observe(
         {
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
         },
         getElapsedTimeInSeconds(process.hrtime())
      );
   });
   next();
}

/**
 * Gets the Elapsed time used from Prometheus.
 * @param startTime
 * @returns
 */
function getElapsedTimeInSeconds(startTime: [number, number]): number {
   const elapsedNanoseconds = process.hrtime(startTime);
   return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}

/**
 * Returns a Prometheus Counter with the specified label names.
 * @returns
 */
function getPrometheusCounter(): Counter<string> {
   return new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status'],
   });
}

/**
 * Returns a Prometheus Histogram with the specified label names and buckets.
 * @returns
 */
function getPrometheusHistogram(): Histogram<string> {
   return new Histogram({
      name: 'http_response_time_seconds',
      help: 'Histogram of response times',
      labelNames: ['method', 'route', 'status'],
      buckets: [0.1, 0.5, 1, 2, 5],
   });
}