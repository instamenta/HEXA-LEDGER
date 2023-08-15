/** @file Start and initializes all services and the router. */
import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import COOKIER_PARSER from 'cookie-parser';
import POST_ROUTER from './routes/post-routes';
import ERROR_MIDDLEWARE from './middleware/error-middleware';
import {collectDefaultMetrics} from 'prom-client';
import {Dot, SCRAPE_ENDPOINT, processOn, processOnce, metricsMiddleware} from './utility/hexa-tools';

const API_PORT = Dot.GET('ROUTER_PORT', 5095)
    , SERVICE_NAME = Dot.GET('SERVICE_NAME', 'Post-Router-Service')
    , API: Express = EXPRESS()
;

collectDefaultMetrics();
API.use(CORS());
API.use(COOKIER_PARSER());
API.use(MORGAN('combined'));
API.use(EXPRESS.json());
API.use(metricsMiddleware);
API.get('/metrics', SCRAPE_ENDPOINT);
API.use('/post', POST_ROUTER);
API.use(ERROR_MIDDLEWARE);

(function initializeService(): void {
    API.listen(Number(API_PORT), () => {
        console.log(`${SERVICE_NAME} is running on port: ${API_PORT}`);
        // Await connectProducer();
    });
    API.on('error', (error: Error | any) => {
        console.log('API ran into Error:', error);
    });
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
