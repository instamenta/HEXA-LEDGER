// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var posts_pb = require('./posts_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_CommentForm(arg) {
  if (!(arg instanceof posts_pb.CommentForm)) {
    throw new Error('Expected argument of type post.CommentForm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_CommentForm(buffer_arg) {
  return posts_pb.CommentForm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_CommentModel(arg) {
  if (!(arg instanceof posts_pb.CommentModel)) {
    throw new Error('Expected argument of type post.CommentModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_CommentModel(buffer_arg) {
  return posts_pb.CommentModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_Comments(arg) {
  if (!(arg instanceof posts_pb.Comments)) {
    throw new Error('Expected argument of type post.Comments');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_Comments(buffer_arg) {
  return posts_pb.Comments.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_DeleteByObjectId(arg) {
  if (!(arg instanceof posts_pb.DeleteByObjectId)) {
    throw new Error('Expected argument of type post.DeleteByObjectId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_DeleteByObjectId(buffer_arg) {
  return posts_pb.DeleteByObjectId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetByObjectId(arg) {
  if (!(arg instanceof posts_pb.GetByObjectId)) {
    throw new Error('Expected argument of type post.GetByObjectId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetByObjectId(buffer_arg) {
  return posts_pb.GetByObjectId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetCommentsRequest(arg) {
  if (!(arg instanceof posts_pb.GetCommentsRequest)) {
    throw new Error('Expected argument of type post.GetCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetCommentsRequest(buffer_arg) {
  return posts_pb.GetCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetPostsRequest(arg) {
  if (!(arg instanceof posts_pb.GetPostsRequest)) {
    throw new Error('Expected argument of type post.GetPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetPostsRequest(buffer_arg) {
  return posts_pb.GetPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetUserPostsRequest(arg) {
  if (!(arg instanceof posts_pb.GetUserPostsRequest)) {
    throw new Error('Expected argument of type post.GetUserPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetUserPostsRequest(buffer_arg) {
  return posts_pb.GetUserPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostForm(arg) {
  if (!(arg instanceof posts_pb.PostForm)) {
    throw new Error('Expected argument of type post.PostForm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostForm(buffer_arg) {
  return posts_pb.PostForm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostModel(arg) {
  if (!(arg instanceof posts_pb.PostModel)) {
    throw new Error('Expected argument of type post.PostModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostModel(buffer_arg) {
  return posts_pb.PostModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_VoteCommentRequest(arg) {
  if (!(arg instanceof posts_pb.VoteCommentRequest)) {
    throw new Error('Expected argument of type post.VoteCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_VoteCommentRequest(buffer_arg) {
  return posts_pb.VoteCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_VotePostRequest(arg) {
  if (!(arg instanceof posts_pb.VotePostRequest)) {
    throw new Error('Expected argument of type post.VotePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_VotePostRequest(buffer_arg) {
  return posts_pb.VotePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  // CREATE & UPDATE & DELETE
createPost: {
    path: '/post.PostService/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.PostForm,
    responseType: posts_pb.PostModel,
    requestSerialize: serialize_post_PostForm,
    requestDeserialize: deserialize_post_PostForm,
    responseSerialize: serialize_post_PostModel,
    responseDeserialize: deserialize_post_PostModel,
  },
  updatePost: {
    path: '/post.PostService/UpdatePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.PostForm,
    responseType: posts_pb.PostModel,
    requestSerialize: serialize_post_PostForm,
    requestDeserialize: deserialize_post_PostForm,
    responseSerialize: serialize_post_PostModel,
    responseDeserialize: deserialize_post_PostModel,
  },
  deletePost: {
    path: '/post.PostService/DeletePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.DeleteByObjectId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_DeleteByObjectId,
    requestDeserialize: deserialize_post_DeleteByObjectId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  createComment: {
    path: '/post.PostService/CreateComment',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.CommentForm,
    responseType: posts_pb.CommentModel,
    requestSerialize: serialize_post_CommentForm,
    requestDeserialize: deserialize_post_CommentForm,
    responseSerialize: serialize_post_CommentModel,
    responseDeserialize: deserialize_post_CommentModel,
  },
  updateComment: {
    path: '/post.PostService/UpdateComment',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.CommentForm,
    responseType: posts_pb.CommentModel,
    requestSerialize: serialize_post_CommentForm,
    requestDeserialize: deserialize_post_CommentForm,
    responseSerialize: serialize_post_CommentModel,
    responseDeserialize: deserialize_post_CommentModel,
  },
  deleteComment: {
    path: '/post.PostService/DeleteComment',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.DeleteByObjectId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_DeleteByObjectId,
    requestDeserialize: deserialize_post_DeleteByObjectId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GET & FIND
getPostById: {
    path: '/post.PostService/GetPostById',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.GetByObjectId,
    responseType: posts_pb.PostModel,
    requestSerialize: serialize_post_GetByObjectId,
    requestDeserialize: deserialize_post_GetByObjectId,
    responseSerialize: serialize_post_PostModel,
    responseDeserialize: deserialize_post_PostModel,
  },
  getPost: {
    path: '/post.PostService/GetPost',
    requestStream: false,
    responseStream: true,
    requestType: posts_pb.GetPostsRequest,
    responseType: posts_pb.PostModel,
    requestSerialize: serialize_post_GetPostsRequest,
    requestDeserialize: deserialize_post_GetPostsRequest,
    responseSerialize: serialize_post_PostModel,
    responseDeserialize: deserialize_post_PostModel,
  },
  getPostComments: {
    path: '/post.PostService/GetPostComments',
    requestStream: false,
    responseStream: true,
    requestType: posts_pb.GetCommentsRequest,
    responseType: posts_pb.Comments,
    requestSerialize: serialize_post_GetCommentsRequest,
    requestDeserialize: deserialize_post_GetCommentsRequest,
    responseSerialize: serialize_post_Comments,
    responseDeserialize: deserialize_post_Comments,
  },
  getUserPosts: {
    path: '/post.PostService/GetUserPosts',
    requestStream: false,
    responseStream: true,
    requestType: posts_pb.GetUserPostsRequest,
    responseType: posts_pb.PostModel,
    requestSerialize: serialize_post_GetUserPostsRequest,
    requestDeserialize: deserialize_post_GetUserPostsRequest,
    responseSerialize: serialize_post_PostModel,
    responseDeserialize: deserialize_post_PostModel,
  },
  // UPVOTE POST AND COMMENT
upvotePost: {
    path: '/post.PostService/UpvotePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.VotePostRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_VotePostRequest,
    requestDeserialize: deserialize_post_VotePostRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  downvotePost: {
    path: '/post.PostService/DownvotePost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.VotePostRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_VotePostRequest,
    requestDeserialize: deserialize_post_VotePostRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  upvoteComment: {
    path: '/post.PostService/UpvoteComment',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.VoteCommentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_VoteCommentRequest,
    requestDeserialize: deserialize_post_VoteCommentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  downvoteComment: {
    path: '/post.PostService/DownvoteComment',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.VoteCommentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_post_VoteCommentRequest,
    requestDeserialize: deserialize_post_VoteCommentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
