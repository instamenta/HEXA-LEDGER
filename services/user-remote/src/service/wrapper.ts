import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import {log} from '../utility/logger';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {
	GetUserByIdRequest,
	UserModel as IUserModel,
	LoginForm as ILoginForm,
	RegisterForm as IRegisterForm,
	GetAllUsersRequest, GetUsersRequest,
	FollowUserRequest, UnfollowUserRequest,
	GetUserFollowersRequest, GetUserFollowingRequest,
} from '../protos/generated/types/users_pb';
import {LOGIN, REGISTER} from './auth-service';
import {
	GET_USER_BY_ID,
	GET_USERS, GET_ALL_USERS,
	FOLLOW_USER, UNFOLLOW_USER,
	GET_USER_FOLLOWERS, GET_USER_FOLLOWING,
} from './user-service';

export {
	getUserById,
	login, register,
	getUsers, getAllUsers,
	followUser, unfollowUser,
	getUserFollowers, getUserFollowing,
};

/**
 * Handles the login request
 * ( takes email $ password )
 * @param call - The gRPC call object for the login request.
 * @param callback - The callback function to send the login response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function login(
	call: ServerUnaryCall<ILoginForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	try {
		await log('debug', 'CALLING LOGIN...');
		await LOGIN(call, callback);
		await log('info', '☕ FINISHED LOGIN');
	} catch (error: Error | any) {
		await log('error', error);
		callback(error);
	}
}

/**
 * Handles the registration request
 * ( takes username , password & e-mail
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function register(
	call: ServerUnaryCall<IRegisterForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	try {
		await log('debug', '⌛ CALLING REGISTER...');
		await REGISTER(call, callback);
		await log('info', '☕ FINISHED REGISTER');
	} catch (error: Error | any) {
		await log('error', error);
		callback(error);
	}
}

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
		await log('debug', '⌛ CALLING GET_USERS...');
		await GET_USERS(call);
		await log('info', '☕ FINISHED GET_USERS');
		call.end();
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING GET_ALL_USERS...');
		await GET_ALL_USERS(call);
		await log('info', '☕ FINISHED GET_ALL_USERS');
		call.end();
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING GET_USER_BY_ID...');
		await GET_USER_BY_ID(call, callback);
		await log('info', '☕ FINISHED GET_USER_BY_ID');
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING GET_USER_FOLLOWERS...');
		await GET_USER_FOLLOWERS(call);
		await log('info', '☕ FINISHED GET_USER_FOLLOWERS');
		call.end();
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING GET_USER_FOLLOWING...');
		await GET_USER_FOLLOWING(call);
		await log('info', '☕ FINISHED GET_USER_FOLLOWING');
		call.end();
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING FOLLOW_USER...');
		await FOLLOW_USER(call, callback);
		await log('info', '☕ FINISHED FOLLOW_USER');
	} catch (error: Error | any) {
		await log('error', error);
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
		await log('debug', '⌛ CALLING UNFOLLOW_USER...');
		await UNFOLLOW_USER(call, callback);
		await log('info', '☕ FINISHED UNFOLLOW_USER');
	} catch (error: Error | any) {
		await log('error', error);
		callback(error);
	}
}