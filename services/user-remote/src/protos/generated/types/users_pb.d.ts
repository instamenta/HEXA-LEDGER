// package: user
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class UserModel extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsername(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmail(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPassword(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasPicture(): boolean;
    clearPicture(): void;
    getPicture(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPicture(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): google_protobuf_wrappers_pb.StringValue | undefined;
    setToken(value?: google_protobuf_wrappers_pb.StringValue): UserModel;

    hasUserwallet(): boolean;
    clearUserwallet(): void;
    getUserwallet(): UserWallet | undefined;
    setUserwallet(value?: UserWallet): UserModel;
    clearFollowersList(): void;
    getFollowersList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setFollowersList(value: Array<google_protobuf_wrappers_pb.StringValue>): UserModel;
    addFollowers(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearFollowingList(): void;
    getFollowingList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setFollowingList(value: Array<google_protobuf_wrappers_pb.StringValue>): UserModel;
    addFollowing(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearPostsList(): void;
    getPostsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPostsList(value: Array<google_protobuf_wrappers_pb.StringValue>): UserModel;
    addPosts(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserModel.AsObject;
    static toObject(includeInstance: boolean, msg: UserModel): UserModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserModel;
    static deserializeBinaryFromReader(message: UserModel, reader: jspb.BinaryReader): UserModel;
}

export namespace UserModel {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        username?: google_protobuf_wrappers_pb.StringValue.AsObject,
        email?: google_protobuf_wrappers_pb.StringValue.AsObject,
        password?: google_protobuf_wrappers_pb.StringValue.AsObject,
        picture?: google_protobuf_wrappers_pb.StringValue.AsObject,
        token?: google_protobuf_wrappers_pb.StringValue.AsObject,
        userwallet?: UserWallet.AsObject,
        followersList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        followingList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        postsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
}

export class LoginForm extends jspb.Message { 

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmail(value?: google_protobuf_wrappers_pb.StringValue): LoginForm;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPassword(value?: google_protobuf_wrappers_pb.StringValue): LoginForm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginForm.AsObject;
    static toObject(includeInstance: boolean, msg: LoginForm): LoginForm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginForm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginForm;
    static deserializeBinaryFromReader(message: LoginForm, reader: jspb.BinaryReader): LoginForm;
}

export namespace LoginForm {
    export type AsObject = {
        email?: google_protobuf_wrappers_pb.StringValue.AsObject,
        password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class RegisterForm extends jspb.Message { 

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsername(value?: google_protobuf_wrappers_pb.StringValue): RegisterForm;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmail(value?: google_protobuf_wrappers_pb.StringValue): RegisterForm;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPassword(value?: google_protobuf_wrappers_pb.StringValue): RegisterForm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterForm.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterForm): RegisterForm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterForm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterForm;
    static deserializeBinaryFromReader(message: RegisterForm, reader: jspb.BinaryReader): RegisterForm;
}

export namespace RegisterForm {
    export type AsObject = {
        username?: google_protobuf_wrappers_pb.StringValue.AsObject,
        email?: google_protobuf_wrappers_pb.StringValue.AsObject,
        password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UpdateForm extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): UpdateForm;

    hasUsername(): boolean;
    clearUsername(): void;
    getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUsername(value?: google_protobuf_wrappers_pb.StringValue): UpdateForm;

    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEmail(value?: google_protobuf_wrappers_pb.StringValue): UpdateForm;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPassword(value?: google_protobuf_wrappers_pb.StringValue): UpdateForm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateForm.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateForm): UpdateForm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateForm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateForm;
    static deserializeBinaryFromReader(message: UpdateForm, reader: jspb.BinaryReader): UpdateForm;
}

export namespace UpdateForm {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        username?: google_protobuf_wrappers_pb.StringValue.AsObject,
        email?: google_protobuf_wrappers_pb.StringValue.AsObject,
        password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UserWallet extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): google_protobuf_wrappers_pb.StringValue | undefined;
    setToken(value?: google_protobuf_wrappers_pb.StringValue): UserWallet;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.StringValue): UserWallet;

    hasTousd(): boolean;
    clearTousd(): void;
    getTousd(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTousd(value?: google_protobuf_wrappers_pb.StringValue): UserWallet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserWallet.AsObject;
    static toObject(includeInstance: boolean, msg: UserWallet): UserWallet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserWallet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserWallet;
    static deserializeBinaryFromReader(message: UserWallet, reader: jspb.BinaryReader): UserWallet;
}

export namespace UserWallet {
    export type AsObject = {
        token?: google_protobuf_wrappers_pb.StringValue.AsObject,
        amount?: google_protobuf_wrappers_pb.StringValue.AsObject,
        tousd?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetAllUsersRequest extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetAllUsersRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetAllUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllUsersRequest): GetAllUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllUsersRequest;
    static deserializeBinaryFromReader(message: GetAllUsersRequest, reader: jspb.BinaryReader): GetAllUsersRequest;
}

export namespace GetAllUsersRequest {
    export type AsObject = {
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class GetUsersRequest extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetUsersRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetUsersRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilter(value?: google_protobuf_wrappers_pb.StringValue): GetUsersRequest;

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMatch(value?: google_protobuf_wrappers_pb.StringValue): GetUsersRequest;
    clearIdsList(): void;
    getIdsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setIdsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GetUsersRequest;
    addIds(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
    static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
    export type AsObject = {
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        filter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        match?: google_protobuf_wrappers_pb.StringValue.AsObject,
        IdsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    }
}

export class GetUserByIdRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): GetUserByIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIdRequest): GetUserByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdRequest;
    static deserializeBinaryFromReader(message: GetUserByIdRequest, reader: jspb.BinaryReader): GetUserByIdRequest;
}

export namespace GetUserByIdRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetUserFollowersRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): GetUserFollowersRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetUserFollowersRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetUserFollowersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFollowersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFollowersRequest): GetUserFollowersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFollowersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFollowersRequest;
    static deserializeBinaryFromReader(message: GetUserFollowersRequest, reader: jspb.BinaryReader): GetUserFollowersRequest;
}

export namespace GetUserFollowersRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class GetUserFollowersResponse extends jspb.Message { 
    clearFollowersList(): void;
    getFollowersList(): Array<UserModel>;
    setFollowersList(value: Array<UserModel>): GetUserFollowersResponse;
    addFollowers(value?: UserModel, index?: number): UserModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFollowersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFollowersResponse): GetUserFollowersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFollowersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFollowersResponse;
    static deserializeBinaryFromReader(message: GetUserFollowersResponse, reader: jspb.BinaryReader): GetUserFollowersResponse;
}

