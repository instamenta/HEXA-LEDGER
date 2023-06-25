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
    userData: ITokenData
}

export interface IPostData {
    _id: string | null;
    title: string | null;
    description: string | null;
    author: string | null;
    createdAt: Timestamp | null | undefined;
    updatedAt: Timestamp | null | undefined;
    upvotes: Array<string> | null;
    downvotes: Array<string> | null;
    comments: Array<string> | null;
    tags: Array<string> | null;

    isPromoted: boolean | null;
    promotionAmount: number | null;

    tronTransaction: Array<string> | null;
    ethereumTransaction: Array<string> | null;
    donations: Array<string> | null;
    pictures: Array<string> | null;

    transactionsCount: number | null;
    donationsCount: number | null;
    commentsCount: number | null;
    upvotesCount: number | null;
    downvotesCount: number | null;
}