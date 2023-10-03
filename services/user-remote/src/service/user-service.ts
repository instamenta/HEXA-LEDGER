/** @file Service handles User related Server Endpoints Methods. */
import {ServerUnaryCall, ServerWritableStream, sendUnaryData} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import MongooseUserModel from '../model/schema/user-schema';
import GrpcTools from '../utility/grpc-tools';
import Validator from '../utility/validator';
import {IUser, IUserDB} from '../utility/types/base-types';
import {BulkWriteResult, ObjectId} from 'mongodb';
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

interface MyBulkWriteOperation {
   updateOne: {
      filter: Record<string, any>;
      update: Record<string, any>;
   };
}

export default class UserService {

   public static getInstance(): UserService {
      return new UserService();
   }

   public GET_USERS(call: ServerWritableStream<GetUsersRequest, IUserModel>): void {
      const limit: number = call.request.hasLimit() ? call.request.getLimit()!.getValue() : 5
         , page: number = call.request.hasPage() ? call.request.getPage()!.getValue() : 1
         , filter: string | null = call.request.hasFilter() ? call.request.getFilter()!.getValue() : null
         , pipeline = []
      ;
      if (filter) pipeline.push({$match: {fieldToFilter: {$regex: filter}}});
      pipeline.push({$skip: (page - 1) * limit}, {$limit: limit});

      MongooseUserModel.aggregate(pipeline).exec()
         .then((userArray: Array<IUser>) => {
            for (let i = 0, len = userArray.length; i < len; i++)
               call.write(GrpcTools.convertUserModel(userArray[i] as IUser));
         });
   }

   public GET_ALL_USERS(call: ServerWritableStream<GetAllUsersRequest, IUserModel>): void {
      const limit: number = call.request.hasLimit() ? call.request.getLimit()!.getValue() : 5
         , page: number = call.request.hasPage() ? call.request.getPage()!.getValue() : 1
      ;
      MongooseUserModel.find().skip((page - 1) * limit).limit(limit)
         .then((userArr: Array<IUser>) => {
            for (let i = 0, len = userArr.length; i < len; i++)
               call.write(GrpcTools.convertUserModel(userArr[i] as IUser));
         });
   }

   public async GET_USER_BY_ID(
      call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): Promise<void> {
      const u = <IUser>await MongooseUserModel.findById(call.request.hasId() ? call.request.getId()!.getValue() : null);
      Validator['VALIDATE_USER'](u);
      callback(null, GrpcTools.convertUserModel(u as IUser));
   }

   public async GET_USER_FOLLOWERS(call: ServerWritableStream<GetUserFollowersRequest, IUserModel>): Promise<void> {
      const id: string | null = call.request.hasId() ? call.request.getId()!.getValue() : null
         , page: number = call.request.hasPage() ? call.request.getPage()!.getValue() : 1
         , limit: number = call.request.getLimit() ? call.request.getLimit()!.getValue() : 5
      ;
      Validator['VALIDATE_ID'](id);
      Validator['VALIDATE_FILTERS'](page, limit);
      const u: IUserDB | any = await MongooseUserModel.findById(id);

      if (!u) Validator['THROWER'](`Invalid user._id : ${id}`);

      MongooseUserModel.find({_id: {$in: u.following}}).skip(page).limit(limit)
         .then((userArr: Array<IUser>) => {
            for (let i = 0, len = userArr.length; i < len; i++)
               call.write(GrpcTools.convertUserModel(userArr[i] as IUser));
         });
   }

   public async GET_USER_FOLLOWING(call: ServerWritableStream<GetUserFollowingRequest, IUserModel>): Promise<void> {
      const id = call.request.hasId() ? call.request.getId()!.getValue() : null
         , page = call.request.hasPage() ? call.request.getPage()!.getValue() : 1
         , limit = call.request.getLimit() ? call.request.getLimit()!.getValue() : 5
      ;
      Validator['VALIDATE_ID'](id);
      Validator['VALIDATE_FILTERS'](page, limit);
      const u = <IUser>await MongooseUserModel.findById(id);
      if (!u) Validator['THROWER'](`Invalid user._id : ${id}`);

      MongooseUserModel.find({_id: {$in: u.following}}).skip(page).limit(limit)
         .then((userArr: Array<IUser>) => {
            for (let i = 0, len = userArr.length; i < len; i++)
               call.write(GrpcTools.convertUserModel(userArr[i] as IUser));
         });
   }


   public async FOLLOW_USER(
      call: ServerUnaryCall<FollowUserRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const currentUserId: ObjectId = Validator['CONVERT_TO_OBJECT_ID']
         (call.request.hasCurrentUserId() ? call.request.getCurrentUserId()!.getValue() : null)

         , userId: ObjectId = Validator['CONVERT_TO_OBJECT_ID']
         (call.request.hasId() ? call.request.getId()!.getValue() : null)
      ;
      if (userId === currentUserId) {
         Validator['THROWER']('Users _id\'s are equal');
      }
      if (await MongooseUserModel.exists({
         _id: currentUserId,
         following: {$in: [userId]}
      })) {
         Validator['THROWER']('Users is already follower');
      }
      MongooseUserModel.bulkWrite<BulkWriteResult>(
         <Array<MyBulkWriteOperation>>[{
            updateOne: {
               filter: {_id: currentUserId},
               update: {$addToSet: {following: userId}},
            }
         }, {
            updateOne: {
               filter: {_id: userId},
               update: {$addToSet: {followers: currentUserId}},
            }
         }]).then((result) => (result && result.ok)
         ? callback(null, new Empty())
         : Validator['THROWER']('Failed to update users')
      );
   }

   public async UNFOLLOW_USER(
      call: ServerUnaryCall<UnfollowUserRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const currentUserId: ObjectId = Validator['CONVERT_TO_OBJECT_ID']
         (call.request.hasCurrentUserId() ? call.request.getCurrentUserId()!.getValue() : null)

         , userId: ObjectId = Validator['CONVERT_TO_OBJECT_ID']
         (call.request.hasId() ? call.request.getId()!.getValue() : null)
      ;
      if (userId === currentUserId) Validator['THROWER']('Users _id\'s are equal');

      if (!await MongooseUserModel.exists({_id: currentUserId, following: {$in: [userId]}}))
         Validator['THROWER']('Users is not follower');

      MongooseUserModel.bulkWrite<BulkWriteResult>(
         <Array<MyBulkWriteOperation>>[{
            updateOne: {
               filter: {_id: currentUserId},
               update: {$pull: {following: userId}}
            }
         }, {
            updateOne: {
               filter: {_id: userId},
               update: {$pull: {followers: currentUserId}}
            }
         }]).then((result) => (result && result.ok)
         ? callback(null, new Empty())
         : Validator['THROWER']('Failed to update users')
      );
   }
}


