"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOWNVOTE_COMMENT = exports.UPVOTE_COMMENT = exports.DOWNVOTE_POST = exports.UPVOTE_POST = exports.GET_POST_BY_ID = exports.DELETE_COMMENT = exports.UPDATE_COMMENT = exports.CREATE_COMMENT = exports.DELETE_POST = exports.UPDATE_POST = exports.CREATE_POST = exports.GET_POSTS_COMMENTS = exports.GET_USER_POSTS = exports.GET_POSTS = void 0;
const validator_1 = __importDefault(require("../utility/validator"));
const grpc_tools_1 = __importDefault(require("../utility/grpc-tools"));
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const post_schema_1 = __importDefault(require("../model/schema/post-schema"));
const comment_schema_1 = __importDefault(require("../model/schema/comment-schema"));
/**
 * @param call
 * @async
 * @throws
 */
async function GET_POSTS(call) {
    const r = call.request
    // , ids = r.getIdsList() ? r.getIdsList().map((id) => id.toString()) : []
    , limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1
    // , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
    // , match = r.hasMatch() ? r.getMatch()!.getValue() : null
    , pipeline = [];
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    pipeline.push({ $skip: (page - 1) * limit }, { $limit: limit });
    await post_schema_1.default.aggregate(pipeline).exec()
        .then((arr) => arr.forEach((p) => call.write(grpc_tools_1.default.convertPostModel(p))));
}
exports.GET_POSTS = GET_POSTS;
/**
 * @param call
 * @async
 * @throws
 */
async function GET_USER_POSTS(call) {
    const r = call.request, userId = r.hasUserId() ? r.getUserId().getValue() : null, limit = r.hasLimit() ? r.getLimit().getValue() : 5, page = r.hasPage() ? r.getPage().getValue() : 1
    // , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
    // , match = r.hasMatch() ? r.getMatch()!.getValue() : null
    , pipeline = [];
    validator_1.default['VALIDATE_ID'](userId);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    pipeline.push({ $match: { authorId: userId } }, { $skip: (page - 1) * limit }, { $limit: limit });
    await post_schema_1.default.aggregate(pipeline).exec()
        .then((arr) => arr.forEach((p) => call.write(grpc_tools_1.default.convertPostModel(p))));
}
exports.GET_USER_POSTS = GET_USER_POSTS;
/**
 * @param call
 * @async
 * @throws
 */
async function GET_POSTS_COMMENTS(call) {
    const r = call.request, postId = r.hasId() ? r.getId().getValue() : null, page = r.hasPage() ? r.getPage().getValue() : 1, limit = r.getLimit() ? r.getLimit().getValue() : 5;
    validator_1.default['VALIDATE_ID'](postId);
    validator_1.default['VALIDATE_FILTERS'](page, limit);
    await post_schema_1.default.findById(postId)
        .populate({
        path: 'comments',
        options: {
            skip: (page - 1) * limit,
            limit: limit,
        }
    }).exec().then((p) => p?.comments.forEach((c) => call.write(grpc_tools_1.default.convertCommentModel(c))));
}
exports.GET_POSTS_COMMENTS = GET_POSTS_COMMENTS;
/**
 * @param call
 * @param callback
 */
async function CREATE_POST(call, callback) {
    const r = call.request, title = r.hasTitle() ? r.getTitle().getValue() : '', description = r.hasDescription() ? r.getDescription().getValue() : '', authorId = r.hasAuthorId() ? r.getAuthorId().getValue() : null, isPromoted = r.hasIsPromoted() ? r.getIsPromoted().getValue() : false, pictures = r.getPicturesList().map((pic) => pic.toString()), tags = r.getTagsList().map((t) => t.toString()), authorB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](authorId);
    const p = await validator_1.default['VALIDATE_CREATE_POST']({
        author: authorB_Id,
        title: title,
        description: description,
        pictures: pictures,
        isPromoted: isPromoted,
        tags: tags,
    });
    callback(null, grpc_tools_1.default.convertPostModel(p));
}
exports.CREATE_POST = CREATE_POST;
/**
 * @param call
 * @param callback
 */
