import {StringValue, Int32Value} from "google-protobuf/google/protobuf/wrappers_pb";

const {
   AuthRequest,
   AuthResponse,
   GetUserRequest,
   UserResponse,
   Pagination,
} = require('../generated/auth_pb');

import {
   AuthRequest as IAuthRequest,
   AuthResponse as IAuthResponse,
   GetUserRequest as IGetUserRequest,
   UserResponse as IUserResponse
} from '../generated/types/auth_pb';
import {Int32} from "bson";

export function build_AuthRequest(address, username, picture): IAuthRequest {
   return new AuthRequest
      .setAddress(new StringValue().setValue(address))
      .setUsername(new StringValue().setValue(username))
      .setPicture(new StringValue().setValue(picture));
}

export function build_AuthResponse(token): IAuthResponse {
   return new AuthResponse
      .setToken(new StringValue().setValue(token));
}

export function build_GetUserRequest(authId): IGetUserRequest {
   return new GetUserRequest
      .setAuthId(new StringValue().setValue(authId));
}

export function build_UserResponse(username, picture, address): IUserResponse {
   return new UserResponse
      .setAddress(new StringValue().setValue(address))
      .setUsername(new StringValue().setValue(username))
      .setPicture(new StringValue().setValue(picture));
}

export function build_Pagination(limit, skip) {
   return new Pagination
      .setLimit(new Int32Value().setValue(limit))
      .setSkip(new Int32Value().setValue(skip));
}