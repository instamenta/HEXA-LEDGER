/** @file Start and initializes all services and the router. */
import EXPRESS, {Express, Request, Response, NextFunction} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import COOKIER_PARSER from 'cookie-parser';
import POST_ROUTER from './routes/post-routes';
import ERROR_MIDDLEWARE from './middleware/error-middleware';
import {collectDefaultMetrics, Counter, register} from 'prom-client';

const API_PORT: string = process.env.ROUTER_PORT || '5095'
    , SERVICE_NAME: string = process.env.SERVICE_NAME || 'Post-Router-Service'
    , API: Express = EXPRESS()
;
collectDefaultMetrics();
const httpRequestCount = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
});

API.use(CORS());
API.use(COOKIER_PARSER());
API.use(MORGAN('combined'));
API.use(EXPRESS.json());
API.use(metricsMiddleware);

API.use('/post', POST_ROUTER);

API.get('/metrics', (req: Request, res: Response) => {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
});

API.use(ERROR_MIDDLEWARE);


(async function initializeService(): Promise<void> {
    await API.listen(Number(API_PORT), () => {
        console.log(`${SERVICE_NAME} is running on port: ${API_PORT}`);
        // Await connectProducer();
    });
    API.on('error', (error: Error | any) => {
        console.log('API ran into Error:', error);
    });
})().catch((error) => console.log(error));

/**
 * @param req
 * @param res
 * @param next
 */
function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => httpRequestCount.inc({
            method: req.method,
            route: req.route ? req.route.path : 'unknown',
            status: res.statusCode,
        })
    );
    next();
}


['unhandledRejection', 'uncaughtException'].forEach((type) => {
    process.on(type, (error: Error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`);
            console.error(error);
        } catch {
            process.exit(1);
        }
    });
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach((type) => {
    process.once(type, (error: Error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`, error);
            process.exit(0);
        } finally {
            process.kill(process.pid, type);
        }
    });
});
