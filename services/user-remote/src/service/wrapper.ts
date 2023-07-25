/** @file Used to wrap service in try catch to avoid unwanted nesting in Services. */

import {ServerUnaryCall, ServerWritableStream, sendUnaryData} from '@grpc/grpc-js';
import Log from '../utility/logger';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {IError} from '../utility/types/base-types';
import {
    FollowUserRequest,
    GetAllUsersRequest,
    GetUserByIdRequest,
    GetUserFollowersRequest,
    GetUserFollowingRequest, GetUsersRequest,
    LoginForm as ILoginForm, RegisterForm as IRegisterForm,
    UserModel as IUserModel, UnfollowUserRequest, UpdateForm, idRequest,
} from '../protos/generated/types/users_pb';

import {
    DELETE_USER_BY_ID,
    LOGIN,
    REGISTER,
    UPDATE_USER_BY_ID,
} from './auth-service';

import {
    FOLLOW_USER,
    GET_ALL_USERS, GET_USERS,
    GET_USER_BY_ID, GET_USER_FOLLOWERS,
    GET_USER_FOLLOWING, UNFOLLOW_USER,
} from './user-service';

/**
 * Handles the login request
 * ( takes email $ password ).
 * @param call - The gRPC call object for the login request.
 * @param callback - The callback function to send the login response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function login(
    call: ServerUnaryCall<ILoginForm, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', 'CALLING LOGIN...');
        await LOGIN(call, callback);
        await Log['log']('info', '☕ FINISHED LOGIN');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}

/**
 * Handles the registration request
 * ( takes username , password & e-mail.
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function register(
    call: ServerUnaryCall<IRegisterForm, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING REGISTER...');
        await REGISTER(call, callback);
        await Log['log']('info', '☕ FINISHED REGISTER');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}

/**
 * Handles the registration request
 * ( takes username , password & e-mail.
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function deleteUserById(
    call: ServerUnaryCall<idRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING DELETE USER...');
        await DELETE_USER_BY_ID(call, callback);
        await Log['log']('info', '☕ FINISHED DELETE USER');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}

/**
 * Handles the registration request
 * ( takes username , password & e-mail.
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function updateUserById(
    call: ServerUnaryCall<UpdateForm, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING UPDATE USER...');
        await UPDATE_USER_BY_ID(call, callback);
        await Log['log']('info', '☕ FINISHED UPDATE USER');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}

/**
 * Retrieves a list of users based on the specified criteria.
 * ( optionally page & limit ).
 * @param call - The call object for the gRPC writable stream.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function getUsers(
    call: ServerWritableStream<GetUsersRequest, IUserModel>,
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING GET_USERS...');
        await GET_USERS(call);
        await Log['log']('info', '☕ FINISHED GET_USERS');
        call.end();
    } catch (error: IError) {
        await Log['log']('error', error);
        call.emit(error);
    }
}

/**
 * Retrieves all users.
 * ( takes optionally page & limit ).
 * @param call - The call object for the gRPC writable stream.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function getAllUsers(
    call: ServerWritableStream<GetAllUsersRequest, IUserModel>,
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING GET_ALL_USERS...');
        await GET_ALL_USERS(call);
        await Log['log']('info', '☕ FINISHED GET_ALL_USERS');
        call.end();
    } catch (error: IError) {
        await Log['log']('error', error);
        call.emit(error);
    }
}

/**
 * Retrieves a user by their ID.
 * ( takes user _id ).
 * @param call - The call object for the gRPC writable stream.
 * @param callback - The callback function to send the response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function getUserById(
    call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING GET_USER_BY_ID...');
        await GET_USER_BY_ID(call, callback);
        await Log['log']('info', '☕ FINISHED GET_USER_BY_ID');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}


/**
 * Retrieves the followers of a user.
 * ( takes _id, and optionally page & limit ).
 * @param call - The call object for the gRPC writable stream.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function getUserFollowers(
    call: ServerWritableStream<GetUserFollowersRequest, IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING GET_USER_FOLLOWERS...');
        await GET_USER_FOLLOWERS(call);
        await Log['log']('info', '☕ FINISHED GET_USER_FOLLOWERS');
        call.end();
    } catch (error: IError) {
        await Log['log']('error', error);
        call.emit(error);
    }
}

/**
 * Retrieves the users that a user is following
 * ( takes _id, and optionally page & limit ).
 * @param call - The call object for the gRPC writable stream.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function getUserFollowing(
    call: ServerWritableStream<GetUserFollowingRequest, IUserModel>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING GET_USER_FOLLOWING...');
        await GET_USER_FOLLOWING(call);
        await Log['log']('info', '☕ FINISHED GET_USER_FOLLOWING');
        call.end();
    } catch (error: IError) {
        await Log['log']('error', error);
        call.emit(error);
    }
}

/**
 * Follows a user ( takes 2 user _id's current and target ).
 * @param call - The call object for the gRPC writable stream.
 * @param callback - The callback function to send the response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function followUser(
    call: ServerUnaryCall<FollowUserRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING FOLLOW_USER...');
        await FOLLOW_USER(call, callback);
        await Log['log']('info', '☕ FINISHED FOLLOW_USER');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}

/**
 * Unfollows a user ( takes 2 user _id's current and target ).
 * @param call - The call object for the gRPC writable stream.
 * @param callback - The callback function to send the response.
 * @async
 * @throws - Emits an error if the input is invalid.
 */
export async function unfollowUser(
    call: ServerUnaryCall<UnfollowUserRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    try {
        await Log['log']('debug', '⌛ CALLING UNFOLLOW_USER...');
        await UNFOLLOW_USER(call, callback);
        await Log['log']('info', '☕ FINISHED UNFOLLOW_USER');
    } catch (error: IError) {
        await Log['log']('error', error);
        callback(error);
    }
}