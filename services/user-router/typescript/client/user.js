"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowUser = exports.followUser = exports.getUserFollowing = exports.getUserFollowers = exports.getUserById = exports.getAllUsers = exports.getUsers = void 0;
const grpc_client_1 = __importDefault(require("../grpc-client"));
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const userClass_1 = __importDefault(require("../models/userClass"));
const { GetUsersRequest, GetAllUsersRequest, GetUserByIdRequest, GetUserFollowersRequest, GetUserFollowingRequest, FollowUserRequest, UnfollowUserRequest } = require('../generated/users_pb');
/**
 * @param page
 * @param limit
 * @param filter
 * @returns
 */
function getUsers(page = 1, limit = 5, filter) {
    return new Promise((resolve, reject) => {
        const m = new GetUsersRequest();
        m.setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        m.setPage(new wrappers_pb_1.Int32Value().setValue(page));
        if (filter)
            m.setFilter(new wrappers_pb_1.StringValue().setValue(filter));
        const users = [];
        const $stream = grpc_client_1.default.getUsers(m);
        $stream.on('data', (response) => {
            users.push(userClass_1.default.fromUserGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(users);
        });
    });
}
exports.getUsers = getUsers;
/**
 *
 * @param page
 * @param limit
 * @returns
 */
function getAllUsers(page = 1, limit = 5) {
    return new Promise((resolve, reject) => {
        const m = new GetAllUsersRequest();
        m.setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        m.setPage(new wrappers_pb_1.Int32Value().setValue(page));
        const users = [];
        const $stream = grpc_client_1.default.getAllUsers(m);
        $stream.on('data', (response) => {
            users.push(userClass_1.default.fromUserGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(users);
        });
    });
}
exports.getAllUsers = getAllUsers;
/**
 * @param id
 * @returns
 */
function getUserById(id) {
    return new Promise((resolve, reject) => {
        const m = new GetUserByIdRequest();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        grpc_client_1.default.getUserById(m, (err, response) => {
            err ? reject(err.message)
                : resolve(userClass_1.default.fromUserGRPCMessage(response));
        });
    });
}
exports.getUserById = getUserById;
/**
 *
 * @param id
 * @param page
 * @param limit
 * @returns
 */
function getUserFollowers(id, page = 1, limit = 5) {
    return new Promise((resolve, reject) => {
        const m = new GetUserFollowersRequest();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setPage(new wrappers_pb_1.Int32Value().setValue(page));
        m.setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        const followers = [];
        const $stream = grpc_client_1.default.getUserFollowers(m);
        $stream.on('data', (response) => {
            followers.push(userClass_1.default.fromUserGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(followers);
        });
    });
}
exports.getUserFollowers = getUserFollowers;
/**
 * @param id
 * @param page
 * @param limit
 * @returns
 */
function getUserFollowing(id, page = 1, limit = 5) {
    return new Promise((resolve, reject) => {
        const m = new GetUserFollowingRequest();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setPage(new wrappers_pb_1.Int32Value().setValue(page));
        m.setLimit(new wrappers_pb_1.Int32Value().setValue(limit));
        const following = [];
        const $stream = grpc_client_1.default.getUserFollowing(m);
        $stream.on('data', (response) => {
            following.push(userClass_1.default.fromUserGRPCMessage(response));
        });
        $stream.on('error', (err) => {
            reject(err.message);
        });
        $stream.on('end', () => {
            resolve(following);
        });
    });
}
exports.getUserFollowing = getUserFollowing;
/**
 * @param currentUserId
 * @param id
 * @returns
 */
function followUser(currentUserId, id) {
    return new Promise((resolve, reject) => {
        const m = new FollowUserRequest();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setCurrentUserId(new wrappers_pb_1.StringValue().setValue(currentUserId));
        grpc_client_1.default.followUser(m, (err) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}
exports.followUser = followUser;
/**
 *
 * @param currentUserId
 * @param id
 * @returns
 */
function unfollowUser(currentUserId, id) {
    return new Promise((resolve, reject) => {
        const m = new UnfollowUserRequest();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setCurrentUserId(new wrappers_pb_1.StringValue().setValue(currentUserId));
        grpc_client_1.default.unfollowUser(m, (err) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}
exports.unfollowUser = unfollowUser;
