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