async function UPDATE_POST(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, title = r.hasTitle() ? r.getTitle().getValue() : '', description = r.hasDescription() ? r.getDescription().getValue() : '', isPromoted = r.hasIsPromoted() ? r.getIsPromoted().getValue() : false, pictures = r.getPicturesList().map((pic) => pic.toString()), tags = r.getTagsList().map((t) => t.toString()), _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id), userId = r.hasAuthId() ? r.getAuthId().getValue() : null;
    validator_1.default['VALIDATE_POST_DATA'](title);
    await post_schema_1.default.findByIdAndUpdate({ _id }, {
        $set: {
            title,
            description,
            pictures,
            isPromoted,
            tags
        }
    }).then((p) => callback(null, grpc_tools_1.default.convertPostModel(p)))
        .catch((error) => validator_1.default['THROWER']('ERROR WHILE UPDATING POST: ', error));
}
exports.UPDATE_POST = UPDATE_POST;
/**
 * @param call
 * @param callback
 */
async function DELETE_POST(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id), user_id = r.hasUserId() ? r.getUserId().getValue() : null, author = validator_1.default['CONVERT_TO_OBJECT_ID'](user_id);
    const result = await post_schema_1.default.deleteOne({ _id, author });
    (result.deletedCount > 0)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('ERROR WHILE DELETING USER: RESOURCE NOT FOUND');
}
exports.DELETE_POST = DELETE_POST;
/**
 * @param call
 * @param callback
 */
async function CREATE_COMMENT(call, callback) {
    const r = call.request, authorId = r.hasAuthorId() ? r.getAuthorId().getValue() : null, postId = r.hasPostId() ? r.getPostId().getValue() : null, content = r.hasContent() ? r.getContent().getValue() : '', authorB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](authorId), postB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](postId);
    const c = await validator_1.default['VALIDATE_CREATE_COMMENT'](content, authorB_Id, postB_Id);
    await post_schema_1.default.findOneAndUpdate({ _id: postB_Id }, { $push: { comments: c._id } }).catch(async (error) => {
        await comment_schema_1.default.deleteOne({ _id: c._id });
        validator_1.default["THROWER"](error, "Failed to Delete comment after Creation");
    });
    callback(null, grpc_tools_1.default.convertCommentModel(c));
}
exports.CREATE_COMMENT = CREATE_COMMENT;
/**
 * @param call
 * @param callback
 */
async function UPDATE_COMMENT(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, content = r.hasContent() ? r.getContent().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id);
    validator_1.default['VALIDATE_COMMENT_DATA'](content);
    const result = await comment_schema_1.default.findByIdAndUpdate({ _id }, { $set: { content } }, { new: true })
        .then((c) => callback(null, grpc_tools_1.default.convertCommentModel(c)))
        .catch((error) => validator_1.default['THROWER']('ERROR WHILE UPDATING COMMENT: ', error));
}
exports.UPDATE_COMMENT = UPDATE_COMMENT;
/**
 * @param call
 * @param callback
 */
async function DELETE_COMMENT(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id);
    const result = await comment_schema_1.default.deleteOne({ _id });
    (result.deletedCount > 0)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('ERROR WHILE DELETING USER: COMMENT NOT FOUND');
}
exports.DELETE_COMMENT = DELETE_COMMENT;
/**
 * @param call
 * @param callback
 */
async function GET_POST_BY_ID(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id);
    const p = await post_schema_1.default.findById(_id);
    validator_1.default['VALIDATE_POST'](p);
    callback(null, grpc_tools_1.default.convertPostModel(p));
}
exports.GET_POST_BY_ID = GET_POST_BY_ID;
/**
 * @param call
 * @param callback
 */
