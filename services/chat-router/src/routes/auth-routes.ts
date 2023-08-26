/** @file Router for auth. */ 'use strict'

import {Router} from 'express';
import AuthMiddleware from '../middleware/auth-middleware';
import AuthController from '../controller/auth-controller';

class AuthRouter {

   private router: Router = Router();
   private readonly auth: AuthMiddleware
   private readonly handler: AuthController;

   constructor(handler: AuthController, auth: AuthMiddleware) {
      this.handler = handler;
      this.auth = auth;

      this.initializeRouter();
   }

   private initializeRouter() {
      this.router.get('/', this.handler.getUsers.bind(this.handler));
      this.router.get('/:userId', this.handler.getUser.bind(this.handler));
      this.router.post('/:userId', this.auth.isAuth, this.handler.createUser.bind(this.handler));
      this.router.patch('/:userId', this.auth.isAuth, this.handler.editUsername.bind(this.handler));
   }

   public static getInstance(handler: AuthController, auth: AuthMiddleware): AuthRouter {
      return new AuthRouter(handler, auth);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default AuthRouter;

