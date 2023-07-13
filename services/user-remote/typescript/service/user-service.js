"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNFOLLOW_USER = exports.FOLLOW_USER = exports.GET_USER_FOLLOWING = exports.GET_USER_FOLLOWERS = exports.GET_USER_BY_ID = exports.GET_ALL_USERS = exports.GET_USERS = void 0;
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const grpc_tools_1 = __importDefault(require("../utility/grpc-tools"));
const validator_1 = __importDefault(require("../utility/validator"));
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USERS(call) {
    const r = call.request, limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1, filter = r.hasFilter() ? r.getFilter().getValue() : null, pipeline = [];
    if (filter) {
        pipeline.push({
            $match: {
                fieldToFilter: {
                    $regex: filter
                }
            }
        });
    }
    pipeline.push({ $skip: (page - 1) * limit }, { $limit: limit });
    await user_schema_1.default.aggregate(pipeline).exec()
        .then((arr) => arr.forEach(u => call.write(grpc_tools_1.default.convertUserModel(u))));
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
        .then((arr) => arr.forEach(u => call.write(grpc_tools_1.default.convertUserModel(u))));
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
    validator_1.default['VALIDATE_ID'](id);
    const u = await user_schema_1.default.findById(id);
    validator_1.default['VALIDATE_USER'](u);
    callback(null, grpc_tools_1.default.convertUserModel(u));
}
exports.GET_USER_BY_ID = GET_USER_BY_ID;
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWERS(call) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, page = r.hasPage() ? r.getPage().getValue() : 1, limit = r.getLimit() ? r.getLimit().getValue() : 5;
    validator_1.default['VALIDATE_ID'](id);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u) {
        validator_1.default['THROWER'](`Invalid user._id : ${id}`);
    }
    await user_schema_1.default.find({ _id: { $in: u.following } })
        .then(arr => arr.forEach(u => call.write(grpc_tools_1.default.convertUserModel(u))));
}
exports.GET_USER_FOLLOWERS = GET_USER_FOLLOWERS;
/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWING(call) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, page = r.hasPage() ? r.getPage().getValue() : 1, limit = r.getLimit() ? r.getLimit().getValue() : 5;
    validator_1.default['VALIDATE_ID'](id);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u) {
        validator_1.default['THROWER'](`Invalid user._id : ${id}`);
    }
    await user_schema_1.default.find({ _id: { $in: u.following } })
        .then(arr => arr.forEach(u => call.write(grpc_tools_1.default.convertUserModel(u))));
}
exports.GET_USER_FOLLOWING = GET_USER_FOLLOWING;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function FOLLOW_USER(call, callback) {
    const r = call.request, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null, userId = r.hasId() ? r.getId().getValue() : null, currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId), userB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](userId);
    if (userId === currentUserId) {
        validator_1.default['THROWER']('Users _id\'s are equal');
    }
    if (await user_schema_1.default.exists({
        _id: currentUserB_Id,
        following: {
            $in: [userB_Id]
        }
    })) {
        validator_1.default['THROWER']('Users is already follower');
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
    ]).then(r => (r && r.ok)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('Failed to update users'));
}
exports.FOLLOW_USER = FOLLOW_USER;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function UNFOLLOW_USER(call, callback) {
    const r = call.request, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null, userId = r.hasId() ? r.getId().getValue() : null, currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId), userB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](userId);
    if (userId === currentUserId) {
        validator_1.default['THROWER']('Users _id\'s are equal');
    }
    if (!await user_schema_1.default.exists({
        _id: currentUserB_Id, following: { $in: [userB_Id] }
    })) {
        validator_1.default['THROWER']('Users is not follower');
    }
    await user_schema_1.default.bulkWrite([
        {
            updateOne: {
                filter: {
                    _id: currentUserB_Id
                },
                update: {
                    $pull: { following: userB_Id }
                },
            },
        },
        {
            updateOne: {
                filter: {
                    _id: userB_Id
                },
                update: {
                    $pull: {
                        followers: currentUserB_Id
                    }
                },
            },
        },
    ]).then(r => (r && r.ok)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('Failed to update users'));
}
exports.UNFOLLOW_USER = UNFOLLOW_USER;
