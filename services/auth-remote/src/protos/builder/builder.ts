import {StringValue, Int32Value} from "google-protobuf/google/protobuf/wrappers_pb";
import * as I from '../generated/types/auth_pb';

const proto = require('../generated/auth_pb');

export function build_AuthRequest(address: string, username: string, picture: string): I.AuthRequest {
   return new proto.AuthRequest
      .setAddress(new StringValue().setValue(address))
      .setUsername(new StringValue().setValue(username))
      .setPicture(new StringValue().setValue(picture));
}

export function build_AuthResponse(token: string): I.AuthResponse {
   return new proto.AuthResponse
      .setToken(new StringValue().setValue(token));
}

export function build_GetUserRequest(authId: string): I.GetUserRequest {
   return new proto.GetUserRequest
      .setAuthId(new StringValue().setValue(authId));
}

export function build_UserResponse(authId: string, address: string, username: string, picture: string): I.UserResponse {
   return new proto.UserResponse
      .setAddress(new StringValue().setValue(address))
      .setUsername(new StringValue().setValue(username))
      .setPicture(new StringValue().setValue(picture));
}

export function build_Pagination(limit: number, skip: number): I.Pagination {
   return new proto.Pagination
      .setLimit(new Int32Value().setValue(limit))
      .setSkip(new Int32Value().setValue(skip));
}