/** @file Has all cool tools. */
import {NextFunction, Request, Response} from 'express';
import {Counter, Histogram, register} from 'prom-client';
import {dot, prisma} from '../index';

const httpRequestCount = new Counter({
   name: 'http_requests_total',
   help: 'Total number of HTTP requests',
   labelNames: ['method', 'route', 'status'],
});

const responseTimeHistogram = new Histogram({
   name: 'http_response_time_seconds',
   help: 'Histogram of response times',
   labelNames: ['method', 'route', 'status'],
   buckets: [0.1, 0.5, 1, 2, 5],
});

/**
 * @param CASES
 */
export function processOn(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.on(TYPE, (e: Error) => {
         try {
            prisma.$disconnect().then(() => console.log('Prisma Client Disconnected...'))
            console.error({e, msg: `${dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
         } catch {
            process.exit(1);
         }
      });
   });
}

/**
 * @param CASES
 */
export function processOnce(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.once(TYPE, (e: Error) => {
         try {
            prisma.$disconnect().then(() => console.log('Prisma Client Disconnected...'))
            console.error({e, msg: `${dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
            process.exit(0);
         } finally {
            process.kill(process.pid, TYPE);
         }
      });
   });
}

/**
 * @param req
 * @param res
 */
export async function metricsEndpoint(req: Request, res: Response) {
   res.set('Content-Type', register.contentType);
   res.end(await register.metrics());
}

/**
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
         getElapsedTimeInSeconds(process.hrtime()),
      );
   });
   next();
}

/**
 * @param startTime
 * @returns
 */
function getElapsedTimeInSeconds(startTime: [number, number]): number {
   const elapsedNanoseconds = process.hrtime(startTime);
   return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
}