/** @file Start and initializes all services and the router. */

import * as Hexa from './utility/hexa-module';
import errorMiddleware from './middleware/error-middleware';
import {PrismaClient} from '../prisma/prisma/client';
import DotConfig from 'dot_configurator';
import {VLogger} from '@instamenta/vlogger';
import AuthMiddleware from './middleware/auth-middleware';
import AuthController from './controller/auth-controller';
import ChatController from './controller/chat-controller';
import AuthRouter from './routes/auth-routes';
import ChatRouter from './routes/chat-routes';
import AuthService from './service/auth-service';
import ChatService from './service/chat-service';
import TokenTools from './utility/token-tools';
import GroupService from "./service/group-service";
import GroupController from "./controller/group-controller";
import GroupRouter from "./routes/group-routes";

export const prisma = new PrismaClient();
export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API = Hexa.getExpressAPI();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));

   const tokenTools = TokenTools.getInstance(dot);
   const authMiddleware = AuthMiddleware.getInstance(tokenTools);

   const authService = AuthService.getInstance(prisma, tokenTools);
   const chatService = ChatService.getInstance(prisma);
   const groupService = GroupService.getInstance(prisma);

   const authController = AuthController.getInstance({vlogger, authService});
   const chatController = ChatController.getInstance({vlogger, chatService});
   const groupController = GroupController.getInstance({vlogger, groupService});

   const authRouter = AuthRouter.getInstance(authController, authMiddleware).getRouter();
   const chatRouter = ChatRouter.getInstance(chatController, authMiddleware).getRouter();
   const groupRouter = GroupRouter.getInstance(groupController, authMiddleware).getRouter();

   API.use('/chat/auth', authRouter);
   API.use('/chat', chatRouter);
   API.use('/group', groupRouter);

   API.use(errorMiddleware);

   API.listen(dot.GET('ROUTER_PORT', 5065), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'Chat-Router-Service')}] is running on port: [${dot.GET('ROUTER_PORT', 5075)}]`,
   ));
   API.on('error', (error: Error | any) => console.log('API ran into Error:', error));
})();

Hexa.processOn(['unhandledRejection', 'uncaughtException']);
Hexa.processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
