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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const USER_CLIENT = __importStar(require("../client/user-client"));
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
/** @class UserController */
class UserController {
    /**
     *! Get a list of users.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     * ! fetch('/users?page=1&limit=10')
     */
    getUsers(request, response) {
        try {
            USER_CLIENT.getUsers(request.query?.page ? +request.query.page : undefined, request.query?.limit ? +request.query.limit : undefined, request.query?.filter).then((userList) => response.status(http_status_codes_1.default.OK)
                .json(userList)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Get a list of all users.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     * ! fetch('/users/all?page=1&limit=10')
     */
    getAllUsers(request, response) {
        try {
            USER_CLIENT.getAllUsers(request.query?.page ? +request.query.page : undefined, request.query?.limit ? +request.query.limit : undefined).then((userList) => response.status(http_status_codes_1.default.OK)
                .json(userList)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Get a user by their ID.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     * ! fetch('/users/:id')
     */
    getUserById(request, response) {
        try {
            USER_CLIENT.getUserById(request.params?.id).then((user) => response.status(http_status_codes_1.default.OK)
                .json(user)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Get followers of a user.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     * ! fetch('/users/:id/followers?page=1&limit=10')
     */
    getUserFollowers(request, response) {
        try {
            USER_CLIENT.getUserFollowers(request.params?.id, request.query?.page ? +request.query.page : undefined, request.query?.limit ? +request.query.limit : undefined).then((followers) => response.status(http_status_codes_1.default.OK)
                .json(followers)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Get users that a user is following.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     * ! fetch('/users/:id/following?page=1&limit=10')
     */
    getUserFollowing(request, response) {
        try {
            USER_CLIENT.getUserFollowing(request.params?.id, request.query?.page ? +request.query.page : undefined, request.query?.limit ? +request.query.limit : undefined).then((following) => response.status(http_status_codes_1.default.OK)
                .json(following)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Follow a user.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *!  fetch('/users/follow/:id', {
     *!   method: 'POST',
     *!   headers: {
     *!     Authorization: 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    followUser(request, response) {
        try {
            USER_CLIENT.followUser(request.userData._id, request.params?.id).then(() => response.status(http_status_codes_1.default.OK)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Unfollow a user.
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *! fetch('/users/unfollow/:id', {
     *!  method: 'POST',
     *!  headers: {
     *!    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
     *!  }
     *!})
     */
    unfollowUser(request, response) {
        try {
            USER_CLIENT.unfollowUser(request.userData._id, request.params?.id).then(() => response.status(http_status_codes_1.default.OK)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
}
exports.default = UserController;
// /**
//  *
//  * @param request
//  * @param response
//  */
// Async function getUserComments(request: Request, response: Response): void {
// 	Try {
// 		Const { id } = request.params;
// 		Const comments = await USER_CLIENT.getUserComments(id);
// 		Response.json(comments).status(StatusCode.OK).end();
// 	} catch (error: Error | any) {
// 		Console.error(error);
// 		Response.json({ message: error.message }).status(StatusCode.INTERNAL_SERVER_ERROR).end();
// 	}
// }
