/** @file Holds basic Typescript types and interfaces. */

import {ObjectId} from 'bson';
import {Document} from 'mongoose';

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

export interface IUserDB {
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

export type IError = Error | any;

export type strnum = string | number;
