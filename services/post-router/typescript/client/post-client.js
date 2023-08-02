"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downvoteComment = exports.upvoteComment = exports.downvotePost = exports.upvotePost = exports.getUserPosts = exports.getPostComments = exports.getPosts = exports.getPostById = exports.deleteComment = exports.updateComment = exports.createComment = exports.deletePost = exports.updatePost = exports.createPost = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const grpc_client_1 = __importDefault(require("./grpc-client"));
const post_grpc_model_1 = __importDefault(require("../model/post-grpc-model"));
const comment_grpc_model_1 = __importDefault(require("../model/comment-grpc-model"));
const { PostForm, DeleteByObjectId, CommentForm, GetByObjectId, GetPostsRequest, GetCommentsRequest, GetUserPostsRequest, PostModel, CommentModel, VotePostRequest, VoteCommentRequest } = require('../protos/generated/posts_pb');
/**
 * @param title
 * @param description
 * @param authorId
 * @param pictures
 * @param isPromoted
 * @param tags
 * @returns
 */
function createPost(title = '', description = '', authorId = '', pictures = [], isPromoted = false, tags = []) {
    return new Promise((resolve, reject) => {
        const m = new PostForm()
            .setTitle(new wrappers_pb_1.StringValue().setValue(title))
            .setDescription(new wrappers_pb_1.StringValue().setValue(description))
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new wrappers_pb_1.StringValue().setValue(pic)))
            .setIsPromoted(new wrappers_pb_1.BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)));
        grpc_client_1.default.createPost(m, (err, response) => {
            err ? reject(err)
                : resolve(post_grpc_model_1.default.fromPostGRPCMessage(response));
        });
    });
}
exports.createPost = createPost;
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
function updatePost(id = '', title = '', description = '', authorId = '', pictures = [], isPromoted = false, tags = [], authId) {
    return new Promise((resolve, reject) => {
        const m = new PostForm()
            .setId(new wrappers_pb_1.StringValue().setValue(id))
            .setTitle(new wrappers_pb_1.StringValue().setValue(title))
            .setDescription(new wrappers_pb_1.StringValue().setValue(description))
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new wrappers_pb_1.StringValue().setValue(pic)))
            .setIsPromoted(new wrappers_pb_1.BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)))
            .setAuthId(new wrappers_pb_1.StringValue().setValue(authId));
        grpc_client_1.default.updatePost(m, (err, response) => {
            err ? reject(err)
                : resolve(post_grpc_model_1.default.fromPostGRPCMessage(response));
        });
    });
}
exports.updatePost = updatePost;
/**
 * @param id
 * @param authId
 * @returns
 */
function deletePost(id, authId) {
    return new Promise((resolve, reject) => {
        const m = new DeleteByObjectId()
            .setId(new wrappers_pb_1.StringValue().setValue(id))
            .setUserId(new wrappers_pb_1.StringValue().setValue(authId));
        grpc_client_1.default.deletePost(m, (err, response) => {
            err ? reject(err)
                : resolve(response);
        });
    });
}
exports.deletePost = deletePost;
/**
 * @param authorId
 * @param postId
 * @param content
 * @returns
 */
function createComment(authorId, postId, content) {
    return new Promise((resolve, reject) => {
        const m = new CommentForm()
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(authorId))
            .setContent(new wrappers_pb_1.StringValue().setValue(content))
            .setPostId(new wrappers_pb_1.StringValue().setValue(postId));
        grpc_client_1.default.createComment(m, (err, response) => {
            err ? reject(err)
                : resolve(comment_grpc_model_1.default.fromCommentGRPCMessage(response));
        });
    });
}
exports.createComment = createComment;
/**
 * @param authorId
 * @param postId
 * @param content
 * @param commentId
 * @returns
 */
function updateComment(authorId, postId, content, commentId) {
    return new Promise((resolve, reject) => {
        const m = new CommentForm()
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(authorId))
            .setContent(new wrappers_pb_1.StringValue().setValue(content))
            .setPostId(new wrappers_pb_1.StringValue().setValue(postId))
            .setId(new wrappers_pb_1.StringValue().setValue(commentId));
        grpc_client_1.default.updateComment(m, (err, response) => {
            err ? reject(err.message)
                : resolve(comment_grpc_model_1.default.fromCommentGRPCMessage(response));
        });
    });
}
exports.updateComment = updateComment;
/**
 * @param id
 * @param authId
 * @returns
 */
