import { Request, Response } from 'express';
import { iRequestWithUser } from '../middlewares/auth-middleware';
import * as USER_CLIENT from '../client/user';

async function getUsers(request: Request, response: Response): Promise<void> {
    try {
        const { page, limit, filter } = request.query;

        const users = await USER_CLIENT.getUsers(page, limit, filter);

        response.json(users).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getAllUsers(request: Request, response: Response): Promise<void> {
    try {
        const { page, limit } = request.query;
        const users = await USER_CLIENT.getAllUsers(page, limit);
        response.json(users).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getUserById(request: Request, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const user = await USER_CLIENT.getUserById(id);
        response.json(user).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getUserPosts(request: Request, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const posts = await USER_CLIENT.getUserPosts(id);
        response.json(posts).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getUserComments(request: Request, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const comments = await USER_CLIENT.getUserComments(id);
        response.json(comments).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getUserFollowers(request: Request, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const { page, limit } = request.query;
        const followers = await USER_CLIENT.getUserFollowers(id, page, limit);
        response.json(followers).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function getUserFollowing(request: Request, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const { page, limit } = request.query;
        const following = await USER_CLIENT.getUserFollowing(id, page, limit);
        response.json(following).status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}
async function followUser(request: iRequestWithUser, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const currentUser = request.userData;
        await USER_CLIENT.followUser(currentUser._id, id);
        response.status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

async function unfollowUser(request: iRequestWithUser, response: Response): Promise<void> {
    try {
        const { id } = request.params;
        const currentUser = request.userData;
        await USER_CLIENT.unfollowUser(currentUser._id, id);
        response.status(200).end();
    } catch (error: Error | any) {
        console.error(error);
        response.json({ message: error.message }).status(500).end();
    }
}

export {
    getUsers,
    getAllUsers,
    getUserById,
    getUserPosts,
    getUserComments,
    getUserFollowers,
    getUserFollowing,
    followUser,
    unfollowUser,
};
