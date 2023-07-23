// package: post
// file: posts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PostModel extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTitle(value?: google_protobuf_wrappers_pb.StringValue): PostModel;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): PostModel;

    hasAuthorId(): boolean;
    clearAuthorId(): void;
    getAuthorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorId(value?: google_protobuf_wrappers_pb.StringValue): PostModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PostModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PostModel;

    hasIsPromoted(): boolean;
    clearIsPromoted(): void;
    getIsPromoted(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsPromoted(value?: google_protobuf_wrappers_pb.BoolValue): PostModel;
    clearUpvotesList(): void;
    getUpvotesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setUpvotesList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addUpvotes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDownvotesList(): void;
    getDownvotesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDownvotesList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addDownvotes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearCommentsList(): void;
    getCommentsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setCommentsList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addComments(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearTagsList(): void;
    getTagsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTagsList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addTags(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearTronTransactionList(): void;
    getTronTransactionList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTronTransactionList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addTronTransaction(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearEthereumTransactionList(): void;
    getEthereumTransactionList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setEthereumTransactionList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addEthereumTransaction(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDonationsList(): void;
    getDonationsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDonationsList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addDonations(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearPicturesList(): void;
    getPicturesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPicturesList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostModel;
    addPictures(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): PostModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostModel.AsObject;
    static toObject(includeInstance: boolean, msg: PostModel): PostModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostModel;
    static deserializeBinaryFromReader(message: PostModel, reader: jspb.BinaryReader): PostModel;
}

export namespace PostModel {
    export type AsObject = {
        title?: google_protobuf_wrappers_pb.StringValue.AsObject,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        authorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isPromoted?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        upvotesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        downvotesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        commentsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        tagsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        tronTransactionList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ethereumTransactionList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        donationsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        picturesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class PostForm extends jspb.Message { 

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTitle(value?: google_protobuf_wrappers_pb.StringValue): PostForm;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): PostForm;

    hasAuthorId(): boolean;
    clearAuthorId(): void;
    getAuthorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorId(value?: google_protobuf_wrappers_pb.StringValue): PostForm;
    clearPicturesList(): void;
    getPicturesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setPicturesList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostForm;
    addPictures(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasIsPromoted(): boolean;
    clearIsPromoted(): void;
    getIsPromoted(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIsPromoted(value?: google_protobuf_wrappers_pb.BoolValue): PostForm;
    clearTagsList(): void;
    getTagsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTagsList(value: Array<google_protobuf_wrappers_pb.StringValue>): PostForm;
    addTags(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): PostForm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostForm.AsObject;
    static toObject(includeInstance: boolean, msg: PostForm): PostForm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostForm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostForm;
    static deserializeBinaryFromReader(message: PostForm, reader: jspb.BinaryReader): PostForm;
}

export namespace PostForm {
    export type AsObject = {
        title?: google_protobuf_wrappers_pb.StringValue.AsObject,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        authorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        picturesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        isPromoted?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        tagsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CommentForm extends jspb.Message { 

    hasAuthorId(): boolean;
    clearAuthorId(): void;
    getAuthorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorId(value?: google_protobuf_wrappers_pb.StringValue): CommentForm;

    hasPostId(): boolean;
    clearPostId(): void;
    getPostId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPostId(value?: google_protobuf_wrappers_pb.StringValue): CommentForm;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
    setContent(value?: google_protobuf_wrappers_pb.StringValue): CommentForm;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): CommentForm;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentForm.AsObject;
    static toObject(includeInstance: boolean, msg: CommentForm): CommentForm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentForm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentForm;
    static deserializeBinaryFromReader(message: CommentForm, reader: jspb.BinaryReader): CommentForm;
}

export namespace CommentForm {
    export type AsObject = {
        authorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        postId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        content?: google_protobuf_wrappers_pb.StringValue.AsObject,
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class CommentModel extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): CommentModel;

    hasAuthorId(): boolean;
    clearAuthorId(): void;
    getAuthorId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuthorId(value?: google_protobuf_wrappers_pb.StringValue): CommentModel;

    hasPostId(): boolean;
    clearPostId(): void;
    getPostId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPostId(value?: google_protobuf_wrappers_pb.StringValue): CommentModel;
    clearUpvotesList(): void;
    getUpvotesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setUpvotesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CommentModel;
    addUpvotes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDownvotesList(): void;
    getDownvotesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDownvotesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CommentModel;
    addDownvotes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearSubcommentsList(): void;
    getSubcommentsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setSubcommentsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CommentModel;
    addSubcomments(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
    setContent(value?: google_protobuf_wrappers_pb.StringValue): CommentModel;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CommentModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CommentModel;

    hasWasEdited(): boolean;
    clearWasEdited(): void;
    getWasEdited(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setWasEdited(value?: google_protobuf_wrappers_pb.BoolValue): CommentModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentModel.AsObject;
    static toObject(includeInstance: boolean, msg: CommentModel): CommentModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentModel;
    static deserializeBinaryFromReader(message: CommentModel, reader: jspb.BinaryReader): CommentModel;
}

export namespace CommentModel {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        authorId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        postId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        upvotesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        downvotesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        subcommentsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        content?: google_protobuf_wrappers_pb.StringValue.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        wasEdited?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GetByObjectId extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): GetByObjectId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByObjectId.AsObject;
    static toObject(includeInstance: boolean, msg: GetByObjectId): GetByObjectId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByObjectId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByObjectId;
    static deserializeBinaryFromReader(message: GetByObjectId, reader: jspb.BinaryReader): GetByObjectId;
}

export namespace GetByObjectId {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetCommentsRequest extends jspb.Message { 

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetCommentsRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetCommentsRequest;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): GetCommentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCommentsRequest): GetCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCommentsRequest;
    static deserializeBinaryFromReader(message: GetCommentsRequest, reader: jspb.BinaryReader): GetCommentsRequest;
}

export namespace GetCommentsRequest {
    export type AsObject = {
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetUserPostsRequest extends jspb.Message { 

    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUserId(value?: google_protobuf_wrappers_pb.StringValue): GetUserPostsRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetUserPostsRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetUserPostsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilter(value?: google_protobuf_wrappers_pb.StringValue): GetUserPostsRequest;

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMatch(value?: google_protobuf_wrappers_pb.StringValue): GetUserPostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserPostsRequest): GetUserPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserPostsRequest;
    static deserializeBinaryFromReader(message: GetUserPostsRequest, reader: jspb.BinaryReader): GetUserPostsRequest;
}

export namespace GetUserPostsRequest {
    export type AsObject = {
        userId?: google_protobuf_wrappers_pb.StringValue.AsObject,
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        filter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        match?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class UpdateByObjectId extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): UpdateByObjectId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateByObjectId.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateByObjectId): UpdateByObjectId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateByObjectId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateByObjectId;
    static deserializeBinaryFromReader(message: UpdateByObjectId, reader: jspb.BinaryReader): UpdateByObjectId;
}

export namespace UpdateByObjectId {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class VotePostRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): VotePostRequest;

    hasCurrentUserId(): boolean;
    clearCurrentUserId(): void;
    getCurrentUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCurrentUserId(value?: google_protobuf_wrappers_pb.StringValue): VotePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VotePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VotePostRequest): VotePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VotePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VotePostRequest;
    static deserializeBinaryFromReader(message: VotePostRequest, reader: jspb.BinaryReader): VotePostRequest;
}

export namespace VotePostRequest {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        currentUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class VoteCommentRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): VoteCommentRequest;

    hasCurrentUserId(): boolean;
    clearCurrentUserId(): void;
    getCurrentUserId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCurrentUserId(value?: google_protobuf_wrappers_pb.StringValue): VoteCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VoteCommentRequest): VoteCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoteCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteCommentRequest;
    static deserializeBinaryFromReader(message: VoteCommentRequest, reader: jspb.BinaryReader): VoteCommentRequest;
}

export namespace VoteCommentRequest {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        currentUserId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class DeleteByObjectId extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): DeleteByObjectId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteByObjectId.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteByObjectId): DeleteByObjectId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteByObjectId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteByObjectId;
    static deserializeBinaryFromReader(message: DeleteByObjectId, reader: jspb.BinaryReader): DeleteByObjectId;
}

export namespace DeleteByObjectId {
    export type AsObject = {
        Id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class GetPostsRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setIdsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GetPostsRequest;
    addIds(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.Int32Value): GetPostsRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.Int32Value): GetPostsRequest;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): google_protobuf_wrappers_pb.StringValue | undefined;
    setFilter(value?: google_protobuf_wrappers_pb.StringValue): GetPostsRequest;

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMatch(value?: google_protobuf_wrappers_pb.StringValue): GetPostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostsRequest): GetPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostsRequest;
    static deserializeBinaryFromReader(message: GetPostsRequest, reader: jspb.BinaryReader): GetPostsRequest;
}

export namespace GetPostsRequest {
    export type AsObject = {
        IdsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        page?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        filter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        match?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}
