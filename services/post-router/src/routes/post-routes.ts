/** @file Router for Post. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner, isOwner} from '../middleware/auth-middleware';
import PostController from '../controller/post-controller';

export default class PostRouter {

   private router: Router = Router();
   private postController: PostController;

   constructor(postController: PostController) {
      this.postController = postController;

      this.router.route('/')
         .get(this.postController.getPosts.bind(postController))
         .post(<any>isAuth, <any>this.postController.createPost.bind(postController));

      this.router.route('/:id')
         .get(this.postController.getPostById.bind(postController))
         .put(<any>isAuth, <any>this.postController.updatePost.bind(postController))
         .delete(<any>isAuth, <any>this.postController.deletePost.bind(postController));

      this.router.put('/:id/upvote', <any>isAuth, <any>this.postController.upvotePost.bind(postController));
      this.router.put('/:id/downvote', <any>isAuth, <any>this.postController.downvotePost.bind(postController));
      this.router.get('/users/:userId', <any>isAuth, <any>this.postController.getUserPosts.bind(postController));
   }

   public static getInstance(postController: PostController): PostRouter {
      return new PostRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

