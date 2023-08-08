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
function GET_USERS(call) {
    const limit = call.request.hasLimit() ? call.request.getLimit().getValue() : 5, page = call.request.hasPage() ? call.request.getPage().getValue() : 1, filter = call.request.hasFilter() ? call.request.getFilter().getValue() : null, pipeline = [];
    if (filter)
        pipeline.push({ $match: { fieldToFilter: { $regex: filter } } });
    pipeline.push({ $skip: (page - 1) * limit }, { $limit: limit });
    user_schema_1.default.aggregate(pipeline).exec()
        .then((userArray) => {
        for (let i = 0, len = userArray.length; i < len; i++)
            call.write(grpc_tools_1.default.convertUserModel(userArray[i]));
    });
}
exports.GET_USERS = GET_USERS;
function GET_ALL_USERS(call) {
    const limit = call.request.hasLimit() ? call.request.getLimit().getValue() : 5, page = call.request.hasPage() ? call.request.getPage().getValue() : 1;
    user_schema_1.default.find().skip((page - 1) * limit).limit(limit)
        .then((userArr) => {
        for (let i = 0, len = userArr.length; i < len; i++)
            call.write(grpc_tools_1.default.convertUserModel(userArr[i]));
    });
}
exports.GET_ALL_USERS = GET_ALL_USERS;
async function GET_USER_BY_ID(call, callback) {
    const u = await user_schema_1.default.findById(call.request.hasId() ? call.request.getId().getValue() : null);
    validator_1.default['VALIDATE_USER'](u);
    callback(null, grpc_tools_1.default.convertUserModel(u));
}
exports.GET_USER_BY_ID = GET_USER_BY_ID;
async function GET_USER_FOLLOWERS(call) {
    const id = call.request.hasId() ? call.request.getId().getValue() : null, page = call.request.hasPage() ? call.request.getPage().getValue() : 1, limit = call.request.getLimit() ? call.request.getLimit().getValue() : 5;
    validator_1.default['VALIDATE_ID'](id);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u)
        validator_1.default['THROWER'](`Invalid user._id : ${id}`);
    user_schema_1.default.find({ _id: { $in: u.following } }).skip(page).limit(limit)
        .then((userArr) => {
        for (let i = 0, len = userArr.length; i < len; i++)
            call.write(grpc_tools_1.default.convertUserModel(userArr[i]));
    });
}
exports.GET_USER_FOLLOWERS = GET_USER_FOLLOWERS;
async function GET_USER_FOLLOWING(call) {
    const id = call.request.hasId() ? call.request.getId().getValue() : null, page = call.request.hasPage() ? call.request.getPage().getValue() : 1, limit = call.request.getLimit() ? call.request.getLimit().getValue() : 5;
    validator_1.default['VALIDATE_ID'](id);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    const u = await user_schema_1.default.findById(id);
    if (!u)
        validator_1.default['THROWER'](`Invalid user._id : ${id}`);
    user_schema_1.default.find({ _id: { $in: u.following } }).skip(page).limit(limit)
        .then((userArr) => {
        for (let i = 0, len = userArr.length; i < len; i++)
            call.write(grpc_tools_1.default.convertUserModel(userArr[i]));
    });
}
exports.GET_USER_FOLLOWING = GET_USER_FOLLOWING;
async function FOLLOW_USER(call, callback) {
    const currentUserId = validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasCurrentUserId() ? call.request.getCurrentUserId().getValue() : null), userId = validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasId() ? call.request.getId().getValue() : null);
    if (userId === currentUserId)
        validator_1.default['THROWER']('Users _id\'s are equal');
    if (await user_schema_1.default.exists({
        _id: currentUserId,
        following: { $in: [userId] }
    }))
        validator_1.default['THROWER']('Users is already follower');
    user_schema_1.default.collection.bulkWrite([{
            updateOne: {
                filter: { _id: currentUserId },
                update: { $addToSet: { following: userId } },
            }
        }, {
            updateOne: {
                filter: { _id: userId },
                update: { $addToSet: { followers: currentUserId } },
            }
        }]).then((result) => (result && result.ok)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('Failed to update users'));
}
exports.FOLLOW_USER = FOLLOW_USER;
async function UNFOLLOW_USER(call, callback) {
    const currentUserId = validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasCurrentUserId()
        ? call.request.getCurrentUserId().getValue() : null), userId = validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasId()
        ? call.request.getId().getValue() : null);
    if (userId === currentUserId)
        validator_1.default['THROWER']('Users _id\'s are equal');
    if (!await user_schema_1.default.exists({ _id: currentUserId, following: { $in: [userId] } }))
        validator_1.default['THROWER']('Users is not follower');
    user_schema_1.default.bulkWrite([{
            updateOne: {
                filter: { _id: currentUserId },
                update: { $pull: { following: userId } }
            }
        }, {
            updateOne: {
                filter: { _id: userId },
                update: { $pull: { followers: currentUserId } }
            }
        }]).then((result) => (result && result.ok)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('Failed to update users'));
}
exports.UNFOLLOW_USER = UNFOLLOW_USER;
