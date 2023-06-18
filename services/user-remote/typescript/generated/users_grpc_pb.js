// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
function serialize_user_GetUserByIdForm(arg) {
    if (!(arg instanceof users_pb.GetUserByIdForm)) {
        throw new Error('Expected argument of type user.GetUserByIdForm');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_user_GetUserByIdForm(buffer_arg) {
    return users_pb.GetUserByIdForm.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_user_GetUsersForm(arg) {
    if (!(arg instanceof users_pb.GetUsersForm)) {
        throw new Error('Expected argument of type user.GetUsersForm');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_user_GetUsersForm(buffer_arg) {
    return users_pb.GetUsersForm.deserializeBinary(new Uint8Array(buffer_arg));
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
function serialize_user_UserList(arg) {
    if (!(arg instanceof users_pb.UserList)) {
        throw new Error('Expected argument of type user.UserList');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_user_UserList(buffer_arg) {
    return users_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
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
    getById: {
        path: '/user.UserService/GetById',
        requestStream: false,
        responseStream: false,
        requestType: users_pb.GetUserByIdForm,
        responseType: users_pb.UserModel,
        requestSerialize: serialize_user_GetUserByIdForm,
        requestDeserialize: deserialize_user_GetUserByIdForm,
        responseSerialize: serialize_user_UserModel,
        responseDeserialize: deserialize_user_UserModel,
    },
    getAllUsers: {
        path: '/user.UserService/GetAllUsers',
        requestStream: false,
        responseStream: false,
        requestType: users_pb.GetUsersForm,
        responseType: users_pb.UserList,
        requestSerialize: serialize_user_GetUsersForm,
        requestDeserialize: deserialize_user_GetUsersForm,
        responseSerialize: serialize_user_UserList,
        responseDeserialize: deserialize_user_UserList,
    },
};
exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
