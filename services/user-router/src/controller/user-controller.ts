import { Request, Response } from 'express';
// import { iRequestWithUser } from '../middlewares/auth-middleware';
import * as USER_CLIENT from '../client/user';

/**
 *
 * @param request
 * @param response
 */
async function getUsers(request: Request, response: Response): Promise<void> {
	try {
		// let { page = 1 , limit = 5, filter } = request.query;


		const users = await USER_CLIENT.getUsers(1, 5, );

		response.json(users).status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function getAllUsers(request: Request, response: Response): Promise<void> {
	try {
		// const { page, limit } = request.query;
		const users = await USER_CLIENT.getAllUsers(1, 5);
		response.json(users).status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
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


/**
 *
 * @param request
 * @param response
 */
async function getUserFollowers(request: Request, response: Response): Promise<void> {
	try {
		const { id } = request.params;
		// const { page, limit } = request.query;
		const followers = await USER_CLIENT.getUserFollowers(id, 1, 5);
		response.json(followers).status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function getUserFollowing(request: Request, response: Response): Promise<void> {
	try {
		const { id } = request.params;
		// const { page, limit } = request.query;
		const following = await USER_CLIENT.getUserFollowing(id, 1, 5);
		response.json(following).status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}
/**
 *
 * @param request
 * @param response
 */
async function followUser(request: Request, response: Response): Promise<void> {
	try {
		const { id } = request.params;
		// const currentUser = request.userData;
		const currentUser = {
			_id: 'a'
		};
		currentUser._id = '64883331211d88a6a796cc85';
		await USER_CLIENT.followUser(currentUser._id, id);
		response.status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function unfollowUser(request: Request, response: Response): Promise<void> {
	try {
		const { id } = request.params;
		// const currentUser = request.userData;
		const currentUser = {
			_id: 'a'
		};
		currentUser._id = '64883331211d88a6a796cc85';

		await USER_CLIENT.unfollowUser(currentUser._id, id);
		response.status(200).end();
	} catch (error: Error | any) {
		console.error(error);
		response.json({ message: error.message }).status(500).end();
	}
}
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

export {
	getUsers,
	getAllUsers,
	getUserById,
	// getUserPosts,
	// getUserComments,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser,
};
