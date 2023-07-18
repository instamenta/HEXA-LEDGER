// package: post
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as posts_pb from "./posts_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IPostServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IPostServiceService_ICreatePost;
    updatePost: IPostServiceService_IUpdatePost;
    deletePost: IPostServiceService_IDeletePost;
    createComment: IPostServiceService_ICreateComment;
    updateComment: IPostServiceService_IUpdateComment;
    deleteComment: IPostServiceService_IDeleteComment;
    getPostById: IPostServiceService_IGetPostById;
    getPost: IPostServiceService_IGetPost;
    getPostComments: IPostServiceService_IGetPostComments;
    getUserPosts: IPostServiceService_IGetUserPosts;
    upvotePost: IPostServiceService_IUpvotePost;
    downvotePost: IPostServiceService_IDownvotePost;
    upvoteComment: IPostServiceService_IUpvoteComment;
    downvoteComment: IPostServiceService_IDownvoteComment;
}

interface IPostServiceService_ICreatePost extends grpc.MethodDefinition<posts_pb.PostForm, posts_pb.PostModel> {
    path: "/post.PostService/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.PostForm>;
    requestDeserialize: grpc.deserialize<posts_pb.PostForm>;
    responseSerialize: grpc.serialize<posts_pb.PostModel>;
    responseDeserialize: grpc.deserialize<posts_pb.PostModel>;
}
interface IPostServiceService_IUpdatePost extends grpc.MethodDefinition<posts_pb.PostForm, posts_pb.PostModel> {
    path: "/post.PostService/UpdatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.PostForm>;
    requestDeserialize: grpc.deserialize<posts_pb.PostForm>;
    responseSerialize: grpc.serialize<posts_pb.PostModel>;
    responseDeserialize: grpc.deserialize<posts_pb.PostModel>;
}
interface IPostServiceService_IDeletePost extends grpc.MethodDefinition<posts_pb.DeleteByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/DeletePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.DeleteByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.DeleteByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPostServiceService_ICreateComment extends grpc.MethodDefinition<posts_pb.CommentForm, posts_pb.CommentModel> {
    path: "/post.PostService/CreateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.CommentForm>;
    requestDeserialize: grpc.deserialize<posts_pb.CommentForm>;
    responseSerialize: grpc.serialize<posts_pb.CommentModel>;
    responseDeserialize: grpc.deserialize<posts_pb.CommentModel>;
}
interface IPostServiceService_IUpdateComment extends grpc.MethodDefinition<posts_pb.CommentForm, posts_pb.CommentModel> {
    path: "/post.PostService/UpdateComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.CommentForm>;
    requestDeserialize: grpc.deserialize<posts_pb.CommentForm>;
    responseSerialize: grpc.serialize<posts_pb.CommentModel>;
    responseDeserialize: grpc.deserialize<posts_pb.CommentModel>;
}
interface IPostServiceService_IDeleteComment extends grpc.MethodDefinition<posts_pb.DeleteByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/DeleteComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.DeleteByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.DeleteByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPostServiceService_IGetPostById extends grpc.MethodDefinition<posts_pb.GetByObjectId, posts_pb.PostModel> {
    path: "/post.PostService/GetPostById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.GetByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.GetByObjectId>;
    responseSerialize: grpc.serialize<posts_pb.PostModel>;
    responseDeserialize: grpc.deserialize<posts_pb.PostModel>;
}
interface IPostServiceService_IGetPost extends grpc.MethodDefinition<posts_pb.GetPostsRequest, posts_pb.PostModel> {
    path: "/post.PostService/GetPost";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<posts_pb.GetPostsRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.GetPostsRequest>;
    responseSerialize: grpc.serialize<posts_pb.PostModel>;
    responseDeserialize: grpc.deserialize<posts_pb.PostModel>;
}
interface IPostServiceService_IGetPostComments extends grpc.MethodDefinition<posts_pb.GetCommentsRequest, posts_pb.Comments> {
    path: "/post.PostService/GetPostComments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<posts_pb.GetCommentsRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.GetCommentsRequest>;
    responseSerialize: grpc.serialize<posts_pb.Comments>;
    responseDeserialize: grpc.deserialize<posts_pb.Comments>;
}
interface IPostServiceService_IGetUserPosts extends grpc.MethodDefinition<posts_pb.GetUserPostsRequest, posts_pb.PostModel> {
    path: "/post.PostService/GetUserPosts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<posts_pb.GetUserPostsRequest>;
    requestDeserialize: grpc.deserialize<posts_pb.GetUserPostsRequest>;
    responseSerialize: grpc.serialize<posts_pb.PostModel>;
    responseDeserialize: grpc.deserialize<posts_pb.PostModel>;
}
interface IPostServiceService_IUpvotePost extends grpc.MethodDefinition<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/UpvotePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.UpdateByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.UpdateByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPostServiceService_IDownvotePost extends grpc.MethodDefinition<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/DownvotePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.UpdateByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.UpdateByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPostServiceService_IUpvoteComment extends grpc.MethodDefinition<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/UpvoteComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.UpdateByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.UpdateByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPostServiceService_IDownvoteComment extends grpc.MethodDefinition<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty> {
    path: "/post.PostService/DownvoteComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<posts_pb.UpdateByObjectId>;
    requestDeserialize: grpc.deserialize<posts_pb.UpdateByObjectId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const PostServiceService: IPostServiceService;

export interface IPostServiceServer {
    createPost: grpc.handleUnaryCall<posts_pb.PostForm, posts_pb.PostModel>;
    updatePost: grpc.handleUnaryCall<posts_pb.PostForm, posts_pb.PostModel>;
    deletePost: grpc.handleUnaryCall<posts_pb.DeleteByObjectId, google_protobuf_empty_pb.Empty>;
    createComment: grpc.handleUnaryCall<posts_pb.CommentForm, posts_pb.CommentModel>;
    updateComment: grpc.handleUnaryCall<posts_pb.CommentForm, posts_pb.CommentModel>;
    deleteComment: grpc.handleUnaryCall<posts_pb.DeleteByObjectId, google_protobuf_empty_pb.Empty>;
    getPostById: grpc.handleUnaryCall<posts_pb.GetByObjectId, posts_pb.PostModel>;
    getPost: grpc.handleServerStreamingCall<posts_pb.GetPostsRequest, posts_pb.PostModel>;
    getPostComments: grpc.handleServerStreamingCall<posts_pb.GetCommentsRequest, posts_pb.Comments>;
    getUserPosts: grpc.handleServerStreamingCall<posts_pb.GetUserPostsRequest, posts_pb.PostModel>;
    upvotePost: grpc.handleUnaryCall<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty>;
    downvotePost: grpc.handleUnaryCall<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty>;
    upvoteComment: grpc.handleUnaryCall<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty>;
    downvoteComment: grpc.handleUnaryCall<posts_pb.UpdateByObjectId, google_protobuf_empty_pb.Empty>;
}

export interface IPostServiceClient {
    createPost(request: posts_pb.PostForm, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.PostForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    createPost(request: posts_pb.PostForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.PostForm, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.PostForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    updatePost(request: posts_pb.PostForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.DeleteByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePost(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createComment(request: posts_pb.CommentForm, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    createComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    createComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    updateComment(request: posts_pb.CommentForm, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    updateComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    updateComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    deleteComment(request: posts_pb.DeleteByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteComment(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteComment(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.GetByObjectId, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.GetByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    getPostById(request: posts_pb.GetByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    getPost(request: posts_pb.GetPostsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    getPost(request: posts_pb.GetPostsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    getPostComments(request: posts_pb.GetCommentsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.Comments>;
    getPostComments(request: posts_pb.GetCommentsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.Comments>;
    getUserPosts(request: posts_pb.GetUserPostsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    getUserPosts(request: posts_pb.GetUserPostsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    upvotePost(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    upvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    upvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvotePost(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    upvoteComment(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    upvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    upvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvoteComment(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    downvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PostServiceClient extends grpc.Client implements IPostServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createPost(request: posts_pb.PostForm, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.PostForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public createPost(request: posts_pb.PostForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.PostForm, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.PostForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public updatePost(request: posts_pb.PostForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.DeleteByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePost(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createComment(request: posts_pb.CommentForm, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public createComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public createComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public updateComment(request: posts_pb.CommentForm, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public updateComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public updateComment(request: posts_pb.CommentForm, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.CommentModel) => void): grpc.ClientUnaryCall;
    public deleteComment(request: posts_pb.DeleteByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteComment(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteComment(request: posts_pb.DeleteByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.GetByObjectId, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.GetByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public getPostById(request: posts_pb.GetByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: posts_pb.PostModel) => void): grpc.ClientUnaryCall;
    public getPost(request: posts_pb.GetPostsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    public getPost(request: posts_pb.GetPostsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    public getPostComments(request: posts_pb.GetCommentsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.Comments>;
    public getPostComments(request: posts_pb.GetCommentsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.Comments>;
    public getUserPosts(request: posts_pb.GetUserPostsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    public getUserPosts(request: posts_pb.GetUserPostsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<posts_pb.PostModel>;
    public upvotePost(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public upvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public upvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvotePost(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvotePost(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public upvoteComment(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public upvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public upvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvoteComment(request: posts_pb.UpdateByObjectId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public downvoteComment(request: posts_pb.UpdateByObjectId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
