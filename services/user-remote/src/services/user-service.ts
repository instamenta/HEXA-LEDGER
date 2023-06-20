import {ServerUnaryCall, sendUnaryData, ServerWritableStream} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import MongooseUserModel, {IUser} from '../models/user-schema';
import {convertUserModel} from '../utilities/grpc-tools';
import * as Validator from '../utilities/validator';
import {
	UserModel as IUserModel,
	GetAllUsersRequest,
	GetUsersRequest,
	GetUserByIdRequest,
	FollowUserRequest,
	UnfollowUserRequest,
	GetUserFollowersRequest,
	GetUserFollowingRequest,
} from '../generated/types/users_pb';

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
 * @throws
 * @async
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
		pipeline.push({
			$match: {fieldToFilter: {$regex: filter}}
		});
	}
	pipeline.push(
		{$skip: (page - 1) * limit}, {$limit: limit}
	);
	const UserArray: IUser[] = await MongooseUserModel.aggregate(pipeline).exec();
	UserArray.forEach(u => call.write(convertUserModel(u)));
	call.end();
}

/**
 * @param call
 * @throws
 * @async
 */
async function GET_ALL_USERS(
	call: ServerWritableStream<GetAllUsersRequest, IUserModel>,
): Promise<void> {

	const r = call.request
		, limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
		, page = r.hasPage() ? r.getPage()!.getValue() : 1
		, UserArray: IUser[] = await MongooseUserModel
			.find().skip((page - 1) * limit).limit(limit)
    ;
	UserArray.forEach(u => call.write(convertUserModel(u)));
	call.end();
}

/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function GET_USER_BY_ID(
	call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	const r = call.request
		, id = r.hasId() ? r.getId()!.getValue() : null
    ;
	Validator.ValidateId(id);
	const u: IUser | null = await MongooseUserModel.findById(id);
	Validator.ValidateUser(u);
	callback(null, convertUserModel(u as IUser));
}


/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWERS(
	call: ServerWritableStream<GetUserFollowersRequest, IUserModel>
): Promise<void> {

	const r = call.request
		, id = r.hasId() ? r.getId()!.getValue() : null
		, page = r.hasPage() ? r.getPage()!.getValue() : 1
		, limit = r.getLimit() ? r.getLimit()!.getValue() : 5
    ;
	Validator.ValidateFilters(id, page, limit);
	const u: IUser | null = await MongooseUserModel.findById(id);
	Validator.ValidateUser(u);
	const UserArray = await MongooseUserModel.aggregate([
		{$match: {_id: id}},
		{$lookup: {from: 'users', localField: 'followers', foreignField: '_id', as: 'followers'}},
		{$unwind: 'followers'},
		{$skip: (page - 1) * limit},
		{$limit: limit},
	]).exec();

	UserArray.forEach(u => call.write(convertUserModel(u)));
	call.end();
}

/**
 * @param call
 * @throws
 * @async
 */
async function GET_USER_FOLLOWING(
	call: ServerWritableStream<GetUserFollowingRequest, IUserModel>
): Promise<void> {

	const r = call.request
		, id = r.hasId() ? r.getId()!.getValue() : null
		, page = r.hasPage() ? r.getPage()!.getValue() : 1
		, limit = r.getLimit() ? r.getLimit()!.getValue() : 5
    ;
	Validator.ValidateFilters(id, page, limit);
	const u: IUser | null = await MongooseUserModel.findById(id);
	Validator.ValidateUser(u);
	const UserArray = await MongooseUserModel.aggregate([
		{$match: {_id: id}},
		{$lookup: {from: 'users', localField: 'following', foreignField: '_id', as: 'following'}},
		{$unwind: '$following'},
		{$skip: (page - 1) * limit},
		{$limit: limit},
	]).exec();

	UserArray.forEach(u => call.write(convertUserModel(u)));
	call.end();
}

/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function FOLLOW_USER(
	call: ServerUnaryCall<FollowUserRequest, Empty>,
	callback: sendUnaryData<Empty>
): Promise<void> {

	const r = call.request
		, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null
		, userId = r.hasId() ? r.getId()!.getValue() : null
		, currentUserB_Id = Validator.CovertToObjectId(currentUserId)
		, userB_Id = Validator.CovertToObjectId(userId)
    ;
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
	] as any).then((result) => {
		if (result && result.ok) {
			console.log('Bulk write operation successful');
			callback(null, new Empty());
		} else {
			throw new Error('Failed to update users');
		}
	});
}

/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function UNFOLLOW_USER(
	call: ServerUnaryCall<UnfollowUserRequest, Empty>,
	callback: sendUnaryData<Empty>
): Promise<void> {

	const r = call.request
		, currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null
		, userId = r.hasId() ? r.getId()!.getValue() : null
		, currentUserB_Id = Validator.CovertToObjectId(currentUserId)
		, userB_Id = Validator.CovertToObjectId(userId)
    ;
	await MongooseUserModel.bulkWrite([
		{
			updateOne: {
				filter: {_id: currentUserB_Id},
				update: {$pull: {following: userB_Id}},
			},
		},
		{
			updateOne: {
				filter: {_id: userB_Id},
				update: {$pull: {followers: currentUserB_Id}},
			},
		},
	] as any).then((result) => {
		if (result && result.ok) {
			console.log('Bulk write operation successful');
			callback(null, new Empty());
		} else {
			throw new Error('Failed to update users');
		}
	});
}