// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_auth_AuthRequest(arg) {
  if (!(arg instanceof auth_pb.AuthRequest)) {
    throw new Error('Expected argument of type auth.AuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthRequest(buffer_arg) {
  return auth_pb.AuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_AuthResponse(arg) {
  if (!(arg instanceof auth_pb.AuthResponse)) {
    throw new Error('Expected argument of type auth.AuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthResponse(buffer_arg) {
  return auth_pb.AuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_GetUserRequest(arg) {
  if (!(arg instanceof auth_pb.GetUserRequest)) {
    throw new Error('Expected argument of type auth.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GetUserRequest(buffer_arg) {
  return auth_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_Pagination(arg) {
  if (!(arg instanceof auth_pb.Pagination)) {
    throw new Error('Expected argument of type auth.Pagination');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Pagination(buffer_arg) {
  return auth_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UserResponse(arg) {
  if (!(arg instanceof auth_pb.UserResponse)) {
    throw new Error('Expected argument of type auth.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_UserResponse(buffer_arg) {
  return auth_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  auth: {
    path: '/auth.AuthService/Auth',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_auth_AuthRequest,
    requestDeserialize: deserialize_auth_AuthRequest,
    responseSerialize: serialize_auth_AuthResponse,
    responseDeserialize: deserialize_auth_AuthResponse,
  },
  updateUser: {
    path: '/auth.AuthService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthRequest,
    responseType: auth_pb.AuthResponse,
    requestSerialize: serialize_auth_AuthRequest,
    requestDeserialize: deserialize_auth_AuthRequest,
    responseSerialize: serialize_auth_AuthResponse,
    responseDeserialize: deserialize_auth_AuthResponse,
  },
  getUser: {
    path: '/auth.AuthService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GetUserRequest,
    responseType: auth_pb.UserResponse,
    requestSerialize: serialize_auth_GetUserRequest,
    requestDeserialize: deserialize_auth_GetUserRequest,
    responseSerialize: serialize_auth_UserResponse,
    responseDeserialize: deserialize_auth_UserResponse,
  },
  getUsers: {
    path: '/auth.AuthService/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: auth_pb.Pagination,
    responseType: auth_pb.UserResponse,
    requestSerialize: serialize_auth_Pagination,
    requestDeserialize: deserialize_auth_Pagination,
    responseSerialize: serialize_auth_UserResponse,
    responseDeserialize: deserialize_auth_UserResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
