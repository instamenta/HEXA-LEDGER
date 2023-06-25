import {Document} from "mongoose";
import {ObjectId} from "bson";

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