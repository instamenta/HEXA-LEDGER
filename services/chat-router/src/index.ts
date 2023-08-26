/** @file Start and initializes all services and the router. */
import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import HELMET from 'helmet';
import COMPRESSION from 'compression';
import COOKIER_PARSER from 'cookie-parser';
import {collectDefaultMetrics} from 'prom-client';
import errorMiddleware from './middleware/error-middleware';
import {processOn, processOnce, metricsMiddleware, metricsEndpoint} from './utility/hexa-module';
import DotConfig from 'dot_configurator';
import {VLogger} from '@instamenta/vlogger';
import UserRouter from './routes/chat-routes';
import ChatController from './controller/chat-controller';
import {PrismaClient} from '../prisma/prisma/client'

export const prisma = new PrismaClient()
export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API: Express = EXPRESS();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));

   const chatController = ChatController.getInstance(vlogger, prisma);

   const chatRouter = UserRouter.getInstance(chatController).getRouter();

   collectDefaultMetrics();
   API.use(CORS());
   API.use(HELMET());
   API.use(COMPRESSION());
   API.use(EXPRESS.json());
   API.use(COOKIER_PARSER());
   API.use(MORGAN('combined'));

   API.use(metricsMiddleware);
   API.get('/metrics', metricsEndpoint);
   API.use('/chat', chatRouter);
   API.use(errorMiddleware);

   API.listen(+dot.GET('ROUTER_PORT', 5085), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'Chat-Router-Service')}] is running on port: [${+dot.GET('ROUTER_PORT', 5075)}]`,
   ));
   API.on('error', (error: Error | any) => console.log('API ran into Error:', error));
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
