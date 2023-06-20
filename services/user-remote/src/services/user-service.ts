import {ServerUnaryCall, sendUnaryData, ServerWritableStream} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import MongooseUserModel, {IUser} from '../models/user-schema';
import {Types} from 'mongoose';
import {ObjectId} from 'bson';
import {
	UserModel as IUserModel,
	GetAllUsersRequest,
	GetUsersRequest,
	GetUserByIdRequest,
	FollowUserRequest,
	UnfollowUserRequest,
	GetUserFollowersRequest,
	GetUserFollowingRequest,
} from '../generated/types/users_pb';
import {convertUserModel} from '../utilities/grpc-tools';

/**
 * Retrieves a list of users based on the specified criteria.
 * ( optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUsers(
	call: ServerWritableStream<GetUsersRequest, IUserModel>,
): Promise<void> {
	try {
		const r = call.request
			, limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
			, page = r.hasPage() ? r.getPage()!.getValue() : 1
			, pipeline = [];
		if (r.hasFilter()) {
			const filter = r.getFilter()!.getValue();
			pipeline.push({
				$match: {
					fieldToFilter: {$regex: filter},
				},
			});
		}
		pipeline.push({$skip: (page - 1) * limit}, {$limit: limit});

		const UserArray: IUser[] = await MongooseUserModel.aggregate(pipeline).exec();
		UserArray.forEach((u) => {
			const m = convertUserModel(u);
			// const u = new UserModel();
			// u.setId(new StringValue().setValue(user.id));
			// u.setUsername(new StringValue().setValue(user.username));
			// u.setEmail(new StringValue().setValue(user.email));
			call.write(m);
		});

		call.end();
	} catch (error: Error | any) {
		call.emit(error);
	}
}

/**
 * Retrieves all users.
 * ( takes optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getAllUsers(
	call: ServerWritableStream<GetAllUsersRequest, IUserModel>,
): Promise<void> {
	try {
		const r = call.request;

		const limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
			, page = r.hasPage() ? r.getPage()!.getValue() : 1;

		const UserArray: IUser[] = await MongooseUserModel
			.find()
			.skip((page - 1) * limit)
			.limit(limit);

		UserArray.forEach((u) => {
			const m = convertUserModel(u);
			// m.setId(new StringValue().setValue(User.id));
			// m.setUsername(new StringValue().setValue(User.username));
			// m.setEmail(new StringValue().setValue(User.email));

			call.write(m);
		});

		call.end();
	} catch (error: Error | any) {
		call.emit(error);
	}
}

/**
 * Retrieves a user by their ID.
 * ( takes user _id )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserById(
	call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	try {
		const r = call.request;
		const id = r.hasId() ? r.getId()!.getValue() : null;

		if (!id || !Types.ObjectId.isValid(id)) {
			throw new Error('Invalid User id');
		}
		const u: IUser | null = await MongooseUserModel.findById(id);
		if (!u) {
			throw new Error('User not found');
		}

		callback(null, convertUserModel(u));
	} catch (error: Error | any) {
		callback(error);
	}
}


/**
 * Retrieves the followers of a user.
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowers(
	call: ServerWritableStream<GetUserFollowersRequest, IUserModel>
): Promise<void> {
	try {
		const r = call.request;

		const id = r.hasId() ? r.getId()!.getValue() : null;
		const page = r.hasPage() ? r.getPage()!.getValue() : 1;
		const limit = r.getLimit() ? r.getLimit()!.getValue() : 5;

		if (!id || !Types.ObjectId.isValid(id)
            || page > 0 || Number.isNaN(page)
            || limit > 0 || Number.isNaN(limit)
		) {
			throw new Error('Invalid User id');
		}
		const u: IUser | null = await MongooseUserModel.findById(id);
		if (!u) {
			throw new Error('User not found');
		}

		const UserArray = await MongooseUserModel.aggregate([
			{$match: {_id: id}},
			{$lookup: {from: 'users', localField: 'followers', foreignField: '_id', as: 'followers'}},
			{$unwind: 'followers'},
			{$skip: (page - 1) * limit},
			{$limit: limit},
		]).exec();

		UserArray.forEach((u) => {
			console.log(u);
			const m = convertUserModel(u);
			// const m = new UserModel();
			// m.setId(new StringValue().setValue(user.id));
			// m.setUsername(new StringValue().setValue(user.username));
			// m.setEmail(new StringValue().setValue(user.email));

			call.write(m);
		});

		call.end();

	} catch (error: Error | any) {
		call.emit(error);
	}
}

/**
 * Retrieves the users that a user is following
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowing(
	call: ServerWritableStream<GetUserFollowingRequest, IUserModel>
): Promise<void> {
	try {
		const r = call.request;

		const id = r.hasId() ? r.getId()!.getValue() : null;
		const page = r.hasPage() ? r.getPage()!.getValue() : 1;
		const limit = r.getLimit() ? r.getLimit()!.getValue() : 5;

		if (!id || !Types.ObjectId.isValid(id)
            || page > 0 || Number.isNaN(page)
            || limit > 0 || Number.isNaN(limit)
		) {
			throw new Error('Invalid User id');
		}
		const u: IUser | null = await MongooseUserModel.findById(id);
		if (!u) {
			throw new Error('User not found');
		}

		const UserArray = await MongooseUserModel.aggregate([
			{$match: {_id: id}},
			{$lookup: {from: 'users', localField: 'following', foreignField: '_id', as: 'following'}},
			{$unwind: '$following'},
			{$skip: (page - 1) * limit},
			{$limit: limit},
		]).exec();

		UserArray.forEach((u) => {
			console.log(u);
			const m = convertUserModel(u);
			// const m = new UserModel();
			// m.setId(new StringValue().setValue(user.id));
			// m.setUsername(new StringValue().setValue(user.username));
			// m.setEmail(new StringValue().setValue(user.email));

			call.write(m);
		});

		call.end();
	} catch (error: Error | any) {
		call.emit(error);
	}
}

/**
 * Follows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function followUser(
	call: ServerUnaryCall<FollowUserRequest, Empty>,
	callback: sendUnaryData<Empty>
): Promise<void> {
	try {
		const r = call.request;
		const currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null;
		const userId = r.hasId() ? r.getId()!.getValue() : null;

		if (!currentUserId || !Types.ObjectId.isValid(currentUserId)
            || !userId || !Types.ObjectId.isValid(userId)) {
			throw new Error('Invalid User id');
		}
		const currentUserBId = new ObjectId(currentUserId);
		const userBId = new ObjectId(userId);

		await MongooseUserModel.collection.bulkWrite([
			{
				updateOne: {
					filter: {_id: currentUserBId},
					update: {$addToSet: {following: userBId}},
				},
			},
			{
				updateOne: {
					filter: {_id: userBId},
					update: {$addToSet: {followers: currentUserBId}},
				},
			},
		] as any)
			.then((result) => {
				if (result && result.ok) {
					console.log('Bulk write operation successful');
					callback(null, new Empty());
				} else {
					throw new Error('Failed to update users');
				}
			});
	} catch (error: Error | any) {
		callback(error);
	}
}

/**
 * Unfollows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function unfollowUser(
	call: ServerUnaryCall<UnfollowUserRequest, Empty>,
	callback: sendUnaryData<Empty>
): Promise<void> {
	try {
		const r = call.request;
		const currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null;
		const userId = r.hasId() ? r.getId()!.getValue() : null;


		if (!currentUserId || !Types.ObjectId.isValid(currentUserId)
            || !userId || !Types.ObjectId.isValid(userId)) {
			throw new Error('Invalid User id');
		}
		const currentUserBId = new ObjectId(currentUserId);
		const userBId = new ObjectId(userId);

		await MongooseUserModel.bulkWrite([
			{
				updateOne: {
					filter: {_id: currentUserBId},
					update: {$pull: {following: userBId}},
				},
			},
			{
				updateOne: {
					filter: {_id: userBId},
					update: {$pull: {followers: currentUserBId}},
				},
			},
		] as any)
			.then((result) => {
				if (result && result.ok) {
					console.log('Bulk write operation successful');
					callback(null, new Empty());
				} else {
					throw new Error('Failed to update users');
				}
			});
	} catch (error: Error | any) {
		callback(error);
	}
}

export {
	getUsers,
	getAllUsers,
	getUserById,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser,
};


// /**
//  * @param call
//  * @param callback
//  * @returns
//  */
// async function getUserPosts(call: ServerDuplexStream<GetUserPostsRequest, PostModel>) {
//     try {
//         const requestStream = call;
//         const responseStream = call;
//
//         requestStream.on('data', async (request: GetUserPostsRequest) => {
//             const userId = request.getId()?.getValue();
//
//             // Implement the logic to retrieve user posts from the database
//             // and send them through the gRPC stream
//             // For example:
//             const posts: PostModel[] = []; // Retrieve user posts from the database
//
//             posts.forEach((post) => {
//                 responseStream.write(post);
//             });
//         });
//
//         requestStream.on('end', () => {
//             responseStream.end();
//         });
//     } catch (error: Error | any) {
//         call.emit('error', error);
//     }
// }
//
// /**
//  * @param call
//  * @param callback
//  * @returns
//  */
// async function getUserComments(call: ServerDuplexStream<GetUserCommentsRequest, CommentModel>) {
//     try {
//         const requestStream = call;
//         const responseStream = call;
//
//         requestStream.on('data', async (request: GetUserCommentsRequest) => {
//             const userId = request.getId()?.getValue();
//
//             // Implement the logic to retrieve user comments from the database
//             // and send them through the gRPC stream
//             // For example:
//             const comments: CommentModel[] = []; // Retrieve user comments from the database
//
//             comments.forEach((comment) => {
//                 responseStream.write(comment);
//             });
//         });
//
//         requestStream.on('end', () => {
//             responseStream.end();
//         });
//     } catch (error: Error | any) {
//         call.emit('error', error);
//     }
// }