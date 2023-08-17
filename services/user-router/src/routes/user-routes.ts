/** @file Router for User. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner} from '../middleware/auth-middleware';
import {pageLimit, pageLimitFilter} from '../validator/user-validator';
import UserController from '../controller/user-controller';

/**
 * @class UserRouter
 * @property router
 * @property userController
 */
class UserRouter {
   private router: Router = Router();
   private userController: UserController;

   /**
    * @constructor UserRouter
    * @param userController
    */
   constructor(userController: UserController) {
      this.userController = userController;

      this.router.get('/', pageLimit, <any>this.userController.getAllUsers);

      this.router.get('/find', pageLimitFilter, <any>this.userController.getUsers);

      this.router.get('/:id', <any>this.userController.getUserById);

      this.router.get('/:id/followers', pageLimit, <any>this.userController.getUserFollowers);

      this.router.get('/:id/following', pageLimit, <any>this.userController.getUserFollowing);

      this.router.put('/:id/follow', <any>isAuth, <any>notOwner, <any>this.userController.followUser);

      this.router.put('/:id/unfollow', <any>isAuth, <any>notOwner, <any>this.userController.unfollowUser);
   }

   public getRouter(): Router {
      return this.router;
   }
}

export default UserRouter;
