/** @file The controller that handles routes request for user. */
import {Request, Response} from 'express';
import {iRequestWithUser} from '../middleware/auth-middleware';
import * as USER_CLIENT from '../client/user-client';

/**
 * @param request
 * @param response
 */
export async function getUsers(request: Request, response: Response): Promise<void> {
    try {
        const r = request.query
            , page: number = Number.parseInt(<string>r.page) || 1
            , limit: number = Number.parseInt(<string>r.limit) || 10
            , filter: string = <string>r.filter || ''
            , userList = await USER_CLIENT.getUsers(page, limit, filter);
        response.json(userList).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}

/**
 * @param request
 * @param response
 */
export async function getAllUsers(request: Request, response: Response): Promise<void> {
    try {
        const r = request.query
            , page: number = Number.parseInt(<string>r.page) || 1
            , limit: number = Number.parseInt(<string>r.limit) || 10
            , userList = await USER_CLIENT.getAllUsers(page, limit);
        response.json(userList).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}

/**
 * @param request
 * @param response
 */
export async function getUserById(request: Request, response: Response): Promise<void> {
    try {
        const {id} = request.params;
        const user = await USER_CLIENT.getUserById(id);
        response.json(user).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}


/**
 * @param request
 * @param response
 */
export async function getUserFollowers(request: Request, response: Response): Promise<void> {
    try {
        const {id} = request.params
            , page: number = Number.parseInt(request.query.page as string) || 1
            , limit: number = Number.parseInt(request.query.limit as string) || 10
            , followers = await USER_CLIENT.getUserFollowers(id, page, limit);
        response.json(followers).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}

/**
 * @param request
 * @param response
 */
export async function getUserFollowing(request: Request, response: Response): Promise<void> {
    try {
        const {id} = request.params
            , page: number = Number.parseInt(request.query.page as string) || 1
            , limit: number = Number.parseInt(request.query.limit as string) || 10
            , following = await USER_CLIENT.getUserFollowing(id, page, limit);
        response.json(following).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}

/**
 * @param request
 * @param response
 */
export async function followUser(request: iRequestWithUser, response: Response): Promise<void> {
    try {
        const {id} = request.params
            , currentUser = request.userData
        ;
        await USER_CLIENT.followUser(currentUser._id, id);
        response.status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}

/**
 * @param request
 * @param response
 */
export async function unfollowUser(request: iRequestWithUser, response: Response): Promise<void> {
    try {
        const {id} = request.params
            , currentUser = request.userData
        ;
        await USER_CLIENT.unfollowUser(currentUser._id, id);
        response.status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({message: error.message}).status(500).end();
    }
}


// /**
//  *
//  * @param request
//  * @param response
//  */
// Async function getUserComments(request: Request, response: Response): Promise<void> {
// 	Try {
// 		Const { id } = request.params;
// 		Const comments = await USER_CLIENT.getUserComments(id);
// 		Response.json(comments).status(200).end();
// 	} catch (error: Error | any) {
// 		Console.error(error);
// 		Response.json({ message: error.message }).status(500).end();
// 	}
// }

