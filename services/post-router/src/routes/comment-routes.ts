/** @file Router for Post. */

import {Router} from 'express';
import {isAuthenticated as isAuth, notOwner, isOwner} from '../middleware/auth-middleware';
import CommentController from '../controller/comment-controller';

export default class CommentRouter {

   private router: Router = Router();
   private commentController: CommentController;

   constructor(commentController: CommentController) {
      this.commentController = commentController;

      this.router.get('/:postId/comments', this.commentController.getPostComments.bind(commentController));
      this.router.post('/:postId/comments', <any>isAuth, <any>this.commentController.createComment.bind(commentController));
      this.router.put('/:commentId/upvote', <any>isAuth, <any>this.commentController.upvoteComment.bind(commentController));
      this.router.put('/:commentId/downvote', <any>isAuth, <any>this.commentController.downvoteComment.bind(commentController));
      this.router.put('/:commentId/:postId', <any>isAuth, <any>this.commentController.updateComment.bind(commentController));
      this.router.delete('/:commentId/:postId', <any>isAuth, <any>this.commentController.deleteComment.bind(commentController));
   }

   public static getInstance(commentController: CommentController): CommentRouter {
      return new CommentRouter(commentController);
   }

   public getRouter(): Router {
      return this.router;
   }
}

