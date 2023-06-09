import {Document, Schema} from "mongoose";
import {ObjectId} from "bson";

export type IError = Error | any;

export type strnum = string | number;

export interface IUser extends Document {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    picture: string;
    followers: Array<ObjectId>;
    following: Array<ObjectId>;
    comments: Array<ObjectId>;
    posts: Array<ObjectId>;
}

export interface IPost extends Document {
    title: string;
    description: string;
    author: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    upvotes: Array<Schema.Types.ObjectId>;
    downvotes: Array<Schema.Types.ObjectId>;
    comments: Array<Schema.Types.ObjectId>;
    tags: Array<string>;

    isPromoted: boolean;
    promotionAmount: number;

    tronTransaction: Array<string>;
    ethereumTransaction: Array<string>;
    donations: Array<Schema.Types.ObjectId>;
    pictures: Array<string>;

    transactionsCount: number;
    donationsCount: number;
    commentsCount: number;
    upvotesCount: number;
    downvotesCount: number;
}

export interface IExtractedUserModel {
    _id?: string | null;
    username?: string | null;
    email?: string | null;
    password?: string | null;
    picture?: string | null;
    followers: Array<string> | [];
    following: Array<string> | [];
    comments?: Array<string> | [];
}

export interface IComment extends Document {
    _id: ObjectId;
    ownerId: ObjectId;
    postId: ObjectId;
    upvotes: Array<ObjectId>;
    downvotes: Array<ObjectId>;
    subcomments: Array<ObjectId>;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    wasEdited: boolean;
}