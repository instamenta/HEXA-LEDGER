// package: threads
// file: threads.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PingPongMessage extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): PingPongMessage;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTimestamp(value?: google_protobuf_wrappers_pb.Int64Value): PingPongMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingPongMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PingPongMessage): PingPongMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingPongMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingPongMessage;
    static deserializeBinaryFromReader(message: PingPongMessage, reader: jspb.BinaryReader): PingPongMessage;
}

export namespace PingPongMessage {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        timestamp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class ThreadModel extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
    setContent(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;
    clearImagesList(): void;
    getImagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setImagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ThreadModel;
    addImages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreatedAt(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUpdatedAt(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOwner(value?: google_protobuf_wrappers_pb.StringValue): ThreadModel;

    hasDeleted(): boolean;
    clearDeleted(): void;
    getDeleted(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDeleted(value?: google_protobuf_wrappers_pb.BoolValue): ThreadModel;
    clearPromotedList(): void;
    getPromotedList(): Array<PromotedObject>;
    setPromotedList(value: Array<PromotedObject>): ThreadModel;
    addPromoted(value?: PromotedObject, index?: number): PromotedObject;
    clearDonationsList(): void;
    getDonationsList(): Array<DonationObject>;
    setDonationsList(value: Array<DonationObject>): ThreadModel;
    addDonations(value?: DonationObject, index?: number): DonationObject;
    clearLikesList(): void;
    getLikesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setLikesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ThreadModel;
    addLikes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearDislikesList(): void;
    getDislikesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setDislikesList(value: Array<google_protobuf_wrappers_pb.StringValue>): ThreadModel;
    addDislikes(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearTagsList(): void;
    getTagsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTagsList(value: Array<google_protobuf_wrappers_pb.StringValue>): ThreadModel;
    addTags(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasLikesCount(): boolean;
    clearLikesCount(): void;
    getLikesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setLikesCount(value?: google_protobuf_wrappers_pb.UInt64Value): ThreadModel;

    hasDislikesCount(): boolean;
    clearDislikesCount(): void;
    getDislikesCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setDislikesCount(value?: google_protobuf_wrappers_pb.UInt64Value): ThreadModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThreadModel.AsObject;
    static toObject(includeInstance: boolean, msg: ThreadModel): ThreadModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThreadModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThreadModel;
    static deserializeBinaryFromReader(message: ThreadModel, reader: jspb.BinaryReader): ThreadModel;
}

export namespace ThreadModel {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        content?: google_protobuf_wrappers_pb.StringValue.AsObject,
        imagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        createdAt?: google_protobuf_wrappers_pb.StringValue.AsObject,
        updatedAt?: google_protobuf_wrappers_pb.StringValue.AsObject,
        owner?: google_protobuf_wrappers_pb.StringValue.AsObject,
        deleted?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        promotedList: Array<PromotedObject.AsObject>,
        donationsList: Array<DonationObject.AsObject>,
        likesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        dislikesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        tagsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        likesCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        dislikesCount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class PromotedObject extends jspb.Message { 

    hasPromoter(): boolean;
    clearPromoter(): void;
    getPromoter(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPromoter(value?: google_protobuf_wrappers_pb.StringValue): PromotedObject;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDate(value?: google_protobuf_wrappers_pb.StringValue): PromotedObject;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.UInt64Value): PromotedObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromotedObject.AsObject;
    static toObject(includeInstance: boolean, msg: PromotedObject): PromotedObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromotedObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromotedObject;
    static deserializeBinaryFromReader(message: PromotedObject, reader: jspb.BinaryReader): PromotedObject;
}

export namespace PromotedObject {
    export type AsObject = {
        promoter?: google_protobuf_wrappers_pb.StringValue.AsObject,
        date?: google_protobuf_wrappers_pb.StringValue.AsObject,
        amount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class DonationObject extends jspb.Message { 

    hasDonator(): boolean;
    clearDonator(): void;
    getDonator(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDonator(value?: google_protobuf_wrappers_pb.StringValue): DonationObject;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDate(value?: google_protobuf_wrappers_pb.StringValue): DonationObject;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.UInt64Value): DonationObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DonationObject.AsObject;
    static toObject(includeInstance: boolean, msg: DonationObject): DonationObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DonationObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DonationObject;
    static deserializeBinaryFromReader(message: DonationObject, reader: jspb.BinaryReader): DonationObject;
}

export namespace DonationObject {
    export type AsObject = {
        donator?: google_protobuf_wrappers_pb.StringValue.AsObject,
        date?: google_protobuf_wrappers_pb.StringValue.AsObject,
        amount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class CreateRequest extends jspb.Message { 

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): CreateRequest;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDescription(value?: google_protobuf_wrappers_pb.StringValue): CreateRequest;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_wrappers_pb.StringValue | undefined;
    setContent(value?: google_protobuf_wrappers_pb.StringValue): CreateRequest;

    hasOwner(): boolean;
    clearOwner(): void;
    getOwner(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOwner(value?: google_protobuf_wrappers_pb.StringValue): CreateRequest;
    clearImagesList(): void;
    getImagesList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setImagesList(value: Array<google_protobuf_wrappers_pb.StringValue>): CreateRequest;
    addImages(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;
    clearTagsList(): void;
    getTagsList(): Array<google_protobuf_wrappers_pb.StringValue>;
    setTagsList(value: Array<google_protobuf_wrappers_pb.StringValue>): CreateRequest;
    addTags(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

    hasIspromoted(): boolean;
    clearIspromoted(): void;
    getIspromoted(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setIspromoted(value?: google_protobuf_wrappers_pb.BoolValue): CreateRequest;

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuth(value?: google_protobuf_wrappers_pb.StringValue): CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        description?: google_protobuf_wrappers_pb.StringValue.AsObject,
        content?: google_protobuf_wrappers_pb.StringValue.AsObject,
        owner?: google_protobuf_wrappers_pb.StringValue.AsObject,
        imagesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        tagsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
        ispromoted?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        auth?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class AmountWithAuthRequest extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAuth(value?: google_protobuf_wrappers_pb.StringValue): AmountWithAuthRequest;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.UInt64Value): AmountWithAuthRequest;

    hasThreadId(): boolean;
    clearThreadId(): void;
    getThreadId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setThreadId(value?: google_protobuf_wrappers_pb.StringValue): AmountWithAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AmountWithAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AmountWithAuthRequest): AmountWithAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AmountWithAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AmountWithAuthRequest;
    static deserializeBinaryFromReader(message: AmountWithAuthRequest, reader: jspb.BinaryReader): AmountWithAuthRequest;
}

export namespace AmountWithAuthRequest {
    export type AsObject = {
        auth?: google_protobuf_wrappers_pb.StringValue.AsObject,
        amount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        threadId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class Pagination extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setPage(value?: google_protobuf_wrappers_pb.UInt64Value): Pagination;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setLimit(value?: google_protobuf_wrappers_pb.UInt64Value): Pagination;

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
        page?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        limit?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class WalletWithAuthRequest extends jspb.Message { 

    hasWallet(): boolean;
    clearWallet(): void;
    getWallet(): google_protobuf_wrappers_pb.StringValue | undefined;
    setWallet(value?: google_protobuf_wrappers_pb.StringValue): WalletWithAuthRequest;

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): WalletWithAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WalletWithAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WalletWithAuthRequest): WalletWithAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WalletWithAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WalletWithAuthRequest;
    static deserializeBinaryFromReader(message: WalletWithAuthRequest, reader: jspb.BinaryReader): WalletWithAuthRequest;
}

export namespace WalletWithAuthRequest {
    export type AsObject = {
        wallet?: google_protobuf_wrappers_pb.StringValue.AsObject,
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class IdRequest extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): IdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IdRequest): IdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdRequest;
    static deserializeBinaryFromReader(message: IdRequest, reader: jspb.BinaryReader): IdRequest;
}

export namespace IdRequest {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class StatsModel extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): google_protobuf_wrappers_pb.StringValue | undefined;
    setId(value?: google_protobuf_wrappers_pb.StringValue): StatsModel;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): StatsModel;
    clearPromotedList(): void;
    getPromotedList(): Array<PromotedStats>;
    setPromotedList(value: Array<PromotedStats>): StatsModel;
    addPromoted(value?: PromotedStats, index?: number): PromotedStats;
    clearDonationsList(): void;
    getDonationsList(): Array<DonationsStats>;
    setDonationsList(value: Array<DonationsStats>): StatsModel;
    addDonations(value?: DonationsStats, index?: number): DonationsStats;

    hasLikesCount(): boolean;
    clearLikesCount(): void;
    getLikesCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLikesCount(value?: google_protobuf_wrappers_pb.Int64Value): StatsModel;

    hasDislikesCount(): boolean;
    clearDislikesCount(): void;
    getDislikesCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDislikesCount(value?: google_protobuf_wrappers_pb.Int64Value): StatsModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatsModel.AsObject;
    static toObject(includeInstance: boolean, msg: StatsModel): StatsModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatsModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatsModel;
    static deserializeBinaryFromReader(message: StatsModel, reader: jspb.BinaryReader): StatsModel;
}

export namespace StatsModel {
    export type AsObject = {
        id?: google_protobuf_wrappers_pb.StringValue.AsObject,
        name?: google_protobuf_wrappers_pb.StringValue.AsObject,
        promotedList: Array<PromotedStats.AsObject>,
        donationsList: Array<DonationsStats.AsObject>,
        likesCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        dislikesCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class PromotedStats extends jspb.Message { 

    hasCount(): boolean;
    clearCount(): void;
    getCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setCount(value?: google_protobuf_wrappers_pb.UInt64Value): PromotedStats;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.UInt64Value): PromotedStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PromotedStats.AsObject;
    static toObject(includeInstance: boolean, msg: PromotedStats): PromotedStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PromotedStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PromotedStats;
    static deserializeBinaryFromReader(message: PromotedStats, reader: jspb.BinaryReader): PromotedStats;
}

export namespace PromotedStats {
    export type AsObject = {
        count?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        amount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}

export class DonationsStats extends jspb.Message { 

    hasCount(): boolean;
    clearCount(): void;
    getCount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setCount(value?: google_protobuf_wrappers_pb.UInt64Value): DonationsStats;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setAmount(value?: google_protobuf_wrappers_pb.UInt64Value): DonationsStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DonationsStats.AsObject;
    static toObject(includeInstance: boolean, msg: DonationsStats): DonationsStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DonationsStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DonationsStats;
    static deserializeBinaryFromReader(message: DonationsStats, reader: jspb.BinaryReader): DonationsStats;
}

export namespace DonationsStats {
    export type AsObject = {
        count?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        amount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    }
}
