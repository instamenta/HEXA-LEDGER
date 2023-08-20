/** @file Wrapper used for reducing boiler template and handling errors out of the box. */
import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import Log from '../utility/logger';
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

import {
   CREATE_COMMENT, CREATE_POST,
   DELETE_COMMENT, DELETE_POST,
   DOWNVOTE_COMMENT,
   DOWNVOTE_POST, GET_POST_BY_ID,
   GET_POSTS,
   GET_POSTS_COMMENTS,
   GET_USER_POSTS, UPDATE_COMMENT, UPDATE_POST,
   UPVOTE_COMMENT, UPVOTE_POST
} from './post-service';

/**
 * @param call
 * @returns
 */
export async function getPosts(
   call: ServerWritableStream<GetPostsRequest, IPostModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING GET_POSTS...');
      await GET_POSTS(call);
      await Log['log']('info', '☕ FINISHED GET_POSTS');
      call.end();
   } catch (error: Error | any) {
      await Log['log']('error', error);
      call.emit(error);
   }
}

/**
 * @param call
 */
export async function getPostComments(
   call: ServerWritableStream<GetCommentsRequest, CommentModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING GET_POSTS_COMMENTS...');
      await GET_POSTS_COMMENTS(call);
      await Log['log']('info', '☕ FINISHED GET_POSTS_COMMENTS');
      call.end();
   } catch (error: Error | any) {
      await Log['log']('error', error);
      call.emit(error);
   }
}

/**
 * @param call
 */
export async function getUserPosts(
   call: ServerWritableStream<GetUserPostsRequest, IPostModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING GET_USER_POSTS...');
      await GET_USER_POSTS(call);
      await Log['log']('info', '☕ FINISHED GET_USER_POSTS');
      call.end();
   } catch (error: Error | any) {
      await Log['log']('error', error);
      call.emit(error);
   }
}

/* --------------------------------------------------------------*/
/**
 * @param call
 * @param callback
 */
export async function createPost(
   call: ServerUnaryCall<PostForm, IPostModel>,
   callback: sendUnaryData<IPostModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING CREATE_POST...');
      await CREATE_POST(call, callback);
      await Log['log']('info', '☕ FINISHED CREATE_POST');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function updatePost(
   call: ServerUnaryCall<PostForm, IPostModel>,
   callback: sendUnaryData<IPostModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING UPDATE_POST...');
      await UPDATE_POST(call, callback);
      await Log['log']('info', '☕ FINISHED UPDATE_POST');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function deletePost(
   call: ServerUnaryCall<DeleteByObjectId, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING DELETE_POST...');
      await DELETE_POST(call, callback);
      await Log['log']('info', '☕ FINISHED DELETE_POST');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function createComment(
   call: ServerUnaryCall<CommentForm, CommentModel>,
   callback: sendUnaryData<CommentModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING CREATE_COMMENT...');
      await CREATE_COMMENT(call, callback);
      await Log['log']('info', '☕ FINISHED CREATE_COMMENT');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function updateComment(
   call: ServerUnaryCall<CommentForm, CommentModel>,
   callback: sendUnaryData<CommentModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING UPDATE_COMMENT...');
      await UPDATE_COMMENT(call, callback);
      await Log['log']('info', '☕ FINISHED UPDATE_COMMENT');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function deleteComment(
   call: ServerUnaryCall<DeleteByObjectId, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING DELETE_COMMENT...');
      await DELETE_COMMENT(call, callback);
      await Log['log']('info', '☕ FINISHED DELETE_COMMENT');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function getPostById(
   call: ServerUnaryCall<GetByObjectId, IPostModel>,
   callback: sendUnaryData<IPostModel>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING GET_POST_BY_ID...');
      await GET_POST_BY_ID(call, callback);
      await Log['log']('info', '☕ FINISHED GET_POST_BY_ID');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function upvotePost(
   call: ServerUnaryCall<VotePostRequest, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING UPVOTE_POST...');
      await UPVOTE_POST(call, callback);
      await Log['log']('info', '☕ FINISHED UPVOTE_POST');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function downvotePost(
   call: ServerUnaryCall<VotePostRequest, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING DOWNVOTE_POST...');
      await DOWNVOTE_POST(call, callback);
      await Log['log']('info', '☕ FINISHED DOWNVOTE_POST');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function upvoteComment(
   call: ServerUnaryCall<VoteCommentRequest, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING UPVOTE_COMMENT...');
      await UPVOTE_COMMENT(call, callback);
      await Log['log']('info', '☕ FINISHED UPVOTE_COMMENT');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}


/**
 * @param call
 * @param callback
 */
export async function downvoteComment(
   call: ServerUnaryCall<VoteCommentRequest, Empty>,
   callback: sendUnaryData<Empty>
): Promise<void> {
   try {
      await Log['log']('debug', '⌛ CALLING DOWNVOTE_COMMENT...');
      await DOWNVOTE_COMMENT(call, callback);
      await Log['log']('info', '☕ FINISHED DOWNVOTE_COMMENT');
   } catch (error: Error | any) {
      await Log['log']('error', error);
      callback(error);
   }
}

