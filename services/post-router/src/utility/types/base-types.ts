/** @file Typescript interfaces and types. */
import {Request} from 'express';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';

export type ITokenData = {
    _id: string;
    username: string;
    email: string;
    picture: string;
    iat: number;
    exp: number;
}

export interface iRequestWithUser extends Request {
    userData: ITokenData;
}

export interface IPostData {
    _id: string | null;
    title: string | null;
    description: string | null;
    author: string | null;
    createdAt: Timestamp | Date | any;
    updatedAt: Timestamp | Date | any;
    upvotes: Array<string>;
    downvotes: Array<string>;
    comments: Array<string>;
    tags: Array<string>;

    isPromoted: boolean;

    tronTransaction: Array<string>;
    ethereumTransaction: Array<string>;
    donations: Array<string>;
    pictures: Array<string>;
}

export interface ICommentData extends Document {
    _id: string | null;
    authorId: string | null;
    postId: string | null;
    upvotes: Array<string>;
    downvotes: Array<string>;
    subcomments: Array<string>;
    content: string | null;
    wasEdited: boolean;
}

// CreatedAt: Timestamp | Date | any;
// UpdatedAt: Timestamp | Date | any;