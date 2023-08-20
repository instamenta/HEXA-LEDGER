/** @file Router for auth. */

import {Router} from 'express';
import {isGuest, isAuthenticated as isAuth, isOwner} from '../middleware/auth-middleware';
import AuthController from '../controller/auth-controller';

class AuthRouter {

   private router: Router = Router();
   private authController: AuthController;

   constructor(authController: AuthController) {
      this.authController = authController;

      this.router.post('/login', isGuest, this.authController.login.bind(AuthController));
      this.router.post('/register', isGuest, this.authController.register.bind(AuthController));

      this.router.route('/:id')
         .put(<any>isAuth, <any>isOwner, <any>this.authController.updateUser.bind(AuthController))
         .delete(<any>isAuth, <any>isOwner, <any>this.authController.deleteUser.bind(AuthController));
   }

   public static getInstance(postController: AuthController): AuthRouter {
      return new AuthRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default AuthRouter;

