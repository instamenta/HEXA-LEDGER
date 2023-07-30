"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downvoteComment = exports.upvoteComment = exports.downvotePost = exports.upvotePost = exports.getPostById = exports.deleteComment = exports.updateComment = exports.createComment = exports.deletePost = exports.updatePost = exports.createPost = exports.getUserPosts = exports.getPostComments = exports.getPosts = void 0;
const logger_1 = __importDefault(require("../utility/logger"));
const post_service_1 = require("./post-service");
/**
 * @param call
 * @returns
 */
async function getPosts(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_POSTS...');
        await (0, post_service_1.GET_POSTS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_POSTS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getPosts = getPosts;
/**
 * @param call
 */
async function getPostComments(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_POSTS_COMMENTS...');
        await (0, post_service_1.GET_POSTS_COMMENTS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_POSTS_COMMENTS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getPostComments = getPostComments;
/**
 * @param call
 */
async function getUserPosts(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_USER_POSTS...');
        await (0, post_service_1.GET_USER_POSTS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_USER_POSTS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getUserPosts = getUserPosts;
/* --------------------------------------------------------------*/
/**
 * @param call
 * @param callback
 */
async function createPost(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING CREATE_POST...');
        await (0, post_service_1.CREATE_POST)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED CREATE_POST');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.createPost = createPost;
/**
 * @param call
 * @param callback
 */
async function updatePost(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UPDATE_POST...');
        await (0, post_service_1.UPDATE_POST)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UPDATE_POST');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.updatePost = updatePost;
/**
 * @param call
 * @param callback
 */
async function deletePost(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING DELETE_POST...');
        await (0, post_service_1.DELETE_POST)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED DELETE_POST');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.deletePost = deletePost;
/**
 * @param call
 * @param callback
 */
async function createComment(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING CREATE_COMMENT...');
        await (0, post_service_1.CREATE_COMMENT)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED CREATE_COMMENT');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.createComment = createComment;
/**
 * @param call
 * @param callback
 */
async function updateComment(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UPDATE_COMMENT...');
        await (0, post_service_1.UPDATE_COMMENT)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UPDATE_COMMENT');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.updateComment = updateComment;
/**
 * @param call
 * @param callback
 */
async function deleteComment(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING DELETE_COMMENT...');
        await (0, post_service_1.DELETE_COMMENT)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED DELETE_COMMENT');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.deleteComment = deleteComment;
/**
 * @param call
 * @param callback
 */
async function getPostById(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_POST_BY_ID...');
        await (0, post_service_1.GET_POST_BY_ID)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED GET_POST_BY_ID');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.getPostById = getPostById;
/**
 * @param call
 * @param callback
 */
async function upvotePost(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UPVOTE_POST...');
        await (0, post_service_1.UPVOTE_POST)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UPVOTE_POST');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.upvotePost = upvotePost;
/**
 * @param call
 * @param callback
 */
async function downvotePost(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING DOWNVOTE_POST...');
        await (0, post_service_1.DOWNVOTE_POST)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED DOWNVOTE_POST');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.downvotePost = downvotePost;
/**
 * @param call
 * @param callback
 */
async function upvoteComment(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UPVOTE_COMMENT...');
        await (0, post_service_1.UPVOTE_COMMENT)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UPVOTE_COMMENT');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.upvoteComment = upvoteComment;
/**
 * @param call
 * @param callback
 */
async function downvoteComment(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING DOWNVOTE_COMMENT...');
        await (0, post_service_1.DOWNVOTE_COMMENT)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED DOWNVOTE_COMMENT');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.downvoteComment = downvoteComment;
