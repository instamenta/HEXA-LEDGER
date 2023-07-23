import {
	PostForm,
	DeleteByObjectId,
	CommentForm,
	GetByObjectId,
	GetPostsRequest,
	GetCommentsRequest,
	GetUserPostsRequest,
	PostModel,
	CommentModel,
	VotePostRequest, VoteCommentRequest
} from '../protos/generated/types/posts_pb';

import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {StringValue, Int32Value, BoolValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import CLIENT from './grpc-client';
import * as GRPC from '@grpc/grpc-js';
import PostGrpcModel from '../model/post-grpc-model';

/**
 * @param title
 * @param  description
 * @param  authorId
 * @param  pictures
 * @param  isPromoted
 * @param  tags
 * @returns
 */
export function createPost(
	title = '',
	description = '',
	authorId = '',
	pictures: Array<string> = [],
	isPromoted = false,
	tags: Array<string> = [],
): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new PostForm();
		m.setTitle(new StringValue().setValue(title));
		m.setDescription(new StringValue().setValue(description));
		m.setAuthorId(new StringValue().setValue(authorId));
		m.setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)));
		m.setIsPromoted(new BoolValue().setValue(isPromoted));
		m.setTagsList(tags.map((tag) => new StringValue().setValue(tag)));
		CLIENT.createPost(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 * @param id
 * @param title
 * @param description
 * @param authorId
 * @param pictures
 * @param isPromoted
 * @param tags
 * @returns
 */
export function updatePost(
	id = '',
	title = '',
	description = '',
	authorId = '',
	pictures: Array<string> = [],
	isPromoted = false,
	tags: Array<string> = [],
): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new PostForm();
		m.setId(new StringValue().setValue(id));
		m.setTitle(new StringValue().setValue(title));
		m.setDescription(new StringValue().setValue(description));
		m.setAuthorId(new StringValue().setValue(authorId));
		m.setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)));
		m.setIsPromoted(new BoolValue().setValue(isPromoted));
		m.setTagsList(tags.map((tag) => new StringValue().setValue(tag)));
		CLIENT.updatePost(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 * @param id
 * @returns
 */
export function deletePost(id: string): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new DeleteByObjectId();
		m.setId(new StringValue().setValue(id));
		CLIENT.deletePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err)
				: resolve(response);
		});
	});
}

/**
 * @param authorId
 * @param postId
 * @param content
 * @returns
 */
export function createComment(
	authorId: string,
	postId: string,
	content: string
): Promise<CommentModel> {
	return new Promise((resolve, reject) => {
		const m = new CommentForm();
		m.setAuthorId(new StringValue().setValue(authorId));
		m.setContent(new StringValue().setValue(postId));
		m.setPostId(new StringValue().setValue(content));
		CLIENT.createComment(m, (err: GRPC.ServiceError, response: CommentModel) => {
			err ? reject(err)
				: resolve(response);
		});
	});
}

/**
 * @param authorId
 * @param postId
 * @param content
 * @param commentId
 * @returns
 */
export function updateComment(
	authorId: string,
	postId: string,
	content: string,
	commentId: string,
): Promise<CommentModel> {
	return new Promise((resolve, reject) => {
		const m = new CommentForm();
		m.setAuthorId(new StringValue().setValue(authorId));
		m.setContent(new StringValue().setValue(postId));
		m.setPostId(new StringValue().setValue(content));
		m.setId(new StringValue().setValue(commentId));
		CLIENT.updateComment(m, (err: GRPC.ServiceError, response: CommentModel) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 * @param id
 * @returns
 */
export function deleteComment(id: string): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new DeleteByObjectId();
		m.setId(new StringValue().setValue(id));

		CLIENT.deleteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 * @param id
 * @returns
 */
export function getPostById(id: string): Promise<PostGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new GetByObjectId();
		m.setId(new StringValue().setValue(id));
		CLIENT.getPostById(m, (err: GRPC.ServiceError, response: PostModel) => {
			err ? reject(err.message)
				: resolve(PostGrpcModel.fromPostGRPCMessage(response));
		});
	});
}

/**
 * @param ids
 * @param limit
 * @param page
 * @param filter
 * @param match
 * @returns
 */
export function getPosts(
	ids: Array<string> = [],
	limit = 5,
	page = 1,
	filter = '',
	match = '',
): Promise<Array<PostGrpcModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetPostsRequest();
		m.setIdsList(ids.map((id) => new StringValue().setValue(id)));
		m.setPage(new Int32Value().setValue(limit));
		m.setLimit(new Int32Value().setValue(page));
		m.setFilter(new StringValue().setValue(filter));
		m.setMatch(new StringValue().setValue(match));

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
 * @param postId
 * @param page
 * @param limit
 * @returns
 */
export function getPostComments(
	postId: string,
	page = 1,
	limit = 10,
): Promise<Array<CommentModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetCommentsRequest();
		m.setId(new StringValue().setValue(postId));
		m.setPage(new Int32Value().setValue(page));
		m.setLimit(new Int32Value().setValue(limit));

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
 * @param userId
 * @param limit
 * @param page
 * @param filter
 * @param match
 * @returns
 */
export function getUserPosts(
	userId: string,
	limit = 10,
	page = 1,
	filter = '',
	match = '',
): Promise<Array<PostGrpcModel>> {
	return new Promise((resolve, reject) => {
		const m = new GetUserPostsRequest();
		m.setUserId(new StringValue());
		m.setPage(new Int32Value().setValue(page));
		m.setLimit(new Int32Value().setValue(limit));
		m.setFilter(new StringValue().setValue(filter));
		m.setMatch(new StringValue().setValue(match));
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
 * @param postId
 * @param userId
 * @returns
 */
export function upvotePost(
	postId: string,
	userId: string,
): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new VotePostRequest();
		m.setId(new StringValue().setValue(postId));
		m.setCurrentUserId(new StringValue().setValue(userId));
		CLIENT.upvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 *
 * @param postId
 * @param userId
 * @returns
 */
export function downvotePost(
	postId: string,
	userId: string,
): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new VotePostRequest();
		m.setId(new StringValue().setValue(postId));
		m.setCurrentUserId(new StringValue().setValue(userId));
		CLIENT.downvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 * @param commentId
 * @param userId
 * @returns
 */
export function upvoteComment(
	commentId: string,
	userId: string,
): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new VoteCommentRequest();
		m.setId(new StringValue().setValue(commentId));
		m.setCurrentUserId(new StringValue().setValue(userId));
		CLIENT.upvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}

/**
 * @param commentId
 * @param userId
 * @returns
 */
export function downvoteComment(
	commentId: string,
	userId: string,
): Promise<Empty> {
	return new Promise((resolve, reject) => {
		const m = new VoteCommentRequest();
		m.setId(new StringValue().setValue(commentId));
		m.setCurrentUserId(new StringValue().setValue(userId));
		CLIENT.downvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
			err ? reject(err.message)
				: resolve(response);
		});
	});
}
