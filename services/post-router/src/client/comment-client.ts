/** @file Handles calls to post related endpoints on grpc client. */

import * as GRPC from '@grpc/grpc-js';
import CommentGrpcModel from '../model/comment-grpc-model';
import {CommentModel as IComment} from '../protos/generated/types/posts_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {StringValue, Int32Value} from 'google-protobuf/google/protobuf/wrappers_pb';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';

const {
   DeleteByObjectId,
   CommentForm,
   GetCommentsRequest,
   VoteCommentRequest,
} = require('../protos/generated/posts_pb');

export default class CommentClient {
   private client: ServiceClient;

   constructor(client: ServiceClient) {
      this.client = client;
   }

   public static getInstance(client: ServiceClient): CommentClient {
      return new CommentClient(client);
   }

   public createComment(
      authorId: string,
      postId: string,
      content: string,
   ): Promise<CommentGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new CommentForm()
            .setAuthorId(new StringValue().setValue(authorId))
            .setContent(new StringValue().setValue(content))
            .setPostId(new StringValue().setValue(postId));

         this.client.createComment(m, (e: GRPC.ServiceError, r: IComment) =>
            e ? reject(e) : resolve(CommentGrpcModel.fromResponse(r)));
      });
   }

   public updateComment(
      authorId: string,
      postId: string,
      content: string,
      commentId: string,
   ): Promise<CommentGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new CommentForm()
            .setAuthorId(new StringValue().setValue(authorId))
            .setContent(new StringValue().setValue(content))
            .setPostId(new StringValue().setValue(postId))
            .setId(new StringValue().setValue(commentId));

         this.client.updateComment(m, (e: GRPC.ServiceError, r: IComment) =>
            e ? reject(e) : resolve(CommentGrpcModel.fromResponse(r)));
      });
   }

   public deleteComment(id: string, authId: string): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new DeleteByObjectId()
            .setId(new StringValue().setValue(id))
            .setUserId(new StringValue().setValue(authId));

         this.client.deleteComment(m, (e: GRPC.ServiceError, r: Empty) =>
            e ? reject(e) : resolve(r));
      });
   }

   public getPostComments(
      postId: string,
      page = 1,
      limit = 10,
   ): Promise<Array<CommentGrpcModel>> {
      return new Promise((resolve, reject) => {
         const m = new GetCommentsRequest()
            .setId(new StringValue().setValue(postId))
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit));

         const $ = this.client.getPostComments(m)
            , arr: CommentGrpcModel[] = [];

         $.on('data', (r: IComment) => arr.push(CommentGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   public upvoteComment(
      commentId: string,
      userId: string,
   ): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new VoteCommentRequest()
            .setId(new StringValue().setValue(commentId))
            .setCurrentUserId(new StringValue().setValue(userId));

         this.client.upvoteComment(m, (e: GRPC.ServiceError, r: Empty) => {
            e ? reject(e) : resolve(r);
         });
      });
   }

   public downvoteComment(
      commentId: string,
      userId: string,
   ): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new VoteCommentRequest()
            .setId(new StringValue().setValue(commentId))
            .setCurrentUserId(new StringValue().setValue(userId));

         this.client.downvoteComment(m, (e: GRPC.ServiceError, r: Empty) =>
            e ? reject(e) : resolve(r));
      });
   }

}