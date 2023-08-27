/** @file Router for auth. */

import {Router} from 'express';
import AuthMiddleware from '../middleware/auth-middleware';
import ChatController from '../controller/chat-controller';

class ChatRouter {

   private readonly router: Router = Router();
   private readonly auth: AuthMiddleware;
   private readonly handler: ChatController;

   constructor(handler: ChatController, auth: AuthMiddleware) {
      this.handler = handler;
      this.auth = auth;

      this.initializeRouter();
   }

   private initializeRouter() {
      this.router.get('/:userId', <any>this.auth.isUser, <any>this.handler.getMessages.bind(this.handler));
      this.router.post('/:userId', <any>this.auth.isUser, <any>this.handler.sendMessage.bind(this.handler));
      this.router.patch('/:userId/:messageId', <any>this.auth.isUser, <any>this.handler.editMessage.bind(this.handler));
      this.router.delete('/:userId/:messageId', <any>this.auth.isUser, <any>this.handler.deleteMessage.bind(this.handler));
      this.router.put('/:userId/:messageId/upvote', <any>this.auth.isUser, <any>this.handler.upvoteMessage.bind(this.handler));
      this.router.put('/:userId/:messageId/downvote', <any>this.auth.isUser, <any>this.handler.downvoteMessage.bind(this.handler));

      this.router.post('/:userId/:messageId', <any>this.auth.isUser, <any>this.handler.sendReply.bind(this.handler));
      this.router.patch('/:userId/:messageId/:replyId', <any>this.auth.isUser, <any>this.handler.editReply.bind(this.handler));
      this.router.delete('/:userId/:messageId/:replyId', <any>this.auth.isUser, <any>this.handler.deleteReply.bind(this.handler));
      this.router.put('/:userId/:messageId/:replyId/upvote', <any>this.auth.isUser, <any>this.handler.upvoteReply.bind(this.handler));
      this.router.put('/:userId/:messageId/:replyId/downvote', <any>this.auth.isUser, <any>this.handler.downvoteReply.bind(this.handler));
   }

   public static getInstance(handler: ChatController, auth: AuthMiddleware): ChatRouter {
      return new ChatRouter(handler, auth);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default ChatRouter;

