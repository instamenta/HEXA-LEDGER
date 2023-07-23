import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from "@grpc/grpc-js";
import {IUser} from "../utility/types/base-types";
import Validator from "../utility/validator";
import GrpcTools from "../utility/grpc-tools";
import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {
    CommentForm, CommentModel,
    Comments, DeleteByObjectId, GetByObjectId,
    GetCommentsRequest, GetPostsRequest, GetUserPostsRequest, PostForm, PostModel,
    PostModel as IPostModel, UpdateByObjectId, VoteCommentRequest
} from "../protos/generated/types/posts_pb";
import MongoosePostModel from '../model/schema/post-schema'
import MongooseCommentModel from '../model/schema/comment-schema'
import {ObjectId} from "bson";

/**
 * @param call
 * @throws
 * @async
 */
export async function GET_POSTS(
    call: ServerWritableStream<GetPostsRequest, IPostModel>
): Promise<void> {
    const r = call.request
        , ids = r.getIdsList() ? r.getIdsList().map((id) => id.toString()) : []
        , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
        , match = r.hasMatch() ? r.getMatch()!.getValue() : null
        , pipeline = []
    ;
    Validator['VALIDATE_FILTERS'](page, limit);
    pipeline.push(
        {$skip: (page - 1) * limit},
        {$limit: limit}
    );
    await MongoosePostModel.aggregate(pipeline).exec()
        .then((arr) => arr.forEach(p => call.write(GrpcTools.convertPostModel(p))));
}

/**
 * @param call
 * @throws
 * @async
 */
export async function GET_USER_POSTS(
    call: ServerWritableStream<GetUserPostsRequest, IPostModel>
): Promise<void> {
    const r = call.request
        , userId = r.hasUserId() ? r.getUserId()!.getValue() : null
        , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
        , match = r.hasMatch() ? r.getMatch()!.getValue() : null
        , pipeline = []
    Validator['VALIDATE_ID'](userId);
    Validator['VALIDATE_FILTERS'](page, limit);
    pipeline.push(
        {$match: {authorId: userId}},
        {$skip: (page - 1) * limit},
        {$limit: limit}
    );
    await MongoosePostModel.aggregate(pipeline).exec()
        .then((arr) => arr.forEach(p => call.write(GrpcTools.convertPostModel(p))));
}

/**
 * @param call
 * @throws
 * @async
 */
export async function GET_POSTS_COMMENTS(
    call: ServerWritableStream<GetCommentsRequest, Comments>
): Promise<void> {
    const r = call.request
        , postId = r.hasId() ? r.getId()!.getValue() : null
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , limit = r.getLimit() ? r.getLimit()!.getValue() : 5
        // , _id : ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id)
    ;
    Validator['VALIDATE_ID'](id);
    Validator['VALIDATE_FILTERS'](page, limit);
    await MongooseCommentModel.find({

    })
}

/*---------------------------------------------------------*/
/**
 */
export async function CREATE_POST(
    call: ServerUnaryCall<PostForm, PostModel>,
    callback: sendUnaryData<PostModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function UPDATE_POST(
    call: ServerUnaryCall<PostForm, PostModel>,
    callback: sendUnaryData<PostModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function DELETE_POST(
    call: ServerUnaryCall<DeleteByObjectId, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function CREATE_COMMENT(
    call: ServerUnaryCall<CommentForm, CommentModel>,
    callback: sendUnaryData<CommentModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function UPDATE_COMMENT(
    call: ServerUnaryCall<CommentForm, CommentModel>,
    callback: sendUnaryData<CommentModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function DELETE_COMMENT(
    call: ServerUnaryCall<DeleteByObjectId, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function GET_POST_BY_ID(
    call: ServerUnaryCall<GetByObjectId, IPostModel>,
    callback: sendUnaryData<IPostModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function UPVOTE_POST(
    call: ServerUnaryCall<VotePostRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function DOWNVOTE_POST(
    call: ServerUnaryCall<VotePostRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function UPVOTE_COMMENT(
    call: ServerUnaryCall<VoteCommentRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}

/**
 */
export async function DOWNVOTE_COMMENT(
    call: ServerUnaryCall<VoteCommentRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
    ;
    Validator['VALIDATE_ID'](id);
    const u = <IUser>await MongooseUserModel.findById(id);
    Validator['VALIDATE_USER'](u);
    callback(null, GrpcTools.convertUserModel(<IUser>u));
}
