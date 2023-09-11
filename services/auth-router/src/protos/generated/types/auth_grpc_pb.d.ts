// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    auth: IAuthServiceService_IAuth;
    updateUser: IAuthServiceService_IUpdateUser;
    getUser: IAuthServiceService_IGetUser;
    getUsers: IAuthServiceService_IGetUsers;
}

interface IAuthServiceService_IAuth extends grpc.MethodDefinition<auth_pb.AuthRequest, auth_pb.AuthResponse> {
    path: "/auth.AuthService/Auth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AuthRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.AuthRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResponse>;
}
interface IAuthServiceService_IUpdateUser extends grpc.MethodDefinition<auth_pb.AuthRequest, auth_pb.AuthResponse> {
    path: "/auth.AuthService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AuthRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.AuthRequest>;
    responseSerialize: grpc.serialize<auth_pb.AuthResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResponse>;
}
interface IAuthServiceService_IGetUser extends grpc.MethodDefinition<auth_pb.GetUserRequest, auth_pb.UserResponse> {
    path: "/auth.AuthService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<auth_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.UserResponse>;
}
interface IAuthServiceService_IGetUsers extends grpc.MethodDefinition<auth_pb.Pagination, auth_pb.UserResponse> {
    path: "/auth.AuthService/GetUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<auth_pb.Pagination>;
    requestDeserialize: grpc.deserialize<auth_pb.Pagination>;
    responseSerialize: grpc.serialize<auth_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.UserResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    auth: grpc.handleUnaryCall<auth_pb.AuthRequest, auth_pb.AuthResponse>;
    updateUser: grpc.handleUnaryCall<auth_pb.AuthRequest, auth_pb.AuthResponse>;
    getUser: grpc.handleUnaryCall<auth_pb.GetUserRequest, auth_pb.UserResponse>;
    getUsers: grpc.handleServerStreamingCall<auth_pb.Pagination, auth_pb.UserResponse>;
}

export interface IAuthServiceClient {
    auth(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    auth(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    auth(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    getUser(request: auth_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: auth_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: auth_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: auth_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<auth_pb.UserResponse>;
    getUsers(request: auth_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<auth_pb.UserResponse>;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public auth(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public auth(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public auth(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: auth_pb.AuthRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: auth_pb.AuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: auth_pb.AuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: auth_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: auth_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: auth_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: auth_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<auth_pb.UserResponse>;
    public getUsers(request: auth_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<auth_pb.UserResponse>;
}
