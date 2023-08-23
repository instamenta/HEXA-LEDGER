/** @file Controller for handling post-related endpoints. */
import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import {IPost} from '../utility/types/base-typesd';
import Validator from '../utility/validator';
import GrpcTools from '../utility/grpc-tools';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {DeleteResult} from 'mongodb';
import MongoosePostModel from '../model/schema/post-schema';
import {ObjectId} from 'bson';
import {
   DeleteByObjectId,
   GetByObjectId,
   GetPostsRequest,
   GetUserPostsRequest,
   PostForm,
   PostModel as IPostModel,
   VotePostRequest
} from '../protos/generated/types/posts_pb';

export default class PostService {

   public static getInstance(): PostService {
      return new PostService();
   }

   public async GET_POSTS(
      call: ServerWritableStream<GetPostsRequest, IPostModel>
   ): Promise<void> {
      const r = call.request
         // , ids = r.getIdsList() ? r.getIdsList().map((id) => id.toString()) : []
         , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
         , page = r.hasPage() ? r.getPage()!.getValue() : 1
         // , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
         // , match = r.hasMatch() ? r.getMatch()!.getValue() : null
         , pipeline = []
      ;
      Validator['VALIDATE_FILTERS'](page, limit);
      pipeline.push(
         {$skip: (page - 1) * limit},
         {$limit: limit}
      );
      await MongoosePostModel.aggregate(pipeline).exec()
         .then((arr) => arr.forEach((p) => call.write(GrpcTools.convertPostModel(p))));
   }

   public async GET_USER_POSTS(
      call: ServerWritableStream<GetUserPostsRequest, IPostModel>
   ): Promise<void> {
      const r = call.request
         , userId = r.hasUserId() ? r.getUserId()!.getValue() : null
         , limit = r.hasLimit() ? r.getLimit()!.getValue() : 5
         , page = r.hasPage() ? r.getPage()!.getValue() : 1
         // , filter = r.hasFilter() ? r.getFilter()!.getValue() : null
         // , match = r.hasMatch() ? r.getMatch()!.getValue() : null
         , pipeline = [];
      Validator['VALIDATE_ID'](userId);
      Validator['VALIDATE_FILTERS'](page, limit);
      pipeline.push(
         {$match: {authorId: userId}},
         {$skip: (page - 1) * limit},
         {$limit: limit}
      );
      await MongoosePostModel.aggregate(pipeline).exec()
         .then((arr) => arr.forEach((p) => call.write(GrpcTools.convertPostModel(p))));
   }

   public async CREATE_POST(
      call: ServerUnaryCall<PostForm, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      const r = call.request
         , title = r.hasTitle() ? r.getTitle()!.getValue() : ''
         , description = r.hasDescription() ? r.getDescription()!.getValue() : ''
         , authorId = r.hasAuthorId() ? r.getAuthorId()!.getValue() : null
         , isPromoted = r.hasIsPromoted() ? r.getIsPromoted()!.getValue() : false
         , pictures = r.getPicturesList().map((pic) => pic.toString())
         , tags = r.getTagsList().map((t) => t.toString())
         , authorB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](authorId);
      const p: IPost = await Validator['VALIDATE_CREATE_POST']({
         author: authorB_Id,
         title: title,
         description: description,
         pictures: pictures,
         isPromoted: isPromoted,
         tags: tags,
      });
      callback(null, GrpcTools.convertPostModel(p));
   }

   public async UPDATE_POST(
      call: ServerUnaryCall<PostForm, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      const r = call.request
         , id = r.hasId() ? r.getId()!.getValue() : null
         , title = r.hasTitle() ? r.getTitle()!.getValue() : ''
         , description = r.hasDescription() ? r.getDescription()!.getValue() : ''
         , isPromoted = r.hasIsPromoted() ? r.getIsPromoted()!.getValue() : false
         , pictures = r.getPicturesList().map((pic) => pic.toString())
         , tags = r.getTagsList().map((t) => t.toString())
         , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id)
         , userId = r.hasAuthId() ? r.getAuthId()!.getValue() : null
      ;
      Validator['VALIDATE_POST_DATA'](title);
      await MongoosePostModel.findByIdAndUpdate(
         {_id},
         {
            $set: {
               title,
               description,
               pictures,
               isPromoted,
               tags
            }
         }).then((p: any) => callback(null, GrpcTools.convertPostModel(p as IPost)))
         .catch((error) => Validator['THROWER']('ERROR WHILE UPDATING POST: ', error));
   }

   public async DELETE_POST(
      call: ServerUnaryCall<DeleteByObjectId, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , id = r.hasId() ? r.getId()!.getValue() : null
         , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id)
         , user_id = r.hasUserId() ? r.getUserId()!.getValue() : null
         , author: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](user_id);
      const result = await MongoosePostModel.deleteOne({_id, author}) as DeleteResult;
      (result.deletedCount > 0)
         ? callback(null, new Empty())
         : Validator['THROWER']('ERROR WHILE DELETING USER: RESOURCE NOT FOUND');
   }

   public async GET_POST_BY_ID(
      call: ServerUnaryCall<GetByObjectId, IPostModel>,
      callback: sendUnaryData<IPostModel>
   ): Promise<void> {
      const r = call.request
         , id = r.hasId() ? r.getId()!.getValue() : null
         , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id);
      const p = <IPost>await MongoosePostModel.findById(_id);
      Validator['VALIDATE_POST'](p);
      callback(null, GrpcTools.convertPostModel(p));
   }

   public async UPVOTE_POST(
      call: ServerUnaryCall<VotePostRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , postId = r.hasId() ? r.getId()!.getValue() : null
         , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null
         , postB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](postId)
         , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId);
      const result = await MongoosePostModel.aggregate([
         {$match: {_id: postB_Id}}, {
            $project: {
               upvotes: {
                  $cond: [
                     {$in: [currentUserB_Id, '$upvotes']},
                     {$setDifference: ['$upvotes', [currentUserB_Id]]},
                     {$concatArrays: ['$upvotes', [currentUserB_Id]]}
                  ]
               }
            }
         },
         {$limit: 1},
         {$project: {upvotes: 1}}
      ]);
      if (result && 'length' in result && result.length === 0) {
         Validator['THROWER'](`USER: ${currentUserId} FAILED TO UPVOTE POST: ${postId}`);
      }
      const {upvotes} = result[0];
      await MongoosePostModel.updateOne({_id: postB_Id}, {upvotes});
      callback(null, new Empty());
   }

   public async DOWNVOTE_POST(
      call: ServerUnaryCall<VotePostRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , postId = r.hasId() ? r.getId()!.getValue() : null
         , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null
         , postB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](postId)
         , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId);
      const result = await MongoosePostModel.aggregate([
         {$match: {_id: postB_Id}},
         {
            $project: {
               downvotes: {
                  $cond: [
                     {$in: [currentUserB_Id, '$downvotes']},
                     {$setDifference: ['$downvotes', [currentUserB_Id]]},
                     '$downvotes'
                  ]
               }
            }
         },
         {$limit: 1},
         {$project: {downvotes: 1}}
      ]);
      if (result && 'length' in result && result.length === 0) {
         Validator['THROWER'](`USER: ${currentUserId} FAILED TO DOWNVOTE POST: ${postId}`);
      }
      const {downvotes} = result[0];
      await MongoosePostModel.updateOne({_id: postB_Id}, {downvotes});
      callback(null, new Empty());
   }
}