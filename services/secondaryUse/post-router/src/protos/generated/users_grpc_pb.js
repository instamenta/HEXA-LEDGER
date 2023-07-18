// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_FollowUserRequest(arg) {
  if (!(arg instanceof users_pb.FollowUserRequest)) {
    throw new Error('Expected argument of type user.FollowUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_FollowUserRequest(buffer_arg) {
  return users_pb.FollowUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetAllUsersRequest(arg) {
  if (!(arg instanceof users_pb.GetAllUsersRequest)) {
    throw new Error('Expected argument of type user.GetAllUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetAllUsersRequest(buffer_arg) {
  return users_pb.GetAllUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserByIdRequest(arg) {
  if (!(arg instanceof users_pb.GetUserByIdRequest)) {
    throw new Error('Expected argument of type user.GetUserByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByIdRequest(buffer_arg) {
  return users_pb.GetUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserFollowersRequest(arg) {
  if (!(arg instanceof users_pb.GetUserFollowersRequest)) {
    throw new Error('Expected argument of type user.GetUserFollowersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserFollowersRequest(buffer_arg) {
  return users_pb.GetUserFollowersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserFollowingRequest(arg) {
  if (!(arg instanceof users_pb.GetUserFollowingRequest)) {
    throw new Error('Expected argument of type user.GetUserFollowingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserFollowingRequest(buffer_arg) {
  return users_pb.GetUserFollowingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUsersRequest(arg) {
  if (!(arg instanceof users_pb.GetUsersRequest)) {
    throw new Error('Expected argument of type user.GetUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUsersRequest(buffer_arg) {
  return users_pb.GetUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LoginForm(arg) {
  if (!(arg instanceof users_pb.LoginForm)) {
    throw new Error('Expected argument of type user.LoginForm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginForm(buffer_arg) {
  return users_pb.LoginForm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_RegisterForm(arg) {
  if (!(arg instanceof users_pb.RegisterForm)) {
    throw new Error('Expected argument of type user.RegisterForm');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_RegisterForm(buffer_arg) {
  return users_pb.RegisterForm.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UnfollowUserRequest(arg) {
  if (!(arg instanceof users_pb.UnfollowUserRequest)) {
    throw new Error('Expected argument of type user.UnfollowUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UnfollowUserRequest(buffer_arg) {
  return users_pb.UnfollowUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserModel(arg) {
  if (!(arg instanceof users_pb.UserModel)) {
    throw new Error('Expected argument of type user.UserModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserModel(buffer_arg) {
  return users_pb.UserModel.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  login: {
    path: '/user.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.LoginForm,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_LoginForm,
    requestDeserialize: deserialize_user_LoginForm,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  register: {
    path: '/user.UserService/Register',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.RegisterForm,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_RegisterForm,
    requestDeserialize: deserialize_user_RegisterForm,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  getUserById: {
    path: '/user.UserService/GetUserById',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserByIdRequest,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_GetUserByIdRequest,
    requestDeserialize: deserialize_user_GetUserByIdRequest,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  followUser: {
    path: '/user.UserService/FollowUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.FollowUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_FollowUserRequest,
    requestDeserialize: deserialize_user_FollowUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  unfollowUser: {
    path: '/user.UserService/UnfollowUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UnfollowUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_UnfollowUserRequest,
    requestDeserialize: deserialize_user_UnfollowUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getUsers: {
    path: '/user.UserService/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.GetUsersRequest,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_GetUsersRequest,
    requestDeserialize: deserialize_user_GetUsersRequest,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  getAllUsers: {
    path: '/user.UserService/GetAllUsers',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.GetAllUsersRequest,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_GetAllUsersRequest,
    requestDeserialize: deserialize_user_GetAllUsersRequest,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  getUserFollowers: {
    path: '/user.UserService/GetUserFollowers',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.GetUserFollowersRequest,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_GetUserFollowersRequest,
    requestDeserialize: deserialize_user_GetUserFollowersRequest,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  getUserFollowing: {
    path: '/user.UserService/GetUserFollowing',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.GetUserFollowingRequest,
    responseType: users_pb.UserModel,
    requestSerialize: serialize_user_GetUserFollowingRequest,
    requestDeserialize: deserialize_user_GetUserFollowingRequest,
    responseSerialize: serialize_user_UserModel,
    responseDeserialize: deserialize_user_UserModel,
  },
  //  rpc GetUserComments(GetUserCommentsRequest) returns (stream GetUserCommentsResponse);
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
