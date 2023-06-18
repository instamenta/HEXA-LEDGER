'use strict';

import {ServerUnaryCall, sendUnaryData, ServerWritableStream} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import MongooseUserModel, {IUser} from '../models/user-schema';
import {Types} from 'mongoose'
import {
    UserModel as IUserModel,
    GetAllUsersRequest,
    GetUsersRequest,
    GetUserByIdRequest,
    FollowUserRequest,
    UnfollowUserRequest,
    // GetUserFollowersRequest,
    // GetUserFollowingRequest,
} from '../generated/types/users_pb';

const {UserModel} = require('../generated/users_pb');

/**
 * @param call
 * @param callback
 * @returns
 */
async function getUsers(call: ServerWritableStream<GetUsersRequest, IUserModel>, callback: sendUnaryData<IUserModel>) {
    try {
        const r = call.request;
        const limit = r.hasLimit() ? r.getLimit()!.getValue() : 5;
        const page = r.hasPage() ? r.getPage()!.getValue() : 1;

        const pipeline = [];
        if (r.hasFilter()) {
            const filter = r.getFilter()!.getValue();
            pipeline.push({
                $match: {
                    fieldToFilter: {$regex: filter},
                },
            });
        }
        pipeline.push({$skip: (page - 1) * limit});
        pipeline.push({$limit: limit});


        const UserArray: IUser[] = await MongooseUserModel.aggregate(pipeline).exec();
        UserArray.forEach((user) => {
            const u = new UserModel();
            u.setId(new StringValue().setValue(user.id));
            u.setUsername(new StringValue().setValue(user.username));
            u.setEmail(new StringValue().setValue(user.email));

            call.write(u);
        });

        call.end();
    } catch (error: Error | any) {
        callback(error);
    }
}

/**
 * @param call
 * @param callback
 * @returns
 */
async function getAllUsers(call: ServerWritableStream<GetAllUsersRequest, IUserModel>, callback: sendUnaryData<IUserModel>) {
    try {
        const r = call.request;
        const o = {
            limit: r.hasLimit() ? r.getLimit()!.getValue() : 5,
            page: r.hasPage() ? r.getPage()!.getValue() : 1,
        }
        const UserArray: IUser[] = await MongooseUserModel
            .find()
            .skip((o.page - 1) * o.limit)
            .limit(o.limit);

        UserArray.forEach((user) => {
            const m = new UserModel();
            m.setId(new StringValue().setValue(user.id));
            m.setUsername(new StringValue().setValue(user.username));
            m.setEmail(new StringValue().setValue(user.email));

            call.write(m);
        });

        call.end();
    } catch (error: Error | any) {
        callback(error);
    }
}

/**
 * @param call
 * @param callback
 * @returns
 */
async function getUserById(call: ServerUnaryCall<GetUserByIdRequest, IUserModel>, callback: sendUnaryData<IUserModel>) {
    try {
        const r = call.request;
        const id = r.hasId() ? r.getId()!.getValue() : null;

        if (!id || !Types.ObjectId.isValid(id)) {
            throw new Error
        }
        const u: IUser | null = await MongooseUserModel.findById(id);

        if (!u) {
            throw new Error('User not found');
        }

        const m = new UserModel();
        m.setId(new StringValue().setValue(u.id));
        m.setUsername(new StringValue().setValue(u.username));
        m.setEmail(new StringValue().setValue(u.email));

        callback(null, m);
    } catch (error: Error | any) {
        callback(error);
    }
}

//
// /**
//  * @param call
//  * @param callback
//  * @returns
//  */
// async function getUserFollowers(call: ServerDuplexStream<GetUserFollowersRequest, UserFollowerModel>) {
//     try {
//         const requestStream = call;
//         const responseStream = call;
//
//         requestStream.on('data', async (request: GetUserFollowersRequest) => {
//             const userId = request.getId()?.getValue();
//             const page = request.getPage()?.getValue() || 1;
//             const limit = request.getLimit()?.getValue() || 5;
//
//             // Implement the logic to retrieve user followers from the database with pagination
//             // and send them through the gRPC stream
//             // For example:
//             const followers: UserFollowerModel[] = []; // Retrieve user followers from the database with pagination
//
//             followers.forEach((follower) => {
//                 responseStream.write(follower);
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
// async function getUserFollowing(call: ServerDuplexStream<GetUserFollowingRequest, UserFollowingModel>) {
//     try {
//         const requestStream = call;
//         const responseStream = call;
//
//         requestStream.on('data', async (request: GetUserFollowingRequest) => {
//             const userId = request.getId()?.getValue();
//             const page = request.getPage()?.getValue() || 1;
//             const limit = request.getLimit()?.getValue() || 5;
//
//             // Implement the logic to retrieve users following from the database with pagination
//             // and send them through the gRPC stream
//             // For example:
//             const following: UserFollowingModel[] = []; // Retrieve users following from the database with pagination
//
//             following.forEach((followedUser) => {
//                 responseStream.write(followedUser);
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

/**
 * @param call
 * @param callback
 * @returns
 */
async function followUser(call: ServerUnaryCall<FollowUserRequest, Empty>, callback: sendUnaryData<Empty>) {
    try {
        const r = call.request;
        const o = {
            currentUserId: r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null,
            userId: r.hasId() ? r.getId()!.getValue() : null,
        }
        await MongooseUserModel.findByIdAndUpdate(o.currentUserId, {$addToSet: {following: o.userId}});
        callback(null, new Empty());
    } catch (error: Error | any) {
        callback(error);
    }
}

/**
 * @param call
 * @param callback
 * @returns
 */
async function unfollowUser(call: ServerUnaryCall<UnfollowUserRequest, Empty>, callback: sendUnaryData<Empty>) {
    try {
        const r = call.request;
        const o = {
            currentUserId: r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null,
            userId: r.hasId() ? r.getId()!.getValue() : null,
        }
        await MongooseUserModel.findByIdAndUpdate(o.currentUserId, {$pull: {following: o.userId}});
        callback(null, new Empty());
    } catch (error: Error | any) {
        callback(error);
    }
}

export {
    getUsers,
    getAllUsers,
    getUserById,
    // getUserFollowers,
    // getUserFollowing,
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