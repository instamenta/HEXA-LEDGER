// package: threads
// file: threads.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as threads_pb from "./threads_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IThreadsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IThreadsService_ICreate;
    update: IThreadsService_IUpdate;
    delete: IThreadsService_IDelete;
    getMany: IThreadsService_IGetMany;
    getTotalCount: IThreadsService_IGetTotalCount;
    getByOwner: IThreadsService_IGetByOwner;
    getOne: IThreadsService_IGetOne;
    getStatistics: IThreadsService_IGetStatistics;
    getLikes: IThreadsService_IGetLikes;
    getDislikes: IThreadsService_IGetDislikes;
    like: IThreadsService_ILike;
    dislike: IThreadsService_IDislike;
    donate: IThreadsService_IDonate;
    promote: IThreadsService_IPromote;
}

interface IThreadsService_ICreate extends grpc.MethodDefinition<threads_pb.CreateRequest, threads_pb.ThreadModel> {
    path: "/threads.Threads/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.CreateRequest>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IUpdate extends grpc.MethodDefinition<threads_pb.ThreadModel, threads_pb.ThreadModel> {
    path: "/threads.Threads/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.ThreadModel>;
    requestDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IDelete extends grpc.MethodDefinition<threads_pb.IdRequest, threads_pb.ThreadModel> {
    path: "/threads.Threads/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.IdRequest>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IGetMany extends grpc.MethodDefinition<threads_pb.Pagination, threads_pb.ThreadModel> {
    path: "/threads.Threads/GetMany";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<threads_pb.Pagination>;
    requestDeserialize: grpc.deserialize<threads_pb.Pagination>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IGetTotalCount extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_wrappers_pb.Int32Value> {
    path: "/threads.Threads/GetTotalCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.Int32Value>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.Int32Value>;
}
interface IThreadsService_IGetByOwner extends grpc.MethodDefinition<threads_pb.IdRequest, threads_pb.ThreadModel> {
    path: "/threads.Threads/GetByOwner";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<threads_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.IdRequest>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IGetOne extends grpc.MethodDefinition<threads_pb.IdRequest, threads_pb.ThreadModel> {
    path: "/threads.Threads/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.IdRequest>;
    responseSerialize: grpc.serialize<threads_pb.ThreadModel>;
    responseDeserialize: grpc.deserialize<threads_pb.ThreadModel>;
}
interface IThreadsService_IGetStatistics extends grpc.MethodDefinition<threads_pb.Pagination, threads_pb.StatsModel> {
    path: "/threads.Threads/GetStatistics";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<threads_pb.Pagination>;
    requestDeserialize: grpc.deserialize<threads_pb.Pagination>;
    responseSerialize: grpc.serialize<threads_pb.StatsModel>;
    responseDeserialize: grpc.deserialize<threads_pb.StatsModel>;
}
interface IThreadsService_IGetLikes extends grpc.MethodDefinition<threads_pb.IdRequest, google_protobuf_wrappers_pb.Int32Value> {
    path: "/threads.Threads/GetLikes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.IdRequest>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.Int32Value>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.Int32Value>;
}
interface IThreadsService_IGetDislikes extends grpc.MethodDefinition<threads_pb.IdRequest, google_protobuf_wrappers_pb.Int32Value> {
    path: "/threads.Threads/GetDislikes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.IdRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.IdRequest>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.Int32Value>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.Int32Value>;
}
interface IThreadsService_ILike extends grpc.MethodDefinition<threads_pb.WalletWithAuthRequest, google_protobuf_empty_pb.Empty> {
    path: "/threads.Threads/Like";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.WalletWithAuthRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.WalletWithAuthRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IThreadsService_IDislike extends grpc.MethodDefinition<threads_pb.WalletWithAuthRequest, google_protobuf_empty_pb.Empty> {
    path: "/threads.Threads/Dislike";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.WalletWithAuthRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.WalletWithAuthRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IThreadsService_IDonate extends grpc.MethodDefinition<threads_pb.AmountWithAuthRequest, google_protobuf_empty_pb.Empty> {
    path: "/threads.Threads/Donate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.AmountWithAuthRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.AmountWithAuthRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IThreadsService_IPromote extends grpc.MethodDefinition<threads_pb.AmountWithAuthRequest, google_protobuf_empty_pb.Empty> {
    path: "/threads.Threads/Promote";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<threads_pb.AmountWithAuthRequest>;
    requestDeserialize: grpc.deserialize<threads_pb.AmountWithAuthRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ThreadsService: IThreadsService;

export interface IThreadsServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<threads_pb.CreateRequest, threads_pb.ThreadModel>;
    update: grpc.handleUnaryCall<threads_pb.ThreadModel, threads_pb.ThreadModel>;
    delete: grpc.handleUnaryCall<threads_pb.IdRequest, threads_pb.ThreadModel>;
    getMany: grpc.handleServerStreamingCall<threads_pb.Pagination, threads_pb.ThreadModel>;
    getTotalCount: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_wrappers_pb.Int32Value>;
    getByOwner: grpc.handleServerStreamingCall<threads_pb.IdRequest, threads_pb.ThreadModel>;
    getOne: grpc.handleUnaryCall<threads_pb.IdRequest, threads_pb.ThreadModel>;
    getStatistics: grpc.handleServerStreamingCall<threads_pb.Pagination, threads_pb.StatsModel>;
    getLikes: grpc.handleUnaryCall<threads_pb.IdRequest, google_protobuf_wrappers_pb.Int32Value>;
    getDislikes: grpc.handleUnaryCall<threads_pb.IdRequest, google_protobuf_wrappers_pb.Int32Value>;
    like: grpc.handleUnaryCall<threads_pb.WalletWithAuthRequest, google_protobuf_empty_pb.Empty>;
    dislike: grpc.handleUnaryCall<threads_pb.WalletWithAuthRequest, google_protobuf_empty_pb.Empty>;
    donate: grpc.handleUnaryCall<threads_pb.AmountWithAuthRequest, google_protobuf_empty_pb.Empty>;
    promote: grpc.handleUnaryCall<threads_pb.AmountWithAuthRequest, google_protobuf_empty_pb.Empty>;
}

export interface IThreadsClient {
    create(request: threads_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    create(request: threads_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    create(request: threads_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    update(request: threads_pb.ThreadModel, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    update(request: threads_pb.ThreadModel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    update(request: threads_pb.ThreadModel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    delete(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    delete(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    delete(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    getMany(request: threads_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    getMany(request: threads_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    getTotalCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getTotalCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getTotalCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getByOwner(request: threads_pb.IdRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    getByOwner(request: threads_pb.IdRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    getOne(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    getOne(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    getOne(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    getStatistics(request: threads_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.StatsModel>;
    getStatistics(request: threads_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.StatsModel>;
    getLikes(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getLikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getLikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getDislikes(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getDislikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    getDislikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    like(request: threads_pb.WalletWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    like(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    like(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dislike(request: threads_pb.WalletWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dislike(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    dislike(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    donate(request: threads_pb.AmountWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    donate(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    donate(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    promote(request: threads_pb.AmountWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    promote(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    promote(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ThreadsClient extends grpc.Client implements IThreadsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: threads_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public create(request: threads_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public create(request: threads_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public update(request: threads_pb.ThreadModel, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public update(request: threads_pb.ThreadModel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public update(request: threads_pb.ThreadModel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public delete(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public delete(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public delete(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public getMany(request: threads_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    public getMany(request: threads_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    public getTotalCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getTotalCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getTotalCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getByOwner(request: threads_pb.IdRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    public getByOwner(request: threads_pb.IdRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.ThreadModel>;
    public getOne(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public getOne(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public getOne(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: threads_pb.ThreadModel) => void): grpc.ClientUnaryCall;
    public getStatistics(request: threads_pb.Pagination, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.StatsModel>;
    public getStatistics(request: threads_pb.Pagination, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<threads_pb.StatsModel>;
    public getLikes(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getLikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getLikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getDislikes(request: threads_pb.IdRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getDislikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public getDislikes(request: threads_pb.IdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.Int32Value) => void): grpc.ClientUnaryCall;
    public like(request: threads_pb.WalletWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public like(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public like(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dislike(request: threads_pb.WalletWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dislike(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public dislike(request: threads_pb.WalletWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public donate(request: threads_pb.AmountWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public donate(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public donate(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public promote(request: threads_pb.AmountWithAuthRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public promote(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public promote(request: threads_pb.AmountWithAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
