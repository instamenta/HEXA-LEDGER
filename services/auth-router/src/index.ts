import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import COMPRESSION from 'compression';
import COOKIER_PARSER from 'cookie-parser';
import DotConfig from 'dot_configurator';
import {VLogger} from '@instamenta/vlogger';
import AuthController from './controller/auth-controller';
import AuthRouter from './routes/auth-routes';
import {collectDefaultMetrics} from 'prom-client';
import errorMiddleware from './middleware/error-middleware';
import {processOn, processOnce, metricsMiddleware, metricsEndpoint} from './utility/hexa-module';
import GrpcClient from './client/grpc-client';
import AuthClient from './client/auth-client';
import TokenTools from "./utility/token-tools";
import path from "path";

export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API: Express = EXPRESS();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));
   const tokenTools = TokenTools.getInstance({dot, vlogger});

   const grpcClient = GrpcClient.getInstance(dot).connectClient();
   const authClient = AuthClient.getInstance(grpcClient);

   const authController = AuthController.getInstance(vlogger, authClient);
   const authRouter = AuthRouter.getInstance(authController).getRouter();

   collectDefaultMetrics();
   API.use(CORS());
   API.use(COMPRESSION());
   API.use(EXPRESS.json());
   API.use(COOKIER_PARSER());
   API.use(MORGAN('combined'));

   API.use(EXPRESS.static(path.join(__dirname, '../public')));

   API.use(metricsMiddleware);
   API.get('/metrics', metricsEndpoint);
   API.use('/api', authRouter);

   API.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
   API.use(errorMiddleware);

   API.listen(+dot.GET('ROUTER_PORT', 5085), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'Auth-Router-Service')
      }] is running on port: [${+dot.GET('ROUTER_PORT', 5085)}]`
   ));
   API.on('error', (error) => console.log('API ran into Error:', error));
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