export namespace GetUserFollowersResponse {
    export type AsObject = {
        followersList: Array<UserModel.AsObject>,
    }
}

export class GetUserFollowingRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): GetUserFollowingRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetUserFollowingRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetUserFollowingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFollowingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFollowingRequest): GetUserFollowingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFollowingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFollowingRequest;
    static deserializeBinaryFromReader(message: GetUserFollowingRequest, reader: jspb.BinaryReader): GetUserFollowingRequest;
}

export namespace GetUserFollowingRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    }
}

export class GetUserFollowingResponse extends jspb.Message { 
    clearFollowingList(): void;
    getFollowingList(): Array<UserModel>;
    setFollowingList(value: Array<UserModel>): GetUserFollowingResponse;
    addFollowing(value?: UserModel, index?: number): UserModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserFollowingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserFollowingResponse): GetUserFollowingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserFollowingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserFollowingResponse;
    static deserializeBinaryFromReader(message: GetUserFollowingResponse, reader: jspb.BinaryReader): GetUserFollowingResponse;
}

export namespace GetUserFollowingResponse {
    export type AsObject = {
        followingList: Array<UserModel.AsObject>,
    }
}

export class FollowUserRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): FollowUserRequest;

    hasCurrentUserId(): boolean;
    clearCurrentUserId(): void;
    getCurrentUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCurrentUserId(value?: google_protobuf_wrappers_pb.StringValue): FollowUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FollowUserRequest): FollowUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowUserRequest;
    static deserializeBinaryFromReader(message: FollowUserRequest, reader: jspb.BinaryReader): FollowUserRequest;
}

export namespace FollowUserRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        currentUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UnfollowUserRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): UnfollowUserRequest;

    hasCurrentUserId(): boolean;
    clearCurrentUserId(): void;
    getCurrentUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCurrentUserId(value?: google_protobuf_wrappers_pb.StringValue): UnfollowUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnfollowUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnfollowUserRequest): UnfollowUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnfollowUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnfollowUserRequest;
    static deserializeBinaryFromReader(message: UnfollowUserRequest, reader: jspb.BinaryReader): UnfollowUserRequest;
}

export namespace UnfollowUserRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        currentUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class idRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): idRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): idRequest.AsObject;
    static toObject(includeInstance: boolean, msg: idRequest): idRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: idRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): idRequest;
    static deserializeBinaryFromReader(message: idRequest, reader: jspb.BinaryReader): idRequest;
}

export namespace idRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
