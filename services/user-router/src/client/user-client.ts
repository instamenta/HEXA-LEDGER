/** @file Grpc client used for calling to the client's endpoints. */
import * as GRPC from '@grpc/grpc-js';
import GRPC_CLIENT from './grpc-client';
import {UserModel} from '../protos/generated/types/users_pb';
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
export function getUsers(page = 1, limit = 5, filter?: string): Promise<UserGrpcModel[]> {
    return new Promise((resolve, reject) => {
        const m = new GetUsersRequest();
        m.setLimit(new Int32Value().setValue(limit));
        m.setPage(new Int32Value().setValue(page));
        if (filter)
            m.setFilter(new StringValue().setValue(filter));

        const users: UserGrpcModel[] = [];
        const $stream = GRPC_CLIENT.getUsers(m);
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
 * @param page
 * @param limit
 * @returns
 */
export function getAllUsers(page = 1, limit = 5): Promise<UserGrpcModel[]> {
    return new Promise((resolve, reject) => {
        const m = new GetAllUsersRequest();
        m.setLimit(new Int32Value().setValue(limit));
        m.setPage(new Int32Value().setValue(page));

        const users: UserGrpcModel[] = [];
        const $stream = GRPC_CLIENT.getAllUsers(m);
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
export function getUserById(id: string): Promise<UserGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new GetUserByIdRequest();
        m.setId(new StringValue().setValue(id));

        GRPC_CLIENT.getUserById(m, (err: GRPC.ServiceError, response: UserModel) => {
            err ? reject(err.message)
                : resolve(UserGrpcModel.fromUserGRPCMessage(response));
        });
    });
}

/**
 * @param id
 * @param page
 * @param limit
 * @returns
 */
export function getUserFollowers(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
    return new Promise((resolve, reject) => {
        const m = new GetUserFollowersRequest();
        m.setId(new StringValue().setValue(id));
        m.setPage(new Int32Value().setValue(page));
        m.setLimit(new Int32Value().setValue(limit));

        const followers: UserGrpcModel[] = [];
        const $stream = GRPC_CLIENT.getUserFollowers(m);
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
export function getUserFollowing(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
    return new Promise((resolve, reject) => {
        const m = new GetUserFollowingRequest();
        m.setId(new StringValue().setValue(id));
        m.setPage(new Int32Value().setValue(page));
        m.setLimit(new Int32Value().setValue(limit));

        const following: UserGrpcModel[] = [];
        const $stream = GRPC_CLIENT.getUserFollowing(m);
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
export function followUser(currentUserId: string, id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const m = new FollowUserRequest();
        m.setId(new StringValue().setValue(id));
        m.setCurrentUserId(new StringValue().setValue(currentUserId));

        GRPC_CLIENT.followUser(m, (err: GRPC.ServiceError) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}

/**
 * @param currentUserId
 * @param id
 * @returns
 */
export function unfollowUser(currentUserId: string, id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const m = new UnfollowUserRequest();
        m.setId(new StringValue().setValue(id));
        m.setCurrentUserId(new StringValue().setValue(currentUserId));

        GRPC_CLIENT.unfollowUser(m, (err: GRPC.ServiceError) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}

// Function getUserPosts(id: string): Promise<PostClass[]> {
//     Return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         Const m = new GetUserPostsRequest();
//         M.setId(new StringValue().setValue(id));
//
//         Const posts: PostClass[] = [];
//
//         Const $stream = GRPC_CLIENT.getUserPosts(m);
//
//         // Handle the $stream events
//         $stream.on("data", (response: PostModel) => {
//             Const post = PostClass.fromPostGRPCMessage(response);
//             Posts.push(post);
//         });
//
//         $stream.on("error", (err: GRPC.ServiceError) => {
//             Reject(err.message);
//         });
//
//         $stream.on("end", () => {
//             Resolve(posts);
//         });
//     });
// }
//
// Function getUserComments(id: string): Promise<CommentClass[]> {
//     Return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         Const m = new GetUserCommentsRequest();
//         M.setId(new StringValue().setValue(id));
//
//         Const comments: CommentClass[] = [];
//
//         Const $stream = GRPC_CLIENT.getUserComments(m);
//
//         // Handle the $stream events
//         $stream.on("data", (response: CommentModel) => {
//             Const comment = CommentClass.fromCommentGRPCMessage(response);
//             Comments.push(comment);
//         });
//
//         $stream.on("error", (err: GRPC.ServiceError) => {
//             Reject(err.message);
//         });
//
//         $stream.on("end", () => {
//             Resolve(comments);
//         });
//     });
// }
