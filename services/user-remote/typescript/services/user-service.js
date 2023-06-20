"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowUser = exports.followUser = exports.getUserFollowing = exports.getUserFollowers = exports.getUserById = exports.getAllUsers = exports.getUsers = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const grpc_tools_1 = require("../utilities/grpc-tools");
/**
 * Retrieves a list of users based on the specified criteria.
 * ( optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUsers(call) {
    try {
        const r = call.request, limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1, pipeline = [];
        if (r.hasFilter()) {
            const filter = r.getFilter().getValue();
            pipeline.push({
                $match: {
                    fieldToFilter: { $regex: filter },
                },
            });
        }
        pipeline.push({ $skip: (page - 1) * limit }, { $limit: limit });
        const UserArray = await user_schema_1.default.aggregate(pipeline).exec();
        UserArray.forEach((u) => {
            const m = (0, grpc_tools_1.convertUserModel)(u);
            // const u = new UserModel();
            // u.setId(new StringValue().setValue(user.id));
            // u.setUsername(new StringValue().setValue(user.username));
            // u.setEmail(new StringValue().setValue(user.email));
            call.write(m);
        });
        call.end();
    }
    catch (error) {
        call.emit(error);
    }
}
exports.getUsers = getUsers;
/**
 * Retrieves all users.
 * ( takes optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getAllUsers(call) {
    try {
        const r = call.request;
        const limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1;
        const UserArray = await user_schema_1.default
            .find()
            .skip((page - 1) * limit)
            .limit(limit);
        UserArray.forEach((u) => {
            const m = (0, grpc_tools_1.convertUserModel)(u);
            // m.setId(new StringValue().setValue(User.id));
            // m.setUsername(new StringValue().setValue(User.username));
            // m.setEmail(new StringValue().setValue(User.email));
            call.write(m);
        });
        call.end();
    }
    catch (error) {
        call.emit(error);
    }
}
exports.getAllUsers = getAllUsers;
/**
 * Retrieves a user by their ID.
 * ( takes user _id )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserById(call, callback) {
    try {
        const r = call.request;
        const id = r.hasId() ? r.getId().getValue() : null;
        if (!id || !mongoose_1.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid User id');
        }
        const u = await user_schema_1.default.findById(id);
        if (!u) {
            throw new Error('User not found');
        }
        // const stringId: string = u._id.toString();
        const m = (0, grpc_tools_1.convertUserModel)(u);
        // const m = new UserModel();
        // m.setId(new StringValue().setValue(stringId));
        // m.setUsername(new StringValue().setValue(u.username));
        // m.setEmail(new StringValue().setValue(u.email));
        callback(null, m);
    }
    catch (error) {
        callback(error);
    }
}
exports.getUserById = getUserById;
/**
 * Retrieves the followers of a user.
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowers(call) {
    try {
        const r = call.request;
        const id = r.hasId() ? r.getId().getValue() : null;
        const page = r.hasPage() ? r.getPage().getValue() : 1;
        const limit = r.getLimit() ? r.getLimit().getValue() : 5;
        if (!id || !mongoose_1.Types.ObjectId.isValid(id)
            || page > 0 || Number.isNaN(page)
            || limit > 0 || Number.isNaN(limit)) {
            throw new Error('Invalid User id');
        }
        const u = await user_schema_1.default.findById(id);
        if (!u) {
            throw new Error('User not found');
        }
        const UserArray = await user_schema_1.default.aggregate([
            { $match: { _id: id } },
            { $lookup: { from: 'users', localField: 'followers', foreignField: '_id', as: 'followers' } },
            { $unwind: 'followers' },
            { $skip: (page - 1) * limit },
            { $limit: limit },
        ]).exec();
        UserArray.forEach((u) => {
            console.log(u);
            const m = (0, grpc_tools_1.convertUserModel)(u);
            // const m = new UserModel();
            // m.setId(new StringValue().setValue(user.id));
            // m.setUsername(new StringValue().setValue(user.username));
            // m.setEmail(new StringValue().setValue(user.email));
            call.write(m);
        });
        call.end();
    }
    catch (error) {
        call.emit(error);
    }
}
exports.getUserFollowers = getUserFollowers;
/**
 * Retrieves the users that a user is following
 * ( takes _id, and optionally page & limit )
 * @param call - The call object for the gRPC writable stream.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function getUserFollowing(call) {
    try {
        const r = call.request;
        const id = r.hasId() ? r.getId().getValue() : null;
        const page = r.hasPage() ? r.getPage().getValue() : 1;
        const limit = r.getLimit() ? r.getLimit().getValue() : 5;
        if (!id || !mongoose_1.Types.ObjectId.isValid(id)
            || page > 0 || Number.isNaN(page)
            || limit > 0 || Number.isNaN(limit)) {
            throw new Error('Invalid User id');
        }
        const u = await user_schema_1.default.findById(id);
        if (!u) {
            throw new Error('User not found');
        }
        const UserArray = await user_schema_1.default.aggregate([
            { $match: { _id: id } },
            { $lookup: { from: 'users', localField: 'following', foreignField: '_id', as: 'following' } },
            { $unwind: '$following' },
            { $skip: (page - 1) * limit },
            { $limit: limit },
        ]).exec();
        UserArray.forEach((u) => {
            console.log(u);
            const m = (0, grpc_tools_1.convertUserModel)(u);
            // const m = new UserModel();
            // m.setId(new StringValue().setValue(user.id));
            // m.setUsername(new StringValue().setValue(user.username));
            // m.setEmail(new StringValue().setValue(user.email));
            call.write(m);
        });
        call.end();
    }
    catch (error) {
        call.emit(error);
    }
}
exports.getUserFollowing = getUserFollowing;
/**
 * Follows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function followUser(call, callback) {
    try {
        const r = call.request;
        const currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null;
        const userId = r.hasId() ? r.getId().getValue() : null;
        if (!currentUserId || !mongoose_1.Types.ObjectId.isValid(currentUserId)
            || !userId || !mongoose_1.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid User id');
        }
        const currentUserBId = new bson_1.ObjectId(currentUserId);
        const userBId = new bson_1.ObjectId(userId);
        await user_schema_1.default.collection.bulkWrite([
            {
                updateOne: {
                    filter: { _id: currentUserBId },
                    update: { $addToSet: { following: userBId } },
                },
            },
            {
                updateOne: {
                    filter: { _id: userBId },
                    update: { $addToSet: { followers: currentUserBId } },
                },
            },
        ])
            .then((result) => {
            if (result && result.ok) {
                console.log('Bulk write operation successful');
                callback(null, new empty_pb_1.Empty());
            }
            else {
                throw new Error('Failed to update users');
            }
        });
    }
    catch (error) {
        callback(error);
    }
}
exports.followUser = followUser;
/**
 * Unfollows a user ( takes 2 user _id's current and target )
 * @param call - The call object for the gRPC writable stream.
 * @param callback  - The callback function to send the response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function unfollowUser(call, callback) {
    try {
        const r = call.request;
        const currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null;
        const userId = r.hasId() ? r.getId().getValue() : null;
        if (!currentUserId || !mongoose_1.Types.ObjectId.isValid(currentUserId)
            || !userId || !mongoose_1.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid User id');
        }
        const currentUserBId = new bson_1.ObjectId(currentUserId);
        const userBId = new bson_1.ObjectId(userId);
        await user_schema_1.default.bulkWrite([
            {
                updateOne: {
                    filter: { _id: currentUserBId },
                    update: { $pull: { following: userBId } },
                },
            },
            {
                updateOne: {
                    filter: { _id: userBId },
                    update: { $pull: { followers: currentUserBId } },
                },
            },
        ])
            .then((result) => {
            if (result && result.ok) {
                console.log('Bulk write operation successful');
                callback(null, new empty_pb_1.Empty());
            }
            else {
                throw new Error('Failed to update users');
            }
        });
    }
    catch (error) {
        callback(error);
    }
}
exports.unfollowUser = unfollowUser;
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
