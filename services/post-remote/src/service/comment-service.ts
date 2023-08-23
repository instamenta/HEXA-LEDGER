/** @file Controller for handling post-related endpoints. */
import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from '@grpc/grpc-js';
import {IComment} from '../utility/types/base-typesd';
import Validator from '../utility/validator';
import GrpcTools from '../utility/grpc-tools';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {DeleteResult} from 'mongodb';
import MongoosePostModel from '../model/schema/post-schema';
import MongooseCommentModel from '../model/schema/comment-schema';
import {ObjectId} from 'bson';

import {
   CommentForm,
   CommentModel,
   DeleteByObjectId,
   GetCommentsRequest,
   VoteCommentRequest,
} from '../protos/generated/types/posts_pb';

export default class CommentService {

   public static getInstance(): CommentService {
      return new CommentService();
   }

   public async GET_POSTS_COMMENTS(
      call: ServerWritableStream<GetCommentsRequest, CommentModel>
   ): Promise<void> {
      const r = call.request
         , postId = r.hasId() ? r.getId()!.getValue() : null
         , page = r.hasPage() ? r.getPage()!.getValue() : 1
         , limit = r.getLimit() ? r.getLimit()!.getValue() : 5
      ;
      Validator['VALIDATE_ID'](postId);
      Validator['VALIDATE_FILTERS'](page, limit);
      await MongoosePostModel.findById(postId)
         .populate({
            path: 'comments',
            options: {
               skip: (page - 1) * limit,
               limit: limit,
            }
         }).exec().then((p: any) => p?.comments.forEach(
            (c: any) => call.write(GrpcTools.convertCommentModel(c as IComment))));
   }

   public async CREATE_COMMENT(
      call: ServerUnaryCall<CommentForm, CommentModel>,
      callback: sendUnaryData<CommentModel>
   ): Promise<void> {
      const r = call.request
         , authorId = r.hasAuthorId() ? r.getAuthorId()!.getValue() : null
         , postId = r.hasPostId() ? r.getPostId()!.getValue() : null
         , content = r.hasContent() ? r.getContent()!.getValue() : ''
         , authorB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](authorId)
         , postB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](postId);
      const c: IComment = await Validator['VALIDATE_CREATE_COMMENT'](content, authorB_Id, postB_Id);

      await MongoosePostModel.findOneAndUpdate(
         {_id: postB_Id},
         {$push: {comments: c._id}}
      ).catch(async (error) => {
         await MongooseCommentModel.deleteOne({_id: c._id});
         Validator['THROWER'](error, 'Failed to Delete comment after Creation');
      });
      callback(null, GrpcTools.convertCommentModel(c));
   }

   public async UPDATE_COMMENT(
      call: ServerUnaryCall<CommentForm, CommentModel>,
      callback: sendUnaryData<CommentModel>
   ): Promise<void> {
      const r = call.request
         , id = r.hasId() ? r.getId()!.getValue() : null
         , content = r.hasContent() ? r.getContent()!.getValue() : null
         , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id);
      Validator['VALIDATE_COMMENT_DATA'](content);
      const result = await MongooseCommentModel.findByIdAndUpdate(
         {_id}, {$set: {content}}, {new: true})
         .then((c: any) => callback(null, GrpcTools.convertCommentModel(c as IComment)))
         .catch((error) => Validator['THROWER']('ERROR WHILE UPDATING COMMENT: ', error));
   }

   public async DELETE_COMMENT(
      call: ServerUnaryCall<DeleteByObjectId, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , id = r.hasId() ? r.getId()!.getValue() : null
         , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id);
      const result = await MongooseCommentModel.deleteOne({_id}) as DeleteResult;
      (result.deletedCount > 0)
         ? callback(null, new Empty())
         : Validator['THROWER']('ERROR WHILE DELETING USER: COMMENT NOT FOUND');
   }

   public async UPVOTE_COMMENT(
      call: ServerUnaryCall<VoteCommentRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , commentId = r.hasId() ? r.getId()!.getValue() : null
         , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId()!.getValue() : null
         , commentB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](commentId)
         , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId);
      const result = await MongooseCommentModel.aggregate([
         {$match: {_id: commentB_Id}},
         {
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
         Validator['THROWER'](`USER: ${currentUserId} FAILED TO UPVOTE COMMENT: ${commentId}`);
      }
      const {upvotes} = result[0];
      await MongooseCommentModel.updateOne({_id: commentB_Id}, {upvotes});
      callback(null, new Empty());
   }

   public async DOWNVOTE_COMMENT(
      call: ServerUnaryCall<VoteCommentRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      const r = call.request
         , commentId = r.hasId() ? r.getId()!.getValue() : null
         , currentUserId = r.hasCurrentUserId() ? r.getCurrentUserId() : null
         , commentB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](commentId)
         , currentUserB_Id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](currentUserId);
      const result = await MongooseCommentModel.aggregate([
         {$match: {_id: commentB_Id}},
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
         Validator['THROWER'](`USER: ${currentUserId} FAILED TO DOWNVOTE COMMENT: ${commentId}`);
      }
      const {downvotes} = result[0];
      await MongooseCommentModel.updateOne({_id: commentB_Id}, {downvotes});
      callback(null, new Empty());
   }

}
