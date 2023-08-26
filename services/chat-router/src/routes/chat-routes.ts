/** @file Router for auth. */ 'use strict'

import {Router} from 'express';
import AuthMiddleware from '../middleware/auth-middleware';
import ChatController from '../controller/chat-controller';

class ChatRouter {

   private router: Router = Router();
   private readonly auth: AuthMiddleware
   private readonly handler: ChatController;

   constructor(handler: ChatController, auth: AuthMiddleware) {
      this.handler = handler;
      this.auth = auth;

      this.initializeRouter();
   }

   private initializeRouter() {
      this.router.get('/:userId', this.auth.isAuth, this.handler.getMessages.bind(this.handler));
      this.router.post('/:userId', this.auth.isAuth, this.handler.sendMessage.bind(this.handler));
      this.router.patch('/:userId', this.auth.isAuth, this.handler.editMessage.bind(this.handler));
   }

   public static getInstance(handler: ChatController, auth: AuthMiddleware): ChatRouter {
      return new ChatRouter(handler, auth);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default ChatRouter;

