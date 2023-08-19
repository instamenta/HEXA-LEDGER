/** @file Handles request to post routes. */

import {Request, Response} from 'express';
import {iRequestWithUser} from '../utility/types/base-types';
import StatusCode from '@instamenta/http-status-codes';
import {VLogger, IVlog} from '@instamenta/vlogger';
import CommentClient from '../client/comment-client';
import {zParse} from '../validator/zod';
import * as zod from '../validator/validation-schemas';

export default class CommentController {
   private readonly vlog: IVlog;
   private client: CommentClient;

   constructor(vloggger: VLogger, client: CommentClient) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.client = client;
   }

   /**
    *! Used for getting the Post's comments.
    *
    * * PostId - the id of the post
    * * Page - Number for the Post's offset
    * * Limit -Number for limiting the Post's count.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/comments/:postId?page=1&limit=10', {
    *!   method: 'GET',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async getPostComments(req: Request, res: Response): Promise<void> {
      try {
         const {
            query: {limit, page},
            params: {postId},
         } = await zParse(zod.getPostCommentsSchema, req);

         this.client.getPostComments(postId, limit, page)
            .then((comments) =>
               res.status(StatusCode.OK)
                  .json(comments)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get post comments'})
            .end();

         this.vlog.error({e, func: 'getPostComments'});
      }
   }

   /**
    *! Used for Creating Comment on a Post.
    *
    * * UserId - the id of the user used for authentication and is being attached as Comment's author
    * * PostId - the id of the post that is being commented
    * * Content - Text serving as Comment's content.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/comment/:postId', {
    *!   method: 'POST',
    *!   body: JSON.stringify({
    *!     content: 'This is a comment.'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json',
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async createComment(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            params: {postId},
            userData: {_id},
            body: {content},
         } = await zParse(zod.createCommentSchema, req);

         this.client.createComment(_id, postId, content)
            .then((comment) =>
               res.status(StatusCode.OK)
                  .json(comment)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to create comment'})
            .end();

         this.vlog.error({e, func: 'createComment'});
      }
   }

   /**
    *! Used for Updating Comment.
    *
    * * UserId - the id of the user used for authentication
    * * PostId - the id of the post
    * * Content - the new Content of the comment
    * * CommentId - the id of the Comment.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/comment/:postId/:commentId', {
    *!   method: 'PUT',
    *!   body: JSON.stringify({
    *!     content: 'Updated comment content.'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json',
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async updateComment(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            params: {postId, commentId},
            userData: {_id},
            body: {content},
         } = await zParse(zod.updateCommentSchema, req);

         this.client.updateComment(_id, postId, content, commentId)
            .then((comment) =>
               res.status(StatusCode.OK)
                  .json(comment)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to update comment'})
            .end();

         this.vlog.error({e, func: 'updateComment'});
      }
   }

   /**
    *! Used for Deleting Comment.
    *
    * * CommentId - the id of the comment being deleted
    * * UserId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/comment/:commentId', {
    *!   method: 'DELETE',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async deleteComment(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            params: {commentId},
            userData: {_id},
         } = await zParse(zod.deleteCommentSchema, req);

         this.client.deleteComment(commentId, _id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to delete comment'})
            .end();

         this.vlog.error({e, func: 'deleteComment'});
      }
   }


   /**
    *! Used for Up-voting Comment.
    *
    * * CommentId - the id of the Comment used for targeting
    * * UsedId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/upvote/comment/:commentId', {
    *!   method: 'POST',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async upvoteComment(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            params: {commentId},
            userData: {_id},
         } = await zParse(zod.voteCommentSchema, req);

         this.client.upvoteComment(commentId, _id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());

      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to upvote post'})
            .end();

         this.vlog.error({e, func: 'upvoteComment'});
      }
   }


   /**
    *! Used for Down-voting Comment.
    *
    * * CommentId - the id of the Comment used for targeting
    * * UsedId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/downvote/comment/:commentId', {
    *!   method: 'POST',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public async downvoteComment(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            params: {commentId},
            userData: {_id},
         } = await zParse(zod.voteCommentSchema, req);

         this.client.downvoteComment(commentId, _id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to downvote post'})
            .end();

         this.vlog.error({e, func: 'downvoteComment'});
      }
   }

   public static getInstance(vloggger: VLogger, client: CommentClient): CommentController {
      return new CommentController(vloggger, client);
   }
}
