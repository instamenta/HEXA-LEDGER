"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFollowing = exports.getUserFollowers = exports.unfollowUser = exports.followUser = exports.getAllUsers = exports.getUsers = exports.register = exports.login = exports.getUserById = void 0;
const logger_1 = __importDefault(require("../utility/logger"));
const auth_service_1 = require("./auth-service");
const user_service_1 = require("./user-service");
/**
 * Handles the login request
 * ( takes email $ password )
 * @param call - The gRPC call object for the login request.
 * @param callback - The callback function to send the login response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function login(call, callback) {
    try {
        await logger_1.default['log']('debug', 'CALLING LOGIN...');
        await (0, auth_service_1.LOGIN)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED LOGIN');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.login = login;
/**
 * Handles the registration request
 * ( takes username , password & e-mail
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function register(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING REGISTER...');
        await (0, auth_service_1.REGISTER)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED REGISTER');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.register = register;
/**
 * Retrieves a list of users based on the specified criteria.
 * ( optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUsers(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_USERS...');
        await (0, user_service_1.GET_USERS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_USERS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getUsers = getUsers;
/**
 * Retrieves all users.
 * ( takes optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getAllUsers(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_ALL_USERS...');
        await (0, user_service_1.GET_ALL_USERS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_ALL_USERS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getAllUsers = getAllUsers;
/**
 * Retrieves a user by their ID.
 * ( takes user _id )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserById(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_USER_BY_ID...');
        await (0, user_service_1.GET_USER_BY_ID)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED GET_USER_BY_ID');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.getUserById = getUserById;
/**
 * Retrieves the followers of a user.
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowers(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_USER_FOLLOWERS...');
        await (0, user_service_1.GET_USER_FOLLOWERS)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_USER_FOLLOWERS');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getUserFollowers = getUserFollowers;
/**
 * Retrieves the users that a user is following
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowing(call) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING GET_USER_FOLLOWING...');
        await (0, user_service_1.GET_USER_FOLLOWING)(call);
        await logger_1.default['log']('info', '☕ FINISHED GET_USER_FOLLOWING');
        call.end();
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        call.emit(error);
    }
}
exports.getUserFollowing = getUserFollowing;
/**
 * Follows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function followUser(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING FOLLOW_USER...');
        await (0, user_service_1.FOLLOW_USER)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED FOLLOW_USER');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.followUser = followUser;
/**
 * Unfollows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function unfollowUser(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UNFOLLOW_USER...');
        await (0, user_service_1.UNFOLLOW_USER)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UNFOLLOW_USER');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.unfollowUser = unfollowUser;
