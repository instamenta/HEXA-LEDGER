/** @file Grpc client used for calling to the client's endpoints. */
import * as GRPC from '@grpc/grpc-js';
import GRPC_CLIENT from './grpc-client';
import {UserModel as IUserModel} from '../protos/generated/types/users_pb';
import {StringValue, Int32Value} from 'google-protobuf/google/protobuf/wrappers_pb';
import UserGrpcModel from '../model/user-grpc-model';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';

const {
   GetUsersRequest,
   GetAllUsersRequest,
   GetUserByIdRequest,
   GetUserFollowersRequest,
   GetUserFollowingRequest,
   FollowUserRequest,
   UnfollowUserRequest,
} = require('../protos/generated/users_pb');


export default class UserClient {

   private client: ServiceClient;

   constructor(client: ServiceClient) {
      this.client = client;
   }

   public static getInstance(client: ServiceClient): UserClient {
      return new UserClient(client);
   }

   /**
    * @param page
    * @param limit
    * @param filter
    * @returns
    */
   public getUsers(
      page = 1,
      limit = 5,
      filter?: string,
   ): Promise<UserGrpcModel[]> {
      return new Promise((resolve, reject) => {
         const m = new GetUsersRequest()
            .setLimit(new Int32Value().setValue(limit))
            .setPage(new Int32Value().setValue(page));

         if (filter) m.setFilter(new StringValue().setValue(filter));

         const arr: UserGrpcModel[] = [];
         const $ = this.client.getUsers(m);

         $.on('data', (r: IUserModel) => arr.push(UserGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   /**
    * @param page
    * @param limit
    * @returns
    */
   public getAllUsers(page = 1, limit = 5): Promise<UserGrpcModel[]> {
      return new Promise((resolve, reject) => {
         const m = new GetAllUsersRequest()
            .setLimit(new Int32Value().setValue(limit))
            .setPage(new Int32Value().setValue(page));

         const arr: UserGrpcModel[] = [];
         const $ = this.client.getAllUsers(m);

         $.on('data', (r: IUserModel) => arr.push(UserGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }


   /**
    * @param id
    * @returns
    */
   public getUserById(id: string): Promise<UserGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new GetUserByIdRequest()
            .setId(new StringValue().setValue(id));

         this.client.getUserById(m, (e: GRPC.ServiceError, r: IUserModel) =>
            e ? reject(e) : resolve(UserGrpcModel.fromResponse(r)));
      });
   }

   /**
    * @param id
    * @param page
    * @param limit
    * @returns
    */
   public getUserFollowers(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
      return new Promise((resolve, reject) => {
         const m = new GetUserFollowersRequest()
            .setId(new StringValue().setValue(id))
            .setPage(new Int32Value().setValue(page))
            .setLimit(new Int32Value().setValue(limit));

         const arr: UserGrpcModel[] = [];
         const $ = this.client.getUserFollowers(m);

         $.on('data', (r: IUserModel) => arr.push(UserGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   /**
    * @param id
    * @param page
    * @param limit
    * @returns
    */
   public getUserFollowing(id: string, page = 1, limit = 5): Promise<UserGrpcModel[]> {
      return new Promise((resolve, reject) => {
         const m = new GetUserFollowingRequest();
         m.setId(new StringValue().setValue(id));
         m.setPage(new Int32Value().setValue(page));
         m.setLimit(new Int32Value().setValue(limit));

         const arr: UserGrpcModel[] = [];
         const $ = this.client.getUserFollowing(m);

         $.on('data', (r: IUserModel) => arr.push(UserGrpcModel.fromResponse(r)));
         $.on('error', (e: GRPC.ServiceError) => reject(e));
         $.on('end', () => resolve(arr));
      });
   }

   /**
    * @param currentUserId
    * @param id
    * @returns
    */
   public followUser(currentUserId: string, id: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
         const m = new FollowUserRequest();
         m.setId(new StringValue().setValue(id));
         m.setCurrentUserId(new StringValue().setValue(currentUserId));

         this.client.followUser(m, (e: GRPC.ServiceError) =>
            e ? reject(e.message) : resolve(true));
      });
   }

   /**
    * @param currentUserId
    * @param id
    * @returns
    */
   public unfollowUser(currentUserId: string, id: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
         const m = new UnfollowUserRequest()
            .setId(new StringValue().setValue(id))
            .setCurrentUserId(new StringValue().setValue(currentUserId));

         this.client.unfollowUser(m, (e: GRPC.ServiceError) =>
            e ? reject(e) : resolve(true));
      });
   }


}

//
// Function getUserPosts(id: string): Promise<PostClass[]> {
//     Return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         Const m = new GetUserPostsRequest();
//         M.setId(new StringValue().setValue(id));
//
//         Const posts: PostClass[] = [];
//
//         Const $ = this.client.getUserPosts(m);
//
//         // Handle the $ events
//         $.on("data", (res: PostModel) => {
//             Const post = PostClass.fromPostGRPCMessage(res);
//             Posts.push(post);
//         });
//
//         $.on("error", (err: GRPC.ServiceError) => {
//             Reject(err.message);
//         });
//
//         $.on("end", () => {
//             Resolve(posts);
//         });
//     });
// }
//
// Function getUserComments(id: string): Promise<CommentClass[]> {
//     Return new Promise((resolve, reject) => {
//         // Create a gRPC request message
//         Const m = new GetUserCommentsRequest();
//         M.setId(new StringValue().setValue(id));
//
//         Const comments: CommentClass[] = [];
//
//         Const $ = this.client.getUserComments(m);
//
//         // Handle the $ events
//         $.on("data", (res: CommentModel) => {
//             Const comment = CommentClass.fromCommentGRPCMessage(res);
//             Comments.push(comment);
//         });
//
//         $.on("error", (err: GRPC.ServiceError) => {
//             Reject(err.message);
//         });
//
//         $.on("end", () => {
//             Resolve(comments);
//         });
//     });
// }
