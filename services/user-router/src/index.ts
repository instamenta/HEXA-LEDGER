/** @file Start and initializes all services and the router. */

import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import HELMET from 'helmet';
import COOKIER_PARSER from 'cookie-parser';
import UserRouter from './routes/user-routes';
import DotConfig from 'dot_configurator';
import ERROR_MIDDLEWARE from './middleware/error-middleware';
import {collectDefaultMetrics} from 'prom-client';
import VLogger from '@instamenta/vlogger'
import AuthController from './controller/auth-controller';
import AuthRouter from './routes/auth-routes';
import UserController from './controller/user-controller';
import {SCRAPE_ENDPOINT, processOn, processOnce, metricsMiddleware} from './utility/hexa-tools';

const Dot: DotConfig = new DotConfig(process.env as Record<string, string>)
   , API_PORT = Dot.GET('ROUTER_PORT', 5085)
   , SERVICE_NAME = Dot.GET('SERVICE_NAME', 'User-Router-Service')
   , API: Express = EXPRESS()
   , vlogger = new VLogger(Dot.GET('DEBUG_LEVEL', true))
   , authController = new AuthController(vlogger)
   , authRouter: EXPRESS.Router = new AuthRouter(authController).getRouter()
   , userController = new UserController(vlogger)
   , userRouter: EXPRESS.Router = new UserRouter(userController).getRouter()
;
collectDefaultMetrics();
API.use(CORS());
API.use(HELMET());
API.use(COOKIER_PARSER());
API.use(MORGAN('combined'));
API.use(EXPRESS.json());
API.use(metricsMiddleware);
API.use('/auth', authRouter);
API.use('/user', userRouter);
API.get('/metrics', SCRAPE_ENDPOINT);
API.use(ERROR_MIDDLEWARE);

(function initializeService(): void {
   API.listen(Number(API_PORT), () => {
      console.log(`${SERVICE_NAME}  is running on port: ${API_PORT}`);
   });
   API.on('error', (error: Error | any) => {
      console.log('API ran into Error:', error);
   });
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
