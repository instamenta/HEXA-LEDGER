/** @file Start and initializes all services and the router. */
import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import HELMET from 'helmet';
import COMPRESSION from 'compression';
import COOKIER_PARSER from 'cookie-parser';
import UserRouter from './routes/user-routes';
import DotConfig from 'dot_configurator';
import {VLogger} from '@instamenta/vlogger';
import AuthController from './controller/auth-controller';
import AuthRouter from './routes/auth-routes';
import UserController from './controller/user-controller';
import {collectDefaultMetrics} from 'prom-client';
import errorMiddleware from './middleware/error-middleware';
import {SCRAPE_ENDPOINT, processOn, processOnce, metricsMiddleware, metricsEndpoint} from './utility/hexa-module';
import GrpcClient from './client/grpc-client';
import AuthClient from './client/auth-client';
import UserClient from './client/user-client';

export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API: Express = EXPRESS();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));

   const grpcClient = GrpcClient.getInstance(dot).connectClient();
   const authClient = AuthClient.getInstance(grpcClient);
   const userClient = UserClient.getInstance(grpcClient);

   const authController = AuthController.getInstance(vlogger, authClient);
   const userController = UserController.getInstance(vlogger, userClient);

   const authRouter = AuthRouter.getInstance(authController).getRouter();
   const userRouter = UserRouter.getInstance(userController).getRouter();

   collectDefaultMetrics();
   API.use(CORS());
   API.use(HELMET());
   API.use(COMPRESSION());
   API.use(EXPRESS.json());
   API.use(COOKIER_PARSER());
   API.use(MORGAN('combined'));

   API.use(metricsMiddleware);
   API.get('/metrics', metricsEndpoint);
   API.use('/auth', authRouter);
   API.use('/user', userRouter);
   API.use(errorMiddleware);

   API.listen(+dot.GET('ROUTER_PORT', 5085), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'User-Router-Service')}] is running on port: [${+dot.GET('ROUTER_PORT', 5085)}]`,
   ));
   API.on('error', (error: Error | any) => console.log('API ran into Error:', error));
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
