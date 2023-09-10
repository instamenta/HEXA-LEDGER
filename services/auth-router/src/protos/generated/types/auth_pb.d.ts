// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class AuthResponse extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): google_protobuf_wrappers_pb.StringValue | undefined;
    setToken(value?: google_protobuf_wrappers_pb.StringValue): AuthResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthResponse;
    static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
    export type AsObject = {
        token?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class AuthRequest extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAddress(value?: google_protobuf_wrappers_pb.StringValue): AuthRequest;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsername(value?: google_protobuf_wrappers_pb.StringValue): AuthRequest;

    hasPicture(): boolean;
    clearPicture(): void;
    getPicture(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPicture(value?: google_protobuf_wrappers_pb.StringValue): AuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthRequest;
    static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
    export type AsObject = {
        address?: google_protobuf_wrappers_pb.StringValue.AsObject,
        username?: google_protobuf_wrappers_pb.StringValue.AsObject,
        picture?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 

    hasAuthId(): boolean;
    clearAuthId(): void;
    getAuthId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthId(value?: google_protobuf_wrappers_pb.StringValue): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        authId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UserResponse extends jspb.Message { 

    hasAuthId(): boolean;
    clearAuthId(): void;
    getAuthId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthId(value?: google_protobuf_wrappers_pb.StringValue): UserResponse;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsername(value?: google_protobuf_wrappers_pb.StringValue): UserResponse;

    hasPicture(): boolean;
    clearPicture(): void;
    getPicture(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPicture(value?: google_protobuf_wrappers_pb.StringValue): UserResponse;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAddress(value?: google_protobuf_wrappers_pb.StringValue): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        authId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        username?: google_protobuf_wrappers_pb.StringValue.AsObject,
        picture?: google_protobuf_wrappers_pb.StringValue.AsObject,
        address?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class Pagination extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): Pagination;

    hasSkip(): boolean;
    clearSkip(): void;
    getSkip(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setSkip(value?: google_protobuf_wrappers_pb.Int32Value): Pagination;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pagination.AsObject;
    static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pagination;
    static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
    export type AsObject = {
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        skip?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}
