"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowUser = exports.followUser = exports.getUserFollowing = exports.getUserFollowers = exports.getUserById = exports.getAllUsers = exports.getUsers = exports.updateUserById = exports.deleteUserById = exports.register = exports.login = void 0;
const logger_1 = __importDefault(require("../utility/logger"));
const auth_service_1 = require("./auth-service");
const user_service_1 = require("./user-service");
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
async function deleteUserById(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING DELETE USER...');
        await (0, auth_service_1.DELETE_USER_BY_ID)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED DELETE USER');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.deleteUserById = deleteUserById;
async function updateUserById(call, callback) {
    try {
        await logger_1.default['log']('debug', '⌛ CALLING UPDATE USER...');
        await (0, auth_service_1.UPDATE_USER_BY_ID)(call, callback);
        await logger_1.default['log']('info', '☕ FINISHED UPDATE USER');
    }
    catch (error) {
        await logger_1.default['log']('error', error);
        callback(error);
    }
}
exports.updateUserById = updateUserById;
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