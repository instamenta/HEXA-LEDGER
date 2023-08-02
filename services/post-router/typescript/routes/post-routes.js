"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Router for handling post route requests. */
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth-middleware");
const error_middleware_1 = __importDefault(require("../middleware/error-middleware"));
const post_controller_1 = require("../controller/post-controller");
const POST_ROUTER = (0, express_1.Router)();
POST_ROUTER.route('/')
    .get(post_controller_1.getPosts)
    .post(auth_middleware_1.isAuthenticated, post_controller_1.createPost);
POST_ROUTER.route('/:id')
    .get(post_controller_1.getPostById)
    .put(auth_middleware_1.isAuthenticated, post_controller_1.updatePost)
    .delete(auth_middleware_1.isAuthenticated, post_controller_1.deletePost);
POST_ROUTER.route('/:postId/comments')
    .get(post_controller_1.getPostComments)
    .post(auth_middleware_1.isAuthenticated, post_controller_1.createComment);
POST_ROUTER.route('/:postId/comments/:commentId')
    .put(auth_middleware_1.isAuthenticated, post_controller_1.updateComment)
    .delete(auth_middleware_1.isAuthenticated, post_controller_1.deleteComment);
POST_ROUTER.route('/comment/:commentId/upvote')
    .put(auth_middleware_1.isAuthenticated, post_controller_1.upvoteComment);
POST_ROUTER.route('/comment/:commentId/downvote')
    .put(auth_middleware_1.isAuthenticated, post_controller_1.downvoteComment);
POST_ROUTER.route('/:id/upvote')
    .put(auth_middleware_1.isAuthenticated, post_controller_1.upvotePost);
POST_ROUTER.route('/:id/downvote')
    .put(auth_middleware_1.isAuthenticated, post_controller_1.downvotePost);
POST_ROUTER.route('/users/:userId')
    .get(auth_middleware_1.isAuthenticated, post_controller_1.getUserPosts);
POST_ROUTER.use('/*', error_middleware_1.default);
exports.default = POST_ROUTER;