function deleteComment(id, authId) {
    return new Promise((resolve, reject) => {
        const m = new DeleteByObjectId()
            .setId(new wrappers_pb_1.StringValue().setValue(id))
            .setUserId(new wrappers_pb_1.StringValue().setValue(authId));
        grpc_client_1.default.deleteComment(m, (err, response) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
exports.deleteComment = deleteComment;
/**
 * @param id
 * @returns
 */
function getPostById(id) {
    return new Promise((resolve, reject) => {
        console.log(id);
        const m = new GetByObjectId()
            .setId(new wrappers_pb_1.StringValue().setValue(id));
        grpc_client_1.default.getPostById(m, (err, response) => {
            err ? reject(err.message)
                : resolve(post_grpc_model_1.default.fromPostGRPCMessage(response));
        });
    });
}
exports.getPostById = getPostById;
/**
 * @param ids
 * @param limit
 * @param page
 * @param filter
 * @param match
 * @returns
 */
function getPosts(ids = [], limit = 5, page = 1, filter = '', match = '') {
    return new Promise((resolve, reject) => {
        const m = new GetPostsRequest()
            .setPage(new wrappers_pb_1.Int32Value().setValue(page))
            .setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        // M.setIdsList(ids.map((id) => new StringValue().setValue(id)));
        // M.setFilter(new StringValue().setValue(filter));
        // M.setMatch(new StringValue().setValue(match));
        const posts = [], $stream = grpc_client_1.default.getPosts(m);
        $stream.on('data', (response) => {
            posts.push(post_grpc_model_1.default.fromPostGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(posts);
        });
    });
}
exports.getPosts = getPosts;
/**
 * @param postId
 * @param page
 * @param limit
 * @returns
 */
function getPostComments(postId, page = 1, limit = 10) {
    return new Promise((resolve, reject) => {
        const m = new GetCommentsRequest()
            .setId(new wrappers_pb_1.StringValue().setValue(postId))
            .setPage(new wrappers_pb_1.Int32Value().setValue(page))
            .setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        const comments = [], $stream = grpc_client_1.default.getPostComments(m);
        $stream.on('data', (response) => {
            comments.push(comment_grpc_model_1.default.fromCommentGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(comments);
        });
    });
}
exports.getPostComments = getPostComments;
/**
 * @param userId
 * @param limit
 * @param page
 * @param filter
 * @param match
 * @returns
 */
function getUserPosts(userId, limit = 10, page = 1, filter = '', match = '') {
    return new Promise((resolve, reject) => {
        const m = new GetUserPostsRequest()
            .setUserId(new wrappers_pb_1.StringValue())
            .setPage(new wrappers_pb_1.Int32Value().setValue(page))
            .setLimit(new wrappers_pb_1.Int32Value().setValue(limit))
            .setFilter(new wrappers_pb_1.StringValue().setValue(filter))
            .setMatch(new wrappers_pb_1.StringValue().setValue(match));
        const posts = [], $stream = grpc_client_1.default.getUserPosts(m);
        $stream.on('data', (response) => {
            posts.push(post_grpc_model_1.default.fromPostGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(posts);
        });
    });
}
exports.getUserPosts = getUserPosts;
/**
 * @param postId
 * @param userId
 * @returns
 */
function upvotePost(postId, userId) {
    return new Promise((resolve, reject) => {
        const m = new VotePostRequest()
            .setId(new wrappers_pb_1.StringValue().setValue(postId))
            .setCurrentUserId(new wrappers_pb_1.StringValue().setValue(userId));
        grpc_client_1.default.upvotePost(m, (err, response) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
exports.upvotePost = upvotePost;
/**
 * @param postId
 * @param userId
 * @returns
 */
function downvotePost(postId, userId) {
    return new Promise((resolve, reject) => {
        const m = new VotePostRequest()
            .setId(new wrappers_pb_1.StringValue().setValue(postId))
            .setCurrentUserId(new wrappers_pb_1.StringValue().setValue(userId));
        grpc_client_1.default.downvotePost(m, (err, response) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
exports.downvotePost = downvotePost;
/**
 * @param commentId
 * @param userId
 * @returns
 */
function upvoteComment(commentId, userId) {
    return new Promise((resolve, reject) => {
        const m = new VoteCommentRequest()
            .setId(new wrappers_pb_1.StringValue().setValue(commentId))
            .setCurrentUserId(new wrappers_pb_1.StringValue().setValue(userId));
        grpc_client_1.default.upvoteComment(m, (err, response) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
exports.upvoteComment = upvoteComment;
/**
 * @param commentId
 * @param userId
 * @returns
 */
function downvoteComment(commentId, userId) {
    return new Promise((resolve, reject) => {
        const m = new VoteCommentRequest()
            .setId(new wrappers_pb_1.StringValue().setValue(commentId))
            .setCurrentUserId(new wrappers_pb_1.StringValue().setValue(userId));
        grpc_client_1.default.downvoteComment(m, (err, response) => {
            err ? reject(err.message)
                : resolve(response);
        });
    });
}
exports.downvoteComment = downvoteComment;
