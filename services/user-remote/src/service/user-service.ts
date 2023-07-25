/** @file Service handles User related Server Endpoints Methods. */

import {ServerUnaryCall, ServerWritableStream, sendUnaryData} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import MongooseUserModel from '../model/schema/user-schema';
import GrpcTools from '../utility/grpc-tools';
import Validator from '../utility/validator';
import {ObjectId} from 'bson';
import {IUser} from '../utility/types/base-types';
import {
    FollowUserRequest,
    GetAllUsersRequest,
    GetUserByIdRequest,
    GetUserFollowersRequest,
    GetUserFollowingRequest,
    GetUsersRequest,
    UserModel as IUserModel,
    UnfollowUserRequest,
} from '../protos/generated/types/users_pb';

export {
    GET_USERS,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    GET_USER_FOLLOWERS,
    GET_USER_FOLLOWING,
    FOLLOW_USER,
    UNFOLLOW_USER,
};

/**
 * @param call
 */
async function GET_USERS(
    call: ServerWritableStream<GetUsersRequest, IUserModel>,
): Promise<void> {
    const r = call.request
        , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
        , pipeline = []
    ;
    if (filter) {
        pipeline.push(
            {
                $match: {
                    fieldToFilter: {
                        $regex: filter
                    }
                }
            });
    }
    pipeline.push(
        {$skip: (page - 1) * limit},
        {$limit: limit}
    );
    await MongooseUserModel.aggregate(pipeline).exec()
        .then((arr) => arr.forEach((u) => call.write(GrpcTools.convertUserModel(u))));
}

/**
 * @param call
 */
async function GET_ALL_USERS(
    call: ServerWritableStream<GetAllUsersRequest, IUserModel>,
): Promise<void> {
    const r = call.request
        , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
    ;
    await MongooseUserModel.find().skip((page - 1) * limit).limit(limit)
        .then((arr) => arr.forEach((u) => call.write(GrpcTools.convertUserModel(<IUser>u))));
}

/**
 * @param call
 * @param callback
 */
async function GET_USER_BY_ID(
    call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
    callback: sendUnaryData<IUserModel>
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
 * @param call
 */
async function GET_USER_FOLLOWERS(
    call: ServerWritableStream<GetUserFollowersRequest, IUserModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , limit = r.getLimit() ? r.getLimit()!.getValue() : 5
    ;
    Validator['VALIDATE_ID'](id);
    Validator['VALIDATE_FILTERS'](page, limit);
    const u = <IUser>await MongooseUserModel.findById(id);
    if (!u) {
        Validator['THROWER'](`Invalid user._id : ${id}`);
    }
    await MongooseUserModel.find({_id: {$in: u.following}})
        .then((arr) => arr.forEach((u) => call.write(GrpcTools.convertUserModel(<IUser>u))));
}

/**
 * @param call
 * @async
 * @throws
 */
async function GET_USER_FOLLOWING(
    call: ServerWritableStream<GetUserFollowingRequest, IUserModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
        , page = r.hasPage() ? r.getPage()!.getValue() : 1
        , limit = r.getLimit() ? r.getLimit()!.getValue() : 5
    ;
    Validator['VALIDATE_ID'](id);
    Validator['VALIDATE_FILTERS'](page, limit);
    const u = <IUser>await MongooseUserModel.findById(id);
    if (!u) {
        Validator['THROWER'](`Invalid user._id : ${id}`);
    }
    await MongooseUserModel.find({_id: {$in: u.following}})
        .then((arr) => arr.forEach((u) => call.write(GrpcTools.convertUserModel(<IUser>u))));
}


/**
 * @param call
 * @param callback
 * @async
 * @throws
 */
async function FOLLOW_USER(
    call: ServerUnaryCall<FollowUserRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null
        , userId = r.hasId() ? r.getId()!.getValue() : null
        , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId)
        , userB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](userId)
    ;
    if (userId === currentUserId) {
        Validator['THROWER']('Users _id\'s are equal');
    }
    if (await MongooseUserModel.exists({
        _id: currentUserB_Id,
        following: {
            $in: [userB_Id]
        }
    })) {
        Validator['THROWER']('Users is already follower');
    }
    await MongooseUserModel.collection.bulkWrite([
        {
            updateOne: {
                filter: {_id: currentUserB_Id},
                update: {$addToSet: {following: userB_Id}},
            },
        },
        {
            updateOne: {
                filter: {_id: userB_Id},
                update: {$addToSet: {followers: currentUserB_Id}},
            },
        },
    ] as any).then((r) => (r && r.ok)
        ? callback(null, new Empty())
        : Validator['THROWER']('Failed to update users')
    );
}

/**
 * @param call
 * @param callback
 * @async
 * @throws
 */
async function UNFOLLOW_USER(
    call: ServerUnaryCall<UnfollowUserRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null
        , userId = r.hasId() ? r.getId()!.getValue() : null
        , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId)
        , userB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](userId)
    ;
    if (userId === currentUserId) {
        Validator['THROWER']('Users _id\'s are equal');
    }
    if (!await MongooseUserModel.exists({
        _id: currentUserB_Id, following: {$in: [userB_Id]}
    })) {
        Validator['THROWER']('Users is not follower');
    }
    await MongooseUserModel.bulkWrite([
        {
            updateOne: {
                filter: {
                    _id: currentUserB_Id
                },
                update: {
                    $pull: {following: userB_Id}
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
    ] as any).then((r) => (r && r.ok)
        ? callback(null, new Empty())
        : Validator['THROWER']('Failed to update users')
    );
}

