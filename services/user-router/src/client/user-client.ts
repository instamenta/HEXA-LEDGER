import * as GRPC from '@grpc/grpc-js';
import CLIENT from './grpc-client';
import {UserModel,} from '../protos/generated/types/users_pb';
import {StringValue, Int32Value} from 'google-protobuf/google/protobuf/wrappers_pb';
import UserGrpcModel from '../model/user-grpc-model';

const {
	GetUsersRequest,
	GetAllUsersRequest,
	GetUserByIdRequest,
	GetUserFollowersRequest,
	GetUserFollowingRequest,
	FollowUserRequest,
	UnfollowUserRequest
} = require('../protos/generated/users_pb');


/**
 * @param page
 * @param limit
 * @param filter
 * @returns
 */
function getUsers(page = 1, limit = 5, filter?: string): Promise<UserGrpcModel[]> {
	return new Promise((resolve, reject) => {
		const m = new GetUsersRequest();
		m.setLimit(new Int32Value().setValue(limit));
		m.setPage(new Int32Value().setValue(page));
		if (filter)
			m.setFilter(new StringValue().setValue(filter));

		const users: UserGrpcModel[] = [];
		const $stream = CLIENT.getUsers(m);
		$stream.on('data', (response: UserModel) => {
			users.push(UserGrpcModel.fromUserGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(users);
		});
	});
}

/**
 *
 * @param page
 * @param limit
 * @returns
 */
function getAllUsers(page = 1, limit = 5): Promise<UserGrpcModel[]> {
	return new Promise((resolve, reject) => {
		const m = new GetAllUsersRequest();
		m.setLimit(new Int32Value().setValue(limit));
		m.setPage(new Int32Value().setValue(page));

		const users: UserGrpcModel[] = [];
		const $stream = CLIENT.getAllUsers(m);
		$stream.on('data', (response: UserModel) => {
			users.push(UserGrpcModel.fromUserGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(users);
		});
	});
}


/**
 * @param id
 * @returns
 */
function getUserById(id: string): Promise<UserGrpcModel> {
	return new Promise((resolve, reject) => {
		const m = new GetUserByIdRequest();
		m.setId(new StringValue().setValue(id));

		CLIENT.getUserById(m, (err: GRPC.ServiceError, response: UserModel) => {
			err ? reject(err.message)
				: resolve(UserGrpcModel.fromUserGRPCMessage(response));
		});
	});
}

/**
 *
 * @param id
 * @param page
 * @param limit
 * @returns
 */
function getUserFollowers(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
	return new Promise((resolve, reject) => {
		const m = new GetUserFollowersRequest();
		m.setId(new StringValue().setValue(id));
		m.setPage(new Int32Value().setValue(page));
		m.setLimit(new Int32Value().setValue(limit));

		const followers: UserGrpcModel[] = [];
		const $stream = CLIENT.getUserFollowers(m);
		$stream.on('data', (response: UserModel) => {
			followers.push(UserGrpcModel.fromUserGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(followers);
		});
	});
}

/**
 * @param id
 * @param page
 * @param limit
 * @returns
 */
function getUserFollowing(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
	return new Promise((resolve, reject) => {
		const m = new GetUserFollowingRequest();
		m.setId(new StringValue().setValue(id));
		m.setPage(new Int32Value().setValue(page));
		m.setLimit(new Int32Value().setValue(limit));

		const following: UserGrpcModel[] = [];
		const $stream = CLIENT.getUserFollowing(m);
		$stream.on('data', (response: UserModel) => {
			following.push(UserGrpcModel.fromUserGRPCMessage(response));
		});
		$stream.on('error', (err: GRPC.ServiceError) => {
			reject(err.message);
		});
		$stream.on('end', () => {
			resolve(following);
		});
	});
}

/**
 * @param currentUserId
 * @param id
 * @returns
 */
function followUser(currentUserId: string, id: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		const m = new FollowUserRequest();
		m.setId(new StringValue().setValue(id));
		m.setCurrentUserId(new StringValue().setValue(currentUserId));

		CLIENT.followUser(m, (err: GRPC.ServiceError) => {
			err ? reject(err.message)
				: resolve(true);
		});
	});
}

/**
 *
 * @param currentUserId
 * @param id
 * @returns
 */
function unfollowUser(currentUserId: string, id: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		const m = new UnfollowUserRequest();
		m.setId(new StringValue().setValue(id));
		m.setCurrentUserId(new StringValue().setValue(currentUserId));

		CLIENT.unfollowUser(m, (err: GRPC.ServiceError) => {
			err ? reject(err.message)
				: resolve(true);
		});
	});
}

// function getUserPosts(id: string): Promise<PostClass[]> {
//     return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         const m = new GetUserPostsRequest();
//         m.setId(new StringValue().setValue(id));
//
//         const posts: PostClass[] = [];
//
//         const $stream = CLIENT.getUserPosts(m);
//
//         // Handle the $stream events
//         $stream.on("data", (response: PostModel) => {
//             const post = PostClass.fromPostGRPCMessage(response);
//             posts.push(post);
//         });
//
//         $stream.on("error", (err: GRPC.ServiceError) => {
//             reject(err.message);
//         });
//
//         $stream.on("end", () => {
//             resolve(posts);
//         });
//     });
// }
//
// function getUserComments(id: string): Promise<CommentClass[]> {
//     return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         const m = new GetUserCommentsRequest();
//         m.setId(new StringValue().setValue(id));
//
//         const comments: CommentClass[] = [];
//
//         const $stream = CLIENT.getUserComments(m);
//
//         // Handle the $stream events
//         $stream.on("data", (response: CommentModel) => {
//             const comment = CommentClass.fromCommentGRPCMessage(response);
//             comments.push(comment);
//         });
//
//         $stream.on("error", (err: GRPC.ServiceError) => {
//             reject(err.message);
//         });
//
//         $stream.on("end", () => {
//             resolve(comments);
//         });
//     });
// }
export {
	getUsers,
	getAllUsers,
	getUserById,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser,
};