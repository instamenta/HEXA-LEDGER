/** @file Handles calls to post related endpoints on groc client. */
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {StringValue, Int32Value, BoolValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import GRPC_CLIENT from './grpc-client';
import * as GRPC from '@grpc/grpc-js';
import PostGrpcModel from '../model/post-grpc-model';
import CommentGrpcModel from '../model/comment-grpc-model';
import {
    PostModel as IPostModel,
    CommentModel as ICommentModel
} from '../protos/generated/types/posts_pb';

const {
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
} = require('../protos/generated/posts_pb');

/**
 * @param title
 * @param description
 * @param authorId
 * @param pictures
 * @param isPromoted
 * @param tags
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
        const m = new PostForm()
            .setTitle(new StringValue().setValue(title))
            .setDescription(new StringValue().setValue(description))
            .setAuthorId(new StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)))
            .setIsPromoted(new BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new StringValue().setValue(tag)));
        GRPC_CLIENT.createPost(m, (err: GRPC.ServiceError, response: IPostModel) => {
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
 * @param authId
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
    authId: string,
): Promise<PostGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new PostForm()
            .setId(new StringValue().setValue(id))
            .setTitle(new StringValue().setValue(title))
            .setDescription(new StringValue().setValue(description))
            .setAuthorId(new StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)))
            .setIsPromoted(new BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new StringValue().setValue(tag)))
            .setAuthId(new StringValue().setValue(authId));
        GRPC_CLIENT.updatePost(m, (err: GRPC.ServiceError, response: IPostModel) => {
            err ? reject(err)
                : resolve(PostGrpcModel.fromPostGRPCMessage(response));
        });
    });
}

/**
 * @param id
 * @param authId
 * @returns
 */
export function deletePost(id: string, authId: string): Promise<Empty> {
    return new Promise((resolve, reject) => {
        const m = new DeleteByObjectId()
            .setId(new StringValue().setValue(id))
            .setUserId(new StringValue().setValue(authId));
        GRPC_CLIENT.deletePost(m, (err: GRPC.ServiceError, response: Empty) => {
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
): Promise<CommentGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new CommentForm()
            .setAuthorId(new StringValue().setValue(authorId))
            .setContent(new StringValue().setValue(content))
            .setPostId(new StringValue().setValue(postId));
        GRPC_CLIENT.createComment(m, (err: GRPC.ServiceError, response: ICommentModel) => {
            err ? reject(err)
                : resolve(CommentGrpcModel.fromCommentGRPCMessage(response));
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
): Promise<CommentGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new CommentForm()
            .setAuthorId(new StringValue().setValue(authorId))
            .setContent(new StringValue().setValue(content))
            .setPostId(new StringValue().setValue(postId))
            .setId(new StringValue().setValue(commentId));
        GRPC_CLIENT.updateComment(m, (err: GRPC.ServiceError, response: ICommentModel) => {
            err ? reject(err.message)
                : resolve(CommentGrpcModel.fromCommentGRPCMessage(response));
        });
    });
}

/**
 * @param id
 * @param authId
 * @returns
 */
export function deleteComment(id: string, authId: string): Promise<Empty> {
    return new Promise((resolve, reject) => {
        const m = new DeleteByObjectId()
            .setId(new StringValue().setValue(id))
            .setUserId(new StringValue().setValue(authId));
        GRPC_CLIENT.deleteComment(m, (err: GRPC.ServiceError, response: Empty) => {
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
        console.log(id)
        const m = new GetByObjectId()
            .setId(new StringValue().setValue(id));
        GRPC_CLIENT.getPostById(m, (err: GRPC.ServiceError, response: IPostModel) => {
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
        const m = new GetPostsRequest()
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit));
        // M.setIdsList(ids.map((id) => new StringValue().setValue(id)));
        // M.setFilter(new StringValue().setValue(filter));
        // M.setMatch(new StringValue().setValue(match));
        const posts: PostGrpcModel[] = []
            , $stream = GRPC_CLIENT.getPosts(m)
        ;
        $stream.on('data', (response: IPostModel) => {
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
): Promise<Array<CommentGrpcModel>> {
    return new Promise((resolve, reject) => {
        const m = new GetCommentsRequest()
            .setId(new StringValue().setValue(postId))
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit));
        const comments: CommentGrpcModel[] = []
            , $stream = GRPC_CLIENT.getPostComments(m)
        ;
        $stream.on('data', (response: ICommentModel) => {
            comments.push(CommentGrpcModel.fromCommentGRPCMessage(response));
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
        const m = new GetUserPostsRequest()
            .setUserId(new StringValue())
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit))
            .setFilter(new StringValue().setValue(filter))
            .setMatch(new StringValue().setValue(match));
        const posts: PostGrpcModel[] = []
            , $stream = GRPC_CLIENT.getUserPosts(m)
        ;
        $stream.on('data', (response: IPostModel) => {
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
 * @param userId
 * @returns
 */
export function upvotePost(
    postId: string,
    userId: string,
): Promise<Empty> {
    return new Promise((resolve, reject) => {
        const m = new VotePostRequest()
            .setId(new StringValue().setValue(postId))
            .setCurrentUserId(new StringValue().setValue(userId));
        GRPC_CLIENT.upvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}

/**
 * @param postId
 * @param userId
 * @returns
 */
export function downvotePost(
    postId: string,
    userId: string,
): Promise<Empty> {
    return new Promise((resolve, reject) => {
        const m = new VotePostRequest()
            .setId(new StringValue().setValue(postId))
            .setCurrentUserId(new StringValue().setValue(userId));
        GRPC_CLIENT.downvotePost(m, (err: GRPC.ServiceError, response: Empty) => {
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
        const m = new VoteCommentRequest()
            .setId(new StringValue().setValue(commentId))
            .setCurrentUserId(new StringValue().setValue(userId));
        GRPC_CLIENT.upvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
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
        const m = new VoteCommentRequest()
            .setId(new StringValue().setValue(commentId))
            .setCurrentUserId(new StringValue().setValue(userId));
        GRPC_CLIENT.downvoteComment(m, (err: GRPC.ServiceError, response: Empty) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
