/** @file Wrapper used for reducing boiler template and handling errors out of the box. */
import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {
   CommentForm,
   CommentModel,
   DeleteByObjectId,
   GetByObjectId,
   GetCommentsRequest,
   GetPostsRequest,
   GetUserPostsRequest,
   PostForm,
   PostModel as IPostModel,
   VoteCommentRequest, VotePostRequest
} from '../protos/generated/types/posts_pb';
import {IVlog, VLogger} from '@instamenta/vlogger';

import PostService from './post-service';
import CommentService from './comment-service';

export default class Wrapper {

   vlog: IVlog;
   postService: PostService;
   commentService: CommentService;

   constructor(logger: VLogger, postService: PostService, commentService: CommentService) {
      this.vlog = logger.getVlog('Wrapper');
      this.postService = postService;
      this.commentService = commentService;
   }

   public static getInstance(logger: VLogger, postService: PostService, commentService: CommentService): Wrapper {
      return new Wrapper(logger, postService, commentService);
   }

   public async getPosts(
      call: ServerWritableStream<GetPostsRequest, IPostModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getPosts'});
         await this.postService.GET_POSTS(call);
         call.end();
      } catch (e: Error | any) {
         call.emit(e);
         this.vlog.error({e, func: 'getPosts'});
      }
   }

   public async getPostComments(
      call: ServerWritableStream<GetCommentsRequest, CommentModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getPostComments'});
         await this.commentService.GET_POSTS_COMMENTS(call);
         call.end();
      } catch (e: Error | any) {
         call.emit(e);
         this.vlog.error({e, func: 'getPostComments'});
      }
   }

   public async getUserPosts(
      call: ServerWritableStream<GetUserPostsRequest, IPostModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getUserPosts'});
         await this.postService.GET_USER_POSTS(call);
         call.end();
      } catch (e: Error | any) {
         call.emit(e);
         this.vlog.error({e, func: 'getUserPosts'});
      }
   }

   public async createPost(
      call: ServerUnaryCall<PostForm, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling createPost'});
         await this.postService.CREATE_POST(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'createPost'});
      }
   }

   public async updatePost(
      call: ServerUnaryCall<PostForm, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling updatePost'});
         await this.postService.UPDATE_POST(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'updatePost'});
      }
   }

   public async deletePost(
      call: ServerUnaryCall<DeleteByObjectId, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling deletePost'});
         await this.postService. DELETE_POST(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'deletePost'});
      }
   }

   public async createComment(
      call: ServerUnaryCall<CommentForm, CommentModel>,
      callback: sendUnaryData<CommentModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling createComment'});
         await this.commentService.CREATE_COMMENT(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'createComment'});
      }
   }

   public async updateComment(
      call: ServerUnaryCall<CommentForm, CommentModel>,
      callback: sendUnaryData<CommentModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling updateComment'});
         await this.commentService.UPDATE_COMMENT(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'updateComment'});
      }
   }

   public async deleteComment(
      call: ServerUnaryCall<DeleteByObjectId, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling deleteComment'});
         await this.commentService.DELETE_COMMENT(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'deleteComment'});
      }
   }

   public async getPostById(
      call: ServerUnaryCall<GetByObjectId, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getPostById'});
         await this.postService.GET_POST_BY_ID(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'getPostById'});
      }
   }

   public async upvotePost(
      call: ServerUnaryCall<VotePostRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling upvotePost'});
         await this.postService.UPVOTE_POST(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'upvotePost'});
      }
   }

   public async downvotePost(
      call: ServerUnaryCall<VotePostRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling downvotePost'});
         await this.postService.DOWNVOTE_POST(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'downvotePost'});
      }
   }

   public async upvoteComment(
      call: ServerUnaryCall<VoteCommentRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling upvoteComment'});
         await this.commentService.UPVOTE_COMMENT(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'upvoteComment'});
      }
   }

   public async downvoteComment(
      call: ServerUnaryCall<VoteCommentRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling downvoteComment'});
         await this.commentService.DOWNVOTE_COMMENT(call, callback);
      } catch (e: Error | any) {
         callback(e);
         this.vlog.error({e, func: 'downvoteComment'});
      }
   }

}