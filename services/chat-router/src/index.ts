/** @file Start and initializes all services and the router. */ 'use strict'

import * as Hexa from './utility/hexa-module';
import errorMiddleware from './middleware/error-middleware';
import {PrismaClient} from '../prisma/prisma/client'
import DotConfig from 'dot_configurator';
import {VLogger} from '@instamenta/vlogger';
import AuthMiddleware from './middleware/auth-middleware';
import AuthController from "./controller/auth-controller";
import AuthRouter from "./routes/auth-routes";
import ChatController from './controller/chat-controller';
import ChatRouter from './routes/chat-routes';

export const prisma = new PrismaClient()
export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API = Hexa.getExpressAPI();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));
   const authMiddleware = AuthMiddleware.getInstance();

   const authController = AuthController.getInstance(vlogger, prisma)
   const chatController = ChatController.getInstance(vlogger, prisma);

   const authRouter = AuthRouter.getInstance(authController, authMiddleware).getRouter();
   const chatRouter = ChatRouter.getInstance(chatController, authMiddleware).getRouter();

   API.use('/chat/auth', authRouter);
   API.use('/chat', chatRouter);

   API.use(errorMiddleware);

   API.listen(+dot.GET('ROUTER_PORT', 5085), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'Chat-Router-Service')}] is running on port: [${+dot.GET('ROUTER_PORT', 5075)}]`,
   ));
   API.on('error', (error: Error | any) => console.log('API ran into Error:', error));
})();

Hexa.processOn(['unhandledRejection', 'uncaughtException']);
Hexa.processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
