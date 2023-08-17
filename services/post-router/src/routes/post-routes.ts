/** @file Router for Post. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner, isOwner} from '../middleware/auth-middleware';
import PostController from '../controller/post-controller';

/**
 * @class PostRouter
 * @property router
 * @property postController
 */
export default class PostRouter {
   private router: Router = Router();
   private postController: PostController;

   /**
    * @constructor
    * @param postController
    */
   constructor(postController: PostController) {
      this.postController = postController;

      this.router.get('/', <any>this.postController.getPosts);

      this.router.post('/', <any>isAuth, <any>this.postController.createPost);

      this.router.get('/:id', <any>this.postController.getPostById);

      this.router.put('/:id', <any>isAuth, <any>this.postController.updatePost);

      this.router.delete('/:id', <any>isAuth, <any>this.postController.deletePost);

      this.router.get('/:postId/comments', <any>this.postController.getPostComments);

      this.router.post('/:postId/comments', <any>isAuth, <any>this.postController.createComment);

      this.router.put('/:postId/comments/:commentId', <any>isAuth, <any>this.postController.updateComment);

      this.router.delete('/:postId/comments/:commentId', <any>isAuth, <any>this.postController.deleteComment);

      this.router.put('/comment/:commentId/upvote', <any>isAuth, <any>this.postController.upvoteComment);

      this.router.put('/comment/:commentId/downvote', <any>isAuth, <any>this.postController.downvoteComment);

      this.router.put('/:id/upvote', <any>isAuth, <any>this.postController.upvotePost);

      this.router.put('/:id/downvote', <any>isAuth, <any>this.postController.downvotePost);

      this.router.get('/users/:userId', <any>isAuth, <any>this.postController.getUserPosts);

   }

   public getRouter():  Router{
      return this.router;
   }
}

