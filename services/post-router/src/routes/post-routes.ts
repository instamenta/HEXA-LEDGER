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
         .get(this.postController.getPosts.bind(this.postController))
         .post(<any>isAuth, <any>this.postController.createPost.bind(this.postController));

      this.router.route('/:id')
         .get(this.postController.getPostById.bind(this.postController))
         .put(<any>isAuth, <any>this.postController.updatePost.bind(this.postController))
         .delete(<any>isAuth, <any>this.postController.deletePost.bind(this.postController));

      this.router.put('/:id/upvote', <any>isAuth, <any>this.postController.upvotePost.bind(this.postController));
      this.router.put('/:id/downvote', <any>isAuth, <any>this.postController.downvotePost.bind(this.postController));
      this.router.get('/users/:userId', <any>isAuth, <any>this.postController.getUserPosts.bind(this.postController));
   }

   public static getInstance(postController: PostController): PostRouter {
      return new PostRouter(postController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

