/** @file Has all cool tools. */
import {NextFunction, Request, Response} from 'express';
import {Counter, Histogram, register} from 'prom-client';
import DotConfigurator from 'dot_configurator';
import {IVlog, VLogger} from '@instamenta/vlogger';

export default class HexaModule {

   private httpRequestCount: Counter<string>;
   private responseTimeHistogram: Histogram<string>;
   private readonly dot: DotConfigurator;
   private readonly vlog: IVlog;

   constructor(vlogger: VLogger, dot: DotConfigurator) {

      this.vlog = vlogger.getVlog(this.constructor.name);
      this.dot = dot;

      this.httpRequestCount = new Counter({
         name: 'http_requests_total',
         help: 'Total number of HTTP requests',
         labelNames: ['method', 'route', 'status'],
      });

      this.responseTimeHistogram = new Histogram({
         name: 'http_response_time_seconds',
         help: 'Histogram of response times',
         labelNames: ['method', 'route', 'status'],
         buckets: [0.1, 0.5, 1, 2, 5],
      });
   }

   public processOn(CASES: Array<string>): void {
      CASES.forEach((TYPE: string) => {
         process.on(TYPE, (e: Error) => {
            try {
               this.vlog.error({e, msg: `${this.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
            } catch {
               process.exit(1);
            }
         });
      });
   }

   public processOnce(CASES: Array<string>): void {
      CASES.forEach((TYPE: string) => {
         process.once(TYPE, (e: Error) => {
            try {
               this.vlog.error({e, msg: `${this.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
               process.exit(0);
            } finally {
               process.kill(process.pid, TYPE);
            }
         });
      });
   }

   public async metricsEndpoint(req: Request, res: Response) {
      res.set('Content-Type', register.contentType);
      res.end(await register.metrics());
   }

   public metricsMiddleware(req: Request, res: Response, next: NextFunction) {
      res.on('finish', () => {
         this.httpRequestCount.inc({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
         });
         this.responseTimeHistogram.observe(
            {
               method: req.method,
               route: req.route ? req.route.path : 'unknown',
               status: res.statusCode,
            },
            this.getElapsedTimeInSeconds(process.hrtime()),
         );
      });
      next();
   }

   private getElapsedTimeInSeconds(startTime: [number, number]): number {
      const elapsedNanoseconds = process.hrtime(startTime);
      return elapsedNanoseconds[0] + elapsedNanoseconds[1] * 1e-9;
   }

   public static getInstance(vlogger: VLogger, dot: DotConfigurator): HexaModule {
      return new HexaModule(vlogger, dot);
   }
}
