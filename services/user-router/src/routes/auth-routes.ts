/** @file Router for auth. */

import {Router} from 'express';
import {loginValidator, registerValidator} from '../validator/auth-validator';
import {isGuest, isAuthenticated as isAuth, isOwner} from '../middleware/auth-middleware';
import AuthController from '../controller/auth-controller';

/**
 * @class AuthRouter
 * @property router
 * @property authController
 */
class AuthRouter {
   private router: Router = Router();
   private authController: AuthController;

   /**
    * @constructor AuthRouter
    * @param authController
    */
   constructor(authController: AuthController) {
      this.authController = authController;

      this.router.post('/login', isGuest, loginValidator, <any>this.authController.login);

      this.router.post('/register', isGuest, registerValidator, <any>this.authController.register);

      this.router.route('/:id')
         .put(<any>isAuth, <any>isOwner, <any>this.authController.updateUserById)

         .delete(<any>isAuth, <any>isOwner, <any>this.authController.deleteUserById);
   }

   public getRouter():  Router {
      return this.router;
   }
}

export default AuthRouter;

