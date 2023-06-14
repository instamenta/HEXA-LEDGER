// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_user_LoginResponse(arg) {
  if (!(arg instanceof users_pb.LoginResponse)) {
    throw new Error('Expected argument of type user.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginResponse(buffer_arg) {
  return users_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_RegisterResponse(arg) {
  if (!(arg instanceof users_pb.RegisterResponse)) {
    throw new Error('Expected argument of type user.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_RegisterResponse(buffer_arg) {
  return users_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  login: {
    path: '/user.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.LoginResponse,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_LoginResponse,
    responseDeserialize: deserialize_user_LoginResponse,
  },
  register: {
    path: '/user.UserService/Register',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.RegisterResponse,
    requestSerialize: serialize_user_User,
    requestDeserialize: deserialize_user_User,
    responseSerialize: serialize_user_RegisterResponse,
    responseDeserialize: deserialize_user_RegisterResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
