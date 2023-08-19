/** @file Router for Post. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner, isOwner} from '../middleware/auth-middleware';

import CommentController from '../controller/comment-controller';

export default class CommentRouter {

   private router: Router = Router();
   private commentController: CommentController;

   constructor(commentController: CommentController) {
      this.commentController = commentController;

      this.router.get('/:postId/comments', <any>this.commentController.getPostComments);
      this.router.post('/:postId/comments', <any>isAuth, <any>this.commentController.createComment);
      this.router.put('/:commentId/upvote', <any>isAuth, <any>this.commentController.upvoteComment);
      this.router.put('/:commentId/downvote', <any>isAuth, <any>this.commentController.downvoteComment);
      this.router.put('/:commentId/:postId', <any>isAuth, <any>this.commentController.updateComment);
      this.router.delete('/:commentId/:postId', <any>isAuth, <any>this.commentController.deleteComment);
   }

   public static getInstance(commentController: CommentController): CommentRouter {
      return new CommentRouter(commentController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

