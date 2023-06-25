import {
	PostForm,
	DeleteByObjectId,
	CommentForm,
	GetByObjectId,
	GetPostsRequest,
	GetCommentsRequest,
	GetUserPostsRequest,
	UpdateByObjectId
	,PostModel, CommentModel} from '../protos/generated/types/posts_pb';

import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {StringValue, Int32Value} from 'google-protobuf/google/protobuf/wrappers_pb';
import CLIENT from './grpc-client';
import * as GRPC from '@grpc/grpc-js';
import PostGrpcModel from '../model/post-grpc-model';

/**
 *
 */
function createPost(): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new PostForm();

		CLIENT.createPost(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err.message)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 *
 */
function updatePost(): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new PostForm();

		CLIENT.updatePost(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err.message)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 *
 */
function deletePost(): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new DeleteByObjectId();

		CLIENT.deletePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function createComment(): Promise<CommentModel> {
	return new Promise((resolve, reject) => {
		const m = new CommentForm();

		CLIENT.createComment(m, (err: GRPC.ServiceError, response: CommentModel) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function updateComment(): Promise<CommentModel> {
	return new Promise((resolve, reject) => {
		const m = new CommentForm();

		CLIENT.updateComment(m, (err: GRPC.ServiceError, response: CommentModel) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function deleteComment(): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new DeleteByObjectId();

		CLIENT.deleteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function getPostById(): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new GetByObjectId();

		CLIENT.getPostById(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err.message)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 *
 */
function getPosts(): Promise<Array<PostGrpcModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetPostsRequest();

		const posts: PostGrpcModel[] = [];
		const $stream = CLIENT.getPost(m);

		$stream.on('data', (response: PostModel) => {
			posts.push(PostGrpcModel.fromPostGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(posts);
		});
	});
}

/**
 *
 */
function getPostComments(): Promise<Array<CommentModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetCommentsRequest();

		const comments: CommentModel[] = [];
		const $stream = CLIENT.getPostComments(m);

		$stream.on('data', (response: CommentModel) => {
			comments.push(response);
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(comments);
		});
	});
}

/**
 *
 */
function getUserPosts(): Promise<Array<PostGrpcModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetUserPostsRequest();

		const posts: PostGrpcModel[] = [];
		const $stream = CLIENT.getUserPosts(m);

		$stream.on('data', (response: PostModel) => {
			posts.push(PostGrpcModel.fromPostGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(posts);
		});
	});
}

/**
 *
 */
function upvotePost(): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new UpdateByObjectId();

		CLIENT.upvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function downvotePost(): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new UpdateByObjectId();

		CLIENT.downvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 */
function upvoteComment(): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new UpdateByObjectId();

		CLIENT.upvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 * @param request
 */
function downvoteComment(request: UpdateByObjectId): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new UpdateByObjectId();

		CLIENT.downvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

export {
	createPost,
	updatePost,
	deletePost,
	createComment,
	updateComment,
	deleteComment,
	getPostById,
	getPosts,
	getPostComments,
	getUserPosts,
	upvotePost,
	downvotePost,
	upvoteComment,
	downvoteComment,
};
