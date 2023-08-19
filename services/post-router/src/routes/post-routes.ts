/** @file Router for Post. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner, isOwner} from '../middleware/auth-middleware';

import PostController from '../controller/post-controller';

export default class PostRouter {
   private router: Router = Router();
   private postController: PostController;

   constructor(postController: PostController) {
      this.postController = postController;

      this.router.get('/', <any>this.postController.getPosts);
      this.router.post('/', <any>isAuth, <any>this.postController.createPost);
      this.router.get('/:id', <any>this.postController.getPostById);
      this.router.put('/:id', <any>isAuth, <any>this.postController.updatePost);
      this.router.delete('/:id', <any>isAuth, <any>this.postController.deletePost);

      this.router.put('/:id/upvote', <any>isAuth, <any>this.postController.upvotePost);
      this.router.put('/:id/downvote', <any>isAuth, <any>this.postController.downvotePost);
      this.router.get('/users/:userId', <any>isAuth, <any>this.postController.getUserPosts);
   }

   public static getInstance(postController: PostController): PostRouter {
      return new PostRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

