/** @file Handles calls to post related endpoints on groc client. */
import * as GRPC from '@grpc/grpc-js';
import PostGrpcModel from '../model/post-grpc-model';
import {PostModel as IPostModel} from '../protos/generated/types/posts_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {StringValue, Int32Value, BoolValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';

const {
   PostForm,
   DeleteByObjectId,
   GetByObjectId,
   GetPostsRequest,
   GetUserPostsRequest,
   VotePostRequest,
} = require('../protos/generated/posts_pb');

export default class PostClient {

   private client: ServiceClient;

   constructor(client: ServiceClient) {
      this.client = client;
   }

   public static getInstance(client: ServiceClient): PostClient {
      return new PostClient(client);
   }

   public createPost(
      title = '',
      description = '',
      authorId = '',
      pictures: Array<string> = [],
      isPromoted = false,
      tags: Array<string> = [],
   ): Promise<PostGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new PostForm()
            .setTitle(new StringValue().setValue(title))
            .setDescription(new StringValue().setValue(description))
            .setAuthorId(new StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)))
            .setIsPromoted(new BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new StringValue().setValue(tag)));

         this.client.createPost(m, (e: GRPC.ServiceError, r: IPostModel) =>
            e ? reject(e) : resolve(PostGrpcModel.fromResponse(r)));
      });
   }

   public updatePost(
      id = '',
      title = '',
      description = '',
      authorId = '',
      pictures: Array<string> = [],
      isPromoted = false,
      tags: Array<string> = [],
      authId: string,
   ): Promise<PostGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new PostForm()
            .setId(new StringValue().setValue(id))
            .setTitle(new StringValue().setValue(title))
            .setDescription(new StringValue().setValue(description))
            .setAuthorId(new StringValue().setValue(authorId))
            .setPicturesList(pictures.map((pic) => new StringValue().setValue(pic)))
            .setIsPromoted(new BoolValue().setValue(isPromoted))
            .setTagsList(tags.map((tag) => new StringValue().setValue(tag)))
            .setAuthId(new StringValue().setValue(authId));

         this.client.updatePost(m, (e: GRPC.ServiceError, r: IPostModel) =>
            e ? reject(e) : resolve(PostGrpcModel.fromResponse(r)));
      });
   }

   public deletePost(
      id: string,
      authId: string,
   ): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new DeleteByObjectId()
            .setId(new StringValue().setValue(id))
            .setUserId(new StringValue().setValue(authId));

         this.client.deletePost(m, (e: GRPC.ServiceError, r: Empty) => {
            e ? reject(e) : resolve(r);
         });
      });
   }

   public getPostById(
      id: string,
   ): Promise<PostGrpcModel> {
      return new Promise((resolve, reject) => {
         console.log(id);
         const m = new GetByObjectId()
            .setId(new StringValue().setValue(id));

         this.client.getPostById(m, (e: GRPC.ServiceError, r: IPostModel) =>
            e ? reject(e) : resolve(PostGrpcModel.fromResponse(r)));
      });
   }

   public getPosts(
      ids: Array<string> = [],
      limit = 5,
      page = 1,
      filter = '',
      match = '',
   ): Promise<Array<PostGrpcModel>> {
      return new Promise((resolve, reject) => {
         const m = new GetPostsRequest()
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit))
            .setIdsList(ids.map((id) => new StringValue().setValue(id)))
            .setFilter(new StringValue().setValue(filter))
            .setMatch(new StringValue().setValue(match));

         const $ = this.client.getPosts(m);
         const arr: PostGrpcModel[] = [];

         $.on('data', (r: IPostModel) => arr.push(PostGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   public getUserPosts(
      userId: string,
      limit = 10,
      page = 1,
      filter = '',
      match = '',
   ): Promise<Array<PostGrpcModel>> {
      return new Promise((resolve, reject) => {
         const m = new GetUserPostsRequest()
            .setUserId(new StringValue())
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit))
            .setFilter(new StringValue().setValue(filter))
            .setMatch(new StringValue().setValue(match));

         const $ = this.client.getUserPosts(m);
         const arr: PostGrpcModel[] = [];

         $.on('data', (r: IPostModel) => arr.push(PostGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   public upvotePost(
      postId: string,
      userId: string,
   ): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new VotePostRequest()
            .setId(new StringValue().setValue(postId))
            .setCurrentUserId(new StringValue().setValue(userId));

         this.client.upvotePost(m, (e: GRPC.ServiceError, r: Empty) =>
            e ? reject(e) : resolve(r));
      });
   }

   public downvotePost(
      postId: string,
      userId: string,
   ): Promise<Empty> {
      return new Promise((resolve, reject) => {
         const m = new VotePostRequest()
            .setId(new StringValue().setValue(postId))
            .setCurrentUserId(new StringValue().setValue(userId));

         this.client.downvotePost(m, (e: GRPC.ServiceError, r: Empty) =>
            e ? reject(e) : resolve(r));
      });
   }

}

