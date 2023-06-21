"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNFOLLOW_USER = exports.FOLLOW_USER = exports.GET_USER_FOLLOWING = exports.GET_USER_FOLLOWERS = exports.GET_USER_BY_ID = exports.GET_ALL_USERS = exports.GET_USERS = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const grpc_tools_1 = require("../utilities/grpc-tools");
const Validator = __importStar(require("../utilities/validator"));
const validator_1 = require("../utilities/validator");
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USERS(call) {
    const r = call.request, limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1, filter = r.hasFilter() ? r.getFilter().getValue() : null, pipeline = [];
    if (filter) {
        pipeline.push({
            $match: { fieldToFilter: { $regex: filter } }
        });
    }
    pipeline.push({ $skip: (page - 1) * limit }, { $limit: limit });
    await user_schema_1.default.aggregate(pipeline).exec()
        .then((arr) => arr.forEach(u => call.write((0, grpc_tools_1.convertUserModel)(u))));
}
exports.GET_USERS = GET_USERS;
/**
 * @param call
 * @throws
 * @async
 */
async function GET_ALL_USERS(call) {
    const r = call.request, limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1;
    await user_schema_1.default.find().skip((page - 1) * limit).limit(limit)
        .then((arr) => arr.forEach(u => call.write((0, grpc_tools_1.convertUserModel)(u))));
}
exports.GET_ALL_USERS = GET_ALL_USERS;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function GET_USER_BY_ID(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null;
    Validator.ValidateId(id);
    const u = await user_schema_1.default.findById(id);
    Validator.ValidateUser(u);
    callback(null, (0, grpc_tools_1.convertUserModel)(u));
}
exports.GET_USER_BY_ID = GET_USER_BY_ID;
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWERS(call) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, page = r.hasPage() ? r.getPage().getValue() : 1, limit = r.getLimit() ? r.getLimit().getValue() : 5;
    Validator.ValidateId(id);
    Validator.ValidateFilters(page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u) {
        (0, validator_1.Thrower)(`Ivalid user._id : ${id}`);
    }
    await user_schema_1.default.find({ _id: { $in: u.following } })
        .then(arr => arr.forEach(u => call.write((0, grpc_tools_1.convertUserModel)(u))));
}
exports.GET_USER_FOLLOWERS = GET_USER_FOLLOWERS;
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWING(call) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, page = r.hasPage() ? r.getPage().getValue() : 1, limit = r.getLimit() ? r.getLimit().getValue() : 5;
    Validator.ValidateId(id);
    Validator.ValidateFilters(page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u) {
        (0, validator_1.Thrower)(`Ivalid user._id : ${id}`);
    }
    await user_schema_1.default.find({ _id: { $in: u.following } })
        .then(arr => arr.forEach(u => call.write((0, grpc_tools_1.convertUserModel)(u))));
}
exports.GET_USER_FOLLOWING = GET_USER_FOLLOWING;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function FOLLOW_USER(call, callback) {
    const r = call.request, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null, userId = r.hasId() ? r.getId().getValue() : null, currentUserB_Id = Validator.CovertToObjectId(currentUserId), userB_Id = Validator.CovertToObjectId(userId);
    if (userId === currentUserId) {
        (0, validator_1.Thrower)('Users _id\'s are equal');
    }
    if (await user_schema_1.default.exists({
        _id: currentUserB_Id,
        following: { $in: [userB_Id] }
    })) {
        (0, validator_1.Thrower)('Users is already follower');
    }
    await user_schema_1.default.collection.bulkWrite([
        {
            updateOne: {
                filter: { _id: currentUserB_Id },
                update: { $addToSet: { following: userB_Id } },
            },
        },
        {
            updateOne: {
                filter: { _id: userB_Id },
                update: { $addToSet: { followers: currentUserB_Id } },
            },
        },
    ]).then(r => (r && r.ok) ? callback(null, new empty_pb_1.Empty())
        : (0, validator_1.Thrower)('Failed to update users'));
}
exports.FOLLOW_USER = FOLLOW_USER;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function UNFOLLOW_USER(call, callback) {
    const r = call.request, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null, userId = r.hasId() ? r.getId().getValue() : null, currentUserB_Id = Validator.CovertToObjectId(currentUserId), userB_Id = Validator.CovertToObjectId(userId);
    if (userId === currentUserId) {
        (0, validator_1.Thrower)('Users _id\'s are equal');
    }
    if (!await user_schema_1.default.exists({
        _id: currentUserB_Id,
        following: { $in: [userB_Id] }
    })) {
        (0, validator_1.Thrower)('Users is not follower');
    }
    await user_schema_1.default.bulkWrite([
        {
            updateOne: {
                filter: { _id: currentUserB_Id },
                update: { $pull: { following: userB_Id } },
            },
        },
        {
            updateOne: {
                filter: { _id: userB_Id },
                update: { $pull: { followers: currentUserB_Id } },
            },
        },
    ]).then(r => (r && r.ok) ? callback(null, new empty_pb_1.Empty())
        : (0, validator_1.Thrower)('Failed to update users'));
}
exports.UNFOLLOW_USER = UNFOLLOW_USER;
