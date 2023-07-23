// package: user
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IUserServiceService_ILogin;
    register: IUserServiceService_IRegister;
    getUserById: IUserServiceService_IGetUserById;
    followUser: IUserServiceService_IFollowUser;
    unfollowUser: IUserServiceService_IUnfollowUser;
    getUsers: IUserServiceService_IGetUsers;
    getAllUsers: IUserServiceService_IGetAllUsers;
    getUserFollowers: IUserServiceService_IGetUserFollowers;
    getUserFollowing: IUserServiceService_IGetUserFollowing;
}

interface IUserServiceService_ILogin extends grpc.MethodDefinition<users_pb.LoginForm, users_pb.UserModel> {
    path: "/user.UserService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.LoginForm>;
    requestDeserialize: grpc.deserialize<users_pb.LoginForm>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IRegister extends grpc.MethodDefinition<users_pb.RegisterForm, users_pb.UserModel> {
    path: "/user.UserService/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.RegisterForm>;
    requestDeserialize: grpc.deserialize<users_pb.RegisterForm>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IGetUserById extends grpc.MethodDefinition<users_pb.GetUserByIdRequest, users_pb.UserModel> {
    path: "/user.UserService/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetUserByIdRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUserByIdRequest>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IFollowUser extends grpc.MethodDefinition<users_pb.FollowUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/user.UserService/FollowUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.FollowUserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.FollowUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUserServiceService_IUnfollowUser extends grpc.MethodDefinition<users_pb.UnfollowUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/user.UserService/UnfollowUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.UnfollowUserRequest>;
    requestDeserialize: grpc.deserialize<users_pb.UnfollowUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<users_pb.GetUsersRequest, users_pb.UserModel> {
    path: "/user.UserService/GetUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IGetAllUsers extends grpc.MethodDefinition<users_pb.GetAllUsersRequest, users_pb.UserModel> {
    path: "/user.UserService/GetAllUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.GetAllUsersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetAllUsersRequest>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IGetUserFollowers extends grpc.MethodDefinition<users_pb.GetUserFollowersRequest, users_pb.UserModel> {
    path: "/user.UserService/GetUserFollowers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.GetUserFollowersRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUserFollowersRequest>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}
interface IUserServiceService_IGetUserFollowing extends grpc.MethodDefinition<users_pb.GetUserFollowingRequest, users_pb.UserModel> {
    path: "/user.UserService/GetUserFollowing";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.GetUserFollowingRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUserFollowingRequest>;
    responseSerialize: grpc.serialize<users_pb.UserModel>;
    responseDeserialize: grpc.deserialize<users_pb.UserModel>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    login: grpc.handleUnaryCall<users_pb.LoginForm, users_pb.UserModel>;
    register: grpc.handleUnaryCall<users_pb.RegisterForm, users_pb.UserModel>;
    getUserById: grpc.handleUnaryCall<users_pb.GetUserByIdRequest, users_pb.UserModel>;
    followUser: grpc.handleUnaryCall<users_pb.FollowUserRequest, google_protobuf_empty_pb.Empty>;
    unfollowUser: grpc.handleUnaryCall<users_pb.UnfollowUserRequest, google_protobuf_empty_pb.Empty>;
    getUsers: grpc.handleServerStreamingCall<users_pb.GetUsersRequest, users_pb.UserModel>;
    getAllUsers: grpc.handleServerStreamingCall<users_pb.GetAllUsersRequest, users_pb.UserModel>;
    getUserFollowers: grpc.handleServerStreamingCall<users_pb.GetUserFollowersRequest, users_pb.UserModel>;
    getUserFollowing: grpc.handleServerStreamingCall<users_pb.GetUserFollowingRequest, users_pb.UserModel>;
}

export interface IUserServiceClient {
    login(request: users_pb.LoginForm, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    login(request: users_pb.LoginForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    login(request: users_pb.LoginForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    register(request: users_pb.RegisterForm, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    register(request: users_pb.RegisterForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    register(request: users_pb.RegisterForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    getUserById(request: users_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    getUserById(request: users_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    getUserById(request: users_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    followUser(request: users_pb.FollowUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    followUser(request: users_pb.FollowUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    followUser(request: users_pb.FollowUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowUser(request: users_pb.UnfollowUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowUser(request: users_pb.UnfollowUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowUser(request: users_pb.UnfollowUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getUsers(request: users_pb.GetUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getUsers(request: users_pb.GetUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getAllUsers(request: users_pb.GetAllUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getAllUsers(request: users_pb.GetAllUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getUserFollowers(request: users_pb.GetUserFollowersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getUserFollowers(request: users_pb.GetUserFollowersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getUserFollowing(request: users_pb.GetUserFollowingRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    getUserFollowing(request: users_pb.GetUserFollowingRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: users_pb.LoginForm, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public login(request: users_pb.LoginForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public login(request: users_pb.LoginForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public register(request: users_pb.RegisterForm, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public register(request: users_pb.RegisterForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public register(request: users_pb.RegisterForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public getUserById(request: users_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public getUserById(request: users_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public getUserById(request: users_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserModel) => void): grpc.ClientUnaryCall;
    public followUser(request: users_pb.FollowUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public followUser(request: users_pb.FollowUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public followUser(request: users_pb.FollowUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowUser(request: users_pb.UnfollowUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowUser(request: users_pb.UnfollowUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowUser(request: users_pb.UnfollowUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getUsers(request: users_pb.GetUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getUsers(request: users_pb.GetUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getAllUsers(request: users_pb.GetAllUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getAllUsers(request: users_pb.GetAllUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getUserFollowers(request: users_pb.GetUserFollowersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getUserFollowers(request: users_pb.GetUserFollowersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getUserFollowing(request: users_pb.GetUserFollowingRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
    public getUserFollowing(request: users_pb.GetUserFollowingRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.UserModel>;
}
