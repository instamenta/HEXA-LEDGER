'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowUser = exports.followUser = exports.getUserFollowing = exports.getUserFollowers = exports.getUserById = exports.getAllUsers = exports.getUsers = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const { UserModel } = require('../generated/users_pb');
/**
 * @param call
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
        UserArray.forEach((user) => {
            const u = new UserModel();
            u.setId(new wrappers_pb_1.StringValue().setValue(user.id));
            u.setUsername(new wrappers_pb_1.StringValue().setValue(user.username));
            u.setEmail(new wrappers_pb_1.StringValue().setValue(user.email));
            call.write(u);
        });
        call.end();
    }
    catch (error) {
        call.emit(error);
    }
}
exports.getUsers = getUsers;
/**
 * @param call
 */
async function getAllUsers(call) {
    try {
        const r = call.request;
        const limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1;
        const UserArray = await user_schema_1.default
            .find()
            .skip((page - 1) * limit)
            .limit(limit);
        UserArray.forEach((User) => {
            const m = new UserModel();
            m.setId(new wrappers_pb_1.StringValue().setValue(User.id));
            m.setUsername(new wrappers_pb_1.StringValue().setValue(User.username));
            m.setEmail(new wrappers_pb_1.StringValue().setValue(User.email));
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
 * @param call
 * @param callback
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
        const stringId = u._id.toString();
        const m = new UserModel();
        m.setId(new wrappers_pb_1.StringValue().setValue(stringId));
        m.setUsername(new wrappers_pb_1.StringValue().setValue(u.username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(u.email));
        callback(null, m);
    }
    catch (error) {
        callback(error);
    }
}
exports.getUserById = getUserById;
/**
 * @param call
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
        UserArray.forEach((user) => {
            console.log(user);
            const m = new UserModel();
            m.setId(new wrappers_pb_1.StringValue().setValue(user.id));
            m.setUsername(new wrappers_pb_1.StringValue().setValue(user.username));
            m.setEmail(new wrappers_pb_1.StringValue().setValue(user.email));
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
 * @param call
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
        UserArray.forEach((user) => {
            console.log(user);
            const m = new UserModel();
            m.setId(new wrappers_pb_1.StringValue().setValue(user.id));
            m.setUsername(new wrappers_pb_1.StringValue().setValue(user.username));
            m.setEmail(new wrappers_pb_1.StringValue().setValue(user.email));
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
 * @param call
 * @param callback
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
 * @param call
 * @param callback
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
