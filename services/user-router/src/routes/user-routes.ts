/** @file Router for User. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner} from '../middleware/auth-middleware';
import UserController from '../controller/user-controller';

class UserRouter {

   private router: Router = Router();
   private userController: UserController;

   constructor(userController: UserController) {
      this.userController = userController;

      this.router.get('/', this.userController.getAllUsers.bind(UserController));
      this.router.get('/find', this.userController.getUsers.bind(UserController));
      this.router.get('/:id', this.userController.getUserById.bind(UserController));
      this.router.get('/:id/followers', this.userController.getUserFollowers.bind(UserController));
      this.router.get('/:id/following', this.userController.getUserFollowing.bind(UserController));
      this.router.put('/:id/follow', <any>isAuth, <any>notOwner, <any>this.userController.followUser.bind(UserController));
      this.router.put('/:id/unfollow', <any>isAuth, <any>notOwner, <any>this.userController.unfollowUser.bind(UserController));
   }

   public static getInstance(postController: UserController): UserRouter {
      return new UserRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default UserRouter;
