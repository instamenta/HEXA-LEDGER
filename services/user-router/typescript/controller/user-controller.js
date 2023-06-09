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
const USER_CLIENT = __importStar(require("../client/user-client"));
/**
 * @param request
 * @param response
 */
async function getUsers(request, response) {
    try {
        const r = request.query, page = Number.parseInt(r.page) || 1, limit = Number.parseInt(r.limit) || 10, filter = r.filter || '', userList = await USER_CLIENT.getUsers(page, limit, filter);
        response.json(userList).status(200).end();
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
        const r = request.query, page = Number.parseInt(r.page) || 1, limit = Number.parseInt(r.limit) || 10, userList = await USER_CLIENT.getAllUsers(page, limit);
        response.json(userList).status(200).end();
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
        const r = request, { id } = r.params, page = Number.parseInt(r.query.page) || 1, limit = Number.parseInt(r.query.limit) || 10, followers = await USER_CLIENT.getUserFollowers(id, page, limit);
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
        const r = request, { id } = r.params, page = Number.parseInt(r.query.page) || 1, limit = Number.parseInt(r.query.limit) || 10, following = await USER_CLIENT.getUserFollowing(id, page, limit);
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
        const { id } = request.params, currentUser = request.userData;
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
        const { id } = request.params, currentUser = request.userData;
        await USER_CLIENT.unfollowUser(currentUser._id, id);
        response.status(200).end();
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
exports.unfollowUser = unfollowUser;
// /**
//  *
//  * @param request
//  * @param response
//  */
// async function getUserPosts(request: Request, response: Response): Promise<void> {
// 	try {
// 		const { id } = request.params;
// 		const posts = await USER_CLIENT.getUserPosts(id);
// 		response.json(posts).status(200).end();
// 	} catch (error: Error | any) {
// 		console.error(error);
// 		response.json({ message: error.message }).status(500).end();
// 	}
// }
//
// /**
//  *
//  * @param request
//  * @param response
//  */
// async function getUserComments(request: Request, response: Response): Promise<void> {
// 	try {
// 		const { id } = request.params;
// 		const comments = await USER_CLIENT.getUserComments(id);
// 		response.json(comments).status(200).end();
// 	} catch (error: Error | any) {
// 		console.error(error);
// 		response.json({ message: error.message }).status(500).end();
// 	}
// }
