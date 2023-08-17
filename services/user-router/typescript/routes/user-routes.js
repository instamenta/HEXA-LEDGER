"use strict";
/** @file Router for User. */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth-middleware");
const user_validator_1 = require("../validator/user-validator");
/**
 * @class UserRouter
 * @property router
 * @property userController
 */
class UserRouter {
    router = (0, express_1.Router)();
    userController;
    /**
     * @constructor UserRouter
     * @param userController
     */
    constructor(userController) {
        this.userController = userController;
        this.router.get('/', user_validator_1.pageLimit, this.userController.getAllUsers);
        this.router.get('/find', user_validator_1.pageLimitFilter, this.userController.getUsers);
        this.router.get('/:id', this.userController.getUserById);
        this.router.get('/:id/followers', user_validator_1.pageLimit, this.userController.getUserFollowers);
        this.router.get('/:id/following', user_validator_1.pageLimit, this.userController.getUserFollowing);
        this.router.put('/:id/follow', auth_middleware_1.isAuthenticated, auth_middleware_1.notOwner, this.userController.followUser);
        this.router.put('/:id/unfollow', auth_middleware_1.isAuthenticated, auth_middleware_1.notOwner, this.userController.unfollowUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = UserRouter;
