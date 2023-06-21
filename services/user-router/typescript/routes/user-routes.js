"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth-middleware");
// import { isAuthenticated, notOwner, isOwner} from '../middlewares/auth-middleware';
const user_controller_1 = require("../controller/user-controller");
const USER_ROUTER = (0, express_1.Router)();
USER_ROUTER.route('/')
    .get(user_controller_1.getAllUsers);
USER_ROUTER.route('/find')
    .get(user_controller_1.getUsers);
USER_ROUTER.route('/:id')
    .get(user_controller_1.getUserById);
// .put(updateUserById)
// .delete(deleteUserById);
//
// USER_ROUTER.route('/:id/posts')
// 	.get(getUserPosts);
// // .post(createUserPost);
//
// USER_ROUTER.route('/:id/comments')
// 	.get(getUserComments);
USER_ROUTER.route('/:id/followers')
    .get(user_controller_1.getUserFollowers);
USER_ROUTER.route('/:id/following')
    .get(user_controller_1.getUserFollowing);
USER_ROUTER.route('/:id/follow')
    .put(auth_middleware_1.isAuthenticated, user_controller_1.followUser);
USER_ROUTER.route('/:id/unfollow')
    .put(auth_middleware_1.isAuthenticated, user_controller_1.unfollowUser);
exports.default = USER_ROUTER;
