/** @file Router for auth. */

import {Router} from 'express';
import {isGuest, isAuthenticated as isAuth, isOwner} from '../middleware/auth-middleware';
import ChatController from '../controller/chat-controller';

class AuthRouter {

   private router: Router = Router();
   private readonly chatController: ChatController;

   constructor(chatController: ChatController) {
      this.chatController = chatController;

      this.router.get('/private/:userId', isAuth, this.chatController.getConversation.bind(this.chatController));
      this.router.post('/private/:userId', isAuth, this.chatController.sendMessage.bind(this.chatController));

      

   }

   public static getInstance(postController: ChatController): AuthRouter {
      return new AuthRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default AuthRouter;

