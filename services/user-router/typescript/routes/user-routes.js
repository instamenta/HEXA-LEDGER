"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth-middleware");
const user_validator_1 = require("../validator/user-validator");
const user_controller_1 = require("../controller/user-controller");
const USER_ROUTER = (0, express_1.Router)();
USER_ROUTER.route('/')
    .get(user_validator_1.pageLimit, user_controller_1.getAllUsers);
USER_ROUTER.route('/find')
    .get(user_validator_1.pageLimitFilter, user_controller_1.getUsers);
USER_ROUTER.route('/:id')
    .get(user_controller_1.getUserById);
// USER_ROUTER.route('/:id/comments')
// 	.get(getUserComments);
USER_ROUTER.route('/:id/followers')
    .get(user_validator_1.pageLimit, user_controller_1.getUserFollowers);
USER_ROUTER.route('/:id/following')
    .get(user_validator_1.pageLimit, user_controller_1.getUserFollowing);
USER_ROUTER.route('/:id/follow')
    .put(auth_middleware_1.isAuthenticated, auth_middleware_1.notOwner, user_controller_1.followUser);
USER_ROUTER.route('/:id/unfollow')
    .put(auth_middleware_1.isAuthenticated, auth_middleware_1.notOwner, user_controller_1.unfollowUser);
exports.default = USER_ROUTER;
