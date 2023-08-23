/** @file Used to wrap service in try catch to avoid unwanted nesting in Services. */
import {ServerUnaryCall, ServerWritableStream, sendUnaryData} from '@grpc/grpc-js';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {IError} from '../utility/types/base-types';
import {
   FollowUserRequest,
   GetAllUsersRequest,
   GetUserByIdRequest,
   GetUserFollowersRequest,
   GetUserFollowingRequest, GetUsersRequest,
   LoginForm as ILoginForm, RegisterForm as IRegisterForm,
   UserModel as IUserModel, UnfollowUserRequest, UpdateForm, idRequest,
} from '../protos/generated/types/users_pb';

import {IVlog, VLogger} from '@instamenta/vlogger';
import AuthService from './auth-service';
import UserService from './user-service';

export default class Wrapper {

   vlog: IVlog;
   authService: AuthService;
   userService: UserService;

   constructor(logger: VLogger, authService: AuthService, userService: UserService) {
      this.vlog = logger.getVlog('Wrapper');
      this.authService = authService;
      this.userService = userService;
   }

   public static getInstance(logger: VLogger, authService: AuthService, userService: UserService): Wrapper {
      return new Wrapper(logger, authService, userService);
   }

   /**
    * Handles the login request
    * ( takes email $ password ).
    * @param call - The gRPC call object for the login request.
    * @param callback - The callback function to send the login response.
    * @async
    * @throws - Emits an error if the input is invalid.
    */
   public async login(
      call: ServerUnaryCall<ILoginForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling login'});
         await this.authService.LOGIN(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'login'});
      }
   }

   /**
    * Handles the registration request
    * ( takes username , password & e-mail.
    * @param call - The gRPC call object for the registration request.
    * @param callback - The callback function to send the registration response.
    * @async
    * @throws - Emits an error if the input is invalid.
    */
   public register(
      call: ServerUnaryCall<IRegisterForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): void {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling register'});
         this.authService.REGISTER(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'register'});
      }
   }

   /**
    * Handles the registration request
    * ( takes username , password & e-mail.
    * @param call - The gRPC call object for the registration request.
    * @param callback - The callback  to send the registration response.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public deleteUserById(
      call: ServerUnaryCall<idRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): void {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling deleteUserById'});
         this.authService.DELETE_USER_BY_ID(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'deleteUserById'});
      }
   }

   /**
    * Handles the registration request
    * ( takes username , password & e-mail.
    * @param call - The gRPC call object for the registration request.
    * @param callback - The callback  to send the registration response.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public updateUserById(
      call: ServerUnaryCall<UpdateForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): void {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling updateUserById'});
         this.authService.UPDATE_USER_BY_ID(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'updateUserById'});
      }
   }

   /**
    * Retrieves a list of users based on the specified criteria.
    * ( optionally page & limit ).
    * @param call - The call object for the gRPC writable stream.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public getUsers(
      call: ServerWritableStream<GetUsersRequest, IUserModel>,
   ): void {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getUsers'});
         this.userService.GET_USERS(call);
         call.end();
      } catch (e: IError) {
         call.emit(e);
         this.vlog.error({e, func: 'getUsers'});
      }
   }

   /**
    * Retrieves all users.
    * ( takes optionally page & limit ).
    * @param call - The call object for the gRPC writable stream.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public getAllUsers(
      call: ServerWritableStream<GetAllUsersRequest, IUserModel>,
   ): void {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getAllUsers'});
         this.userService.GET_ALL_USERS(call);
         call.end();
      } catch (e: IError) {
         call.emit(e);
         this.vlog.error({e, func: 'getAllUsers'});
      }
   }

   /**
    * Retrieves a user by their ID.
    * ( takes user _id ).
    * @param call - The call object for the gRPC writable stream.
    * @param callback - The callback  to send the response.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public async getUserById(
      call: ServerUnaryCall<GetUserByIdRequest, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getUserById'});
         await this.userService.GET_USER_BY_ID(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'getUserById'});
      }
   }


   /**
    * Retrieves the followers of a user.
    * ( takes _id, and optionally page & limit ).
    * @param call - The call object for the gRPC writable stream.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public async getUserFollowers(
      call: ServerWritableStream<GetUserFollowersRequest, IUserModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getUserFollowers'});
         await this.userService.GET_USER_FOLLOWERS(call);
         call.end();
      } catch (e: IError) {
         call.emit(e);
         this.vlog.error({e, func: 'getUserFollowers'});
      }
   }

   /**
    * Retrieves the users that a user is following
    * ( takes _id, and optionally page & limit ).
    * @param call - The call object for the gRPC writable stream.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public async getUserFollowing(
      call: ServerWritableStream<GetUserFollowingRequest, IUserModel>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling getUserFollowing'});
         await this.userService.GET_USER_FOLLOWING(call);
         call.end();
      } catch (e: IError) {
         call.emit(e);
         this.vlog.error({e, func: 'getUserFollowing'});
      }
   }

   /**
    * Follows a user ( takes 2 user _id's current and target ).
    * @param call - The call object for the gRPC writable stream.
    * @param callback - The callback  to send the response.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public async followUser(
      call: ServerUnaryCall<FollowUserRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling followUser'});
         await this.userService.FOLLOW_USER(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'followUser'});
      }
   }

   /**
    * Unfollows a user ( takes 2 user _id's current and target ).
    * @param call - The call object for the gRPC writable stream.
    * @param callback - The callback  to send the response.
    * @async
    * @throws - Emits an e if the input is invalid.
    */
   public async unfollowUser(
      call: ServerUnaryCall<UnfollowUserRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         this.vlog.warn({data: () => call.request.toObject(), msg: 'Calling unfollowUser'});
         await this.userService.UNFOLLOW_USER(call, callback);
      } catch (e: IError) {
         callback(e);
         this.vlog.error({e, func: 'unfollowUser'});
      }
   }
}

