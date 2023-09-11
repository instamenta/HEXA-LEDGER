"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build_Pagination = exports.build_UserResponse = exports.build_GetUserRequest = exports.build_AuthResponse = exports.build_AuthRequest = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const { AuthRequest, AuthResponse, GetUserRequest, UserResponse, Pagination, } = require('../generated/auth_pb');
function build_AuthRequest(address, username, picture) {
    return new AuthRequest
        .setAddress(new wrappers_pb_1.StringValue().setValue(address))
        .setUsername(new wrappers_pb_1.StringValue().setValue(username))
        .setPicture(new wrappers_pb_1.StringValue().setValue(picture));
}
exports.build_AuthRequest = build_AuthRequest;
function build_AuthResponse(token) {
    return new AuthResponse
        .setToken(new wrappers_pb_1.StringValue().setValue(token));
}
exports.build_AuthResponse = build_AuthResponse;
function build_GetUserRequest(authId) {
    return new GetUserRequest
        .setAuthId(new wrappers_pb_1.StringValue().setValue(authId));
}
exports.build_GetUserRequest = build_GetUserRequest;
function build_UserResponse(authId, address, username, picture) {
    return new UserResponse
        .setAuthId(new wrappers_pb_1.StringValue().setValue(authId))
        .setAddress(new wrappers_pb_1.StringValue().setValue(address))
        .setUsername(new wrappers_pb_1.StringValue().setValue(username))
        .setPicture(new wrappers_pb_1.StringValue().setValue(picture));
}
exports.build_UserResponse = build_UserResponse;
function build_Pagination(limit, skip) {
    return new Pagination
        .setLimit(new wrappers_pb_1.Int32Value().setValue(limit))
        .setSkip(new wrappers_pb_1.Int32Value().setValue(skip));
}
exports.build_Pagination = build_Pagination;
