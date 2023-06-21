"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowUser = exports.followUser = exports.getUserFollowing = exports.getUserFollowers = exports.getUserById = exports.getAllUsers = exports.getUsers = void 0;
const USER_CLIENT = __importStar(require("../client/user"));
/**
 * @param request
 * @param response
 */
async function getUsers(request, response) {
    try {
        // let { page = 1 , limit = 5, filter } = request.query;
        const users = await USER_CLIENT.getUsers(1, 5);
        response.json(users).status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.getUsers = getUsers;
/**
 * @param request
 * @param response
 */
async function getAllUsers(request, response) {
    try {
        // const { page, limit } = request.query;
        const users = await USER_CLIENT.getAllUsers(1, 5);
        response.json(users).status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.getAllUsers = getAllUsers;
/**
 * @param request
 * @param response
 */
async function getUserById(request, response) {
    try {
        const { id } = request.params;
        const user = await USER_CLIENT.getUserById(id);
        response.json(user).status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.getUserById = getUserById;
/**
 * @param request
 * @param response
 */
async function getUserFollowers(request, response) {
    try {
        const { id } = request.params;
        // const { page, limit } = request.query;
        const followers = await USER_CLIENT.getUserFollowers(id, 1, 5);
        response.json(followers).status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.getUserFollowers = getUserFollowers;
/**
 * @param request
 * @param response
 */
async function getUserFollowing(request, response) {
    try {
        const { id } = request.params;
        // const { page, limit } = request.query;
        const following = await USER_CLIENT.getUserFollowing(id, 1, 5);
        response.json(following).status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.getUserFollowing = getUserFollowing;
/**
 * @param request
 * @param response
 */
async function followUser(request, response) {
    try {
        const { id } = request.params;
        const currentUser = request.userData;
        await USER_CLIENT.followUser(currentUser._id, id);
        response.status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.followUser = followUser;
/**
 * @param request
 * @param response
 */
async function unfollowUser(request, response) {
    try {
        const { id } = request.params;
        const currentUser = request.userData;
        await USER_CLIENT.unfollowUser(currentUser._id, id);
        response.status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.unfollowUser = unfollowUser;
