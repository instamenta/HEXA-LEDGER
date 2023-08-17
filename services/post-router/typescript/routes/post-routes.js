"use strict";
/** @file Router for Post. */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth-middleware");
/**
 * @class PostRouter
 * @property router
 * @property postController
 */
class PostRouter {
    router = (0, express_1.Router)();
    postController;
    /**
     * @constructor
     * @param postController
     */
    constructor(postController) {
        this.postController = postController;
        this.router.get('/', this.postController.getPosts);
        this.router.post('/', auth_middleware_1.isAuthenticated, this.postController.createPost);
        this.router.get('/:id', this.postController.getPostById);
        this.router.put('/:id', auth_middleware_1.isAuthenticated, this.postController.updatePost);
        this.router.delete('/:id', auth_middleware_1.isAuthenticated, this.postController.deletePost);
        this.router.get('/:postId/comments', this.postController.getPostComments);
        this.router.post('/:postId/comments', auth_middleware_1.isAuthenticated, this.postController.createComment);
        this.router.put('/:postId/comments/:commentId', auth_middleware_1.isAuthenticated, this.postController.updateComment);
        this.router.delete('/:postId/comments/:commentId', auth_middleware_1.isAuthenticated, this.postController.deleteComment);
        this.router.put('/comment/:commentId/upvote', auth_middleware_1.isAuthenticated, this.postController.upvoteComment);
        this.router.put('/comment/:commentId/downvote', auth_middleware_1.isAuthenticated, this.postController.downvoteComment);
        this.router.put('/:id/upvote', auth_middleware_1.isAuthenticated, this.postController.upvotePost);
        this.router.put('/:id/downvote', auth_middleware_1.isAuthenticated, this.postController.downvotePost);
        this.router.get('/users/:userId', auth_middleware_1.isAuthenticated, this.postController.getUserPosts);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = PostRouter;