async function UPVOTE_POST(call, callback) {
    const r = call.request, postId = r.hasId() ? r.getId().getValue() : null, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null, postB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](postId), currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId);
    const result = await post_schema_1.default.aggregate([
        { $match: { _id: postB_Id } }, {
            $project: {
                upvotes: {
                    $cond: [
                        { $in: [currentUserB_Id, '$upvotes'] },
                        { $setDifference: ['$upvotes', [currentUserB_Id]] },
                        { $concatArrays: ['$upvotes', [currentUserB_Id]] }
                    ]
                }
            }
        },
        { $limit: 1 },
        { $project: { upvotes: 1 } }
    ]);
    if (result && 'length' in result && result.length === 0) {
        validator_1.default['THROWER'](`USER: ${currentUserId} FAILED TO UPVOTE POST: ${postId}`);
    }
    const { upvotes } = result[0];
    await post_schema_1.default.updateOne({ _id: postB_Id }, { upvotes });
    callback(null, new empty_pb_1.Empty());
}
exports.UPVOTE_POST = UPVOTE_POST;
/**
 * @param call
 * @param callback
 */
async function DOWNVOTE_POST(call, callback) {
    const r = call.request, postId = r.hasId() ? r.getId().getValue() : null, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null, postB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](postId), currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId);
    const result = await post_schema_1.default.aggregate([
        { $match: { _id: postB_Id } },
        {
            $project: {
                downvotes: {
                    $cond: [
                        { $in: [currentUserB_Id, '$downvotes'] },
                        { $setDifference: ['$downvotes', [currentUserB_Id]] },
                        '$downvotes'
                    ]
                }
            }
        },
        { $limit: 1 },
        { $project: { downvotes: 1 } }
    ]);
    if (result && 'length' in result && result.length === 0) {
        validator_1.default['THROWER'](`USER: ${currentUserId} FAILED TO DOWNVOTE POST: ${postId}`);
    }
    const { downvotes } = result[0];
    await post_schema_1.default.updateOne({ _id: postB_Id }, { downvotes });
    callback(null, new empty_pb_1.Empty());
}
exports.DOWNVOTE_POST = DOWNVOTE_POST;
/**
 * @param call
 * @param callback
 */
async function UPVOTE_COMMENT(call, callback) {
    const r = call.request, commentId = r.hasId() ? r.getId().getValue() : null, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId().getValue() : null, commentB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](commentId), currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId);
    const result = await comment_schema_1.default.aggregate([
        { $match: { _id: commentB_Id } },
        {
            $project: {
                upvotes: {
                    $cond: [
                        { $in: [currentUserB_Id, '$upvotes'] },
                        { $setDifference: ['$upvotes', [currentUserB_Id]] },
                        { $concatArrays: ['$upvotes', [currentUserB_Id]] }
                    ]
                }
            }
        },
        { $limit: 1 },
        { $project: { upvotes: 1 } }
    ]);
    if (result && 'length' in result && result.length === 0) {
        validator_1.default['THROWER'](`USER: ${currentUserId} FAILED TO UPVOTE COMMENT: ${commentId}`);
    }
    const { upvotes } = result[0];
    await comment_schema_1.default.updateOne({ _id: commentB_Id }, { upvotes });
    callback(null, new empty_pb_1.Empty());
}
exports.UPVOTE_COMMENT = UPVOTE_COMMENT;
/**
 * @param call
 * @param callback
 */
async function DOWNVOTE_COMMENT(call, callback) {
    const r = call.request, commentId = r.hasId() ? r.getId().getValue() : null, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null, commentB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](commentId), currentUserB_Id = validator_1.default['CONVERT_TO_OBJECT_ID'](currentUserId);
    const result = await comment_schema_1.default.aggregate([
        { $match: { _id: commentB_Id } },
        {
            $project: {
                downvotes: {
                    $cond: [
                        { $in: [currentUserB_Id, '$downvotes'] },
                        { $setDifference: ['$downvotes', [currentUserB_Id]] },
                        '$downvotes'
                    ]
                }
            }
        },
        { $limit: 1 },
        { $project: { downvotes: 1 } }
    ]);
    if (result && 'length' in result && result.length === 0) {
        validator_1.default['THROWER'](`USER: ${currentUserId} FAILED TO DOWNVOTE COMMENT: ${commentId}`);
    }
    const { downvotes } = result[0];
    await comment_schema_1.default.updateOne({ _id: commentB_Id }, { downvotes });
    callback(null, new empty_pb_1.Empty());
}
exports.DOWNVOTE_COMMENT = DOWNVOTE_COMMENT;
