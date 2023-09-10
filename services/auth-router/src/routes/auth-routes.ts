import {Router} from 'express';
import AuthController from '../controller/auth-controller';

class AuthRouter {

   private router: Router = Router();
   private readonly authController: AuthController;

   constructor(authController: AuthController) {
      this.authController = authController;
      this.initializeRouter();
   }

   private initializeRouter() {
      this.router.post('/auth', this.authController.authenticate.bind(this.authController));
      this.router.put('/auth', this.authController.update.bind(this.authController));
   }

   public static getInstance(postController: AuthController): AuthRouter {
      return new AuthRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default AuthRouter;

