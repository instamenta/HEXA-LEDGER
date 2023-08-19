/** @file Handles request to post routes. */

import {Request, Response} from 'express';
import {iRequestWithUser} from '../utility/types/base-types';
import StatusCode from '@instamenta/http-status-codes';
import {VLogger, IVlog} from '@instamenta/vlogger';
import PostClient from '../client/post-client';

export default class PostController {

   private readonly vlog: IVlog;
   private client: PostClient;

   constructor(vloggger: VLogger, client: PostClient) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.client = client;
   }

   public static getInstance(vloggger: VLogger, client: PostClient): PostController {
      return new PostController(vloggger, client);
   }

   /**
    *! Gets Posts filtered by Optional Parameters.
    *
    * * Ids - List of Post Ids
    * * Limit - Number for limiting the Post's count
    * * Page - Number for the Post's offset
    * * Filter - specific Tags or Characteristics
    * * Match - Regex or text.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts', {
    *!   method: 'POST',
    *!   body: JSON.stringify({ ids: ['id1', 'id2'], ... }),
    *!   headers: {
    *!     'Content-Type': 'application/json'
    *!   }
    *! })
    */
   public getPosts(req: Request, res: Response): void {
      try {
         const {ids} = req.body;
         this.client.getPosts(
            ids,
            req.query?.limit ? +req.query!.limit : undefined,
            req.query?.page ? +req.query!.page : undefined,
            req.query?.filter as string,
            req.query?.match as string,
         )
            .then((posts) =>
               res.status(StatusCode.OK)
                  .json(posts)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get posts'})
            .end();

         this.vlog.error({e, func: 'getPosts'});
      }
   }

   /**
    *! Create Post from submitted form.
    *
    * * Title - Text that servers as Title for the Post
    * * Description - Text explaining the post
    * * AuthorId - The id of the Post's creator
    * * Pictures - List of pictures belonging to post
    * * IsPromoted - Flag signalling if post is promoted
    * * Tags - used for filltering.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/create', {
    *!   method: 'POST',
    *!   body: JSON.stringify({
    *!     title: 'My Post',
    *!     description: 'This is my post.',
    *!     authorId: 'author123',
    *!     pictures: ['pic1.jpg', 'pic2.jpg'],
    *!     isPromoted: true,
    *!     tags: ['tag1', 'tag2']
    *! }),
    */
   public createPost(
      req: Request<NonNullable<unknown>, NonNullable<unknown> /** ,Z_CreatePostSchema.*/>,
      res: Response,
   ): void {
      try {
         this.client.createPost(
            req.body.title,
            req.body.description,
            req.body.authorId,
            req.body.pictures,
            req.body.isPromoted,
            req.body.tags,
         )
            .then((post) =>
               res.status(StatusCode.OK)
                  .json(post)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to create post'})
            .end();

         this.vlog.error({e, func: 'createPost'});
      }
   }

   /**
    *! Used for getting specific Post.
    *
    * * Id - the Id of a Post.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/upvote/:id', {
    *!   method: 'POST',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public getPostById(req: Request, res: Response): void {
      try {
         this.client.getPostById(
            req.params.id,
         )
            .then((post) =>
               res.status(StatusCode.OK)
                  .json(post)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get post'})
            .end();

         this.vlog.error({e, func: 'getPostById'});
      }
   }

   /**
    *! Used for Updating Post.
    *
    * * PostId - Post id used for finding the specific post to be updated
    * * title - the new or old title of the post
    * * description - the new or old description of the title
    * * authorId - the post's author id
    * * pictures - List of pictures belonging to the Post
    * * isPromoted - Flag signalling if post is promoted
    * * tags - tags used for filtering
    * * userId - the id of the user sending the req used for authentication.
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
    *!   .then(res => res.json())
    *!   .then(data => console.log(data))
    *!   .catch(error => console.error(error));
    */
   public updatePost(req: iRequestWithUser, res: Response): void {
      try {
         this.client.updatePost(
            req.params.id,
            req.body.title,
            req.body.description,
            req.body.authorId,
            req.body.pictures,
            req.body.isPromoted,
            req.body.tags,
            req.userData._id,
         )
            .then((post) =>
               res.status(StatusCode.OK)
                  .json(post)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to update post'})
            .end();

         this.vlog.error({e, func: 'updatePost'});
      }
   }

   /**
    *! Used for Deleting specific post.
    *
    * * PostId - the id of the post that is being deleted
    * * UserId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/delete/:postId', {
    *!   method: 'DELETE',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public deletePost(req: iRequestWithUser, res: Response): void {
      try {
         this.client.deletePost(req.params.id, req.userData._id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to delete post'})
            .end();

         this.vlog.error({e, func: 'deletePost'});
      }
   }

   /**
    *! Used for Up-voting Post.
    *
    * * Post - the id of the Post targeted
    * * UsedId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/upvote/:id', {
    *!   method: 'POST',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public upvotePost(req: iRequestWithUser, res: Response): void {
      try {
         this.client.upvotePost(
            req.params.id,
            req.userData._id,
         ).then(() =>
            res.status(StatusCode.OK)
               .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to upvote post'})
            .end();

         this.vlog.error({e, func: 'upvotePost'});
      }
   }

   /**
    *! Used for Down-voting Post.
    *
    * * PostId - the id of the Post used for targeting
    * * UsedId - the id of the user used for authentication.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/downvote/:id', {
    *!   method: 'POST',
    *!   headers: {
    *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   public downvotePost(req: iRequestWithUser, res: Response): void {
      try {
         this.client.downvotePost(
            req.params.id,
            req.userData._id,
         )
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to downvote post'})
            .end();

         this.vlog.error({e, func: 'downvotePost'});
      }
   }

   /**
    *! Gets Posts of specific User.
    *
    * * UserId - id of the user being targeted
    * * Limit - Number for limiting the Post's count
    * * Page - Number for the Post's offset
    * * Filter - specific Tags or Characteristics
    * * Match - Regex or text.
    *
    * @param req
    * @param res
    * @example
    *! fetch('/posts/user/:userId', {
    *!   method: 'GET',
    *! })
    */
   public getUserPosts(req: Request, res: Response): void {
      try {
         this.client.getUserPosts(
            req.params.userId,
            req.query?.limit ? +req.query!.limit : undefined,
            req.query?.page ? +req.query!.page : undefined,
            req.query.filter as string,
            req.query.match as string,
         ).then((posts) =>
            res.status(StatusCode.OK)
               .json(posts)
               .end());
      } catch (e: any) {

         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get user posts'})
            .end();

         this.vlog.error({e, func: 'getUserPosts'});
      }
   }
}
