/** @file Used for validation post or comment data. */
import {ObjectId} from 'bson';
import {Types} from 'mongoose';
import {IComment, IPost, IUser} from './types/base-types';
import MongoosePostModel from '../model/schema/post-schema';
import MongooseCommentModel from '../model/schema/comment-schema';

class Validator {
    /**
     * @param page
     * @param limit
     * @throws
     */
    public static VALIDATE_FILTERS(
        page: number | null,
        limit: number | null
    ): void {
        if (!page || page < 0 || Number.isNaN(page)
            || !limit || limit <= 0 || Number.isNaN(limit)
        ) {
            throw new Error(`Invalid filters - page : ${page} ${typeof page}, limit : ${limit} ${typeof limit}`);
        }
    }

    /**
     * @param u
     * @throws
     */
    public static VALIDATE_USER(u: IUser | null | undefined | any): void {
        if (!u) {
            throw new Error('User not found');
        }
    }

    /**
     * @param _id
     * @throws
     */
    public static VALIDATE_ID(_id: ObjectId | string | null): void {
        if (!_id || !Types.ObjectId.isValid(_id)) {
            throw new Error(`Invalid _id : ${_id}`);
        }
    }

    /**
     * @param _id
     * @returns
     * @throws
     */
    public static CONVERT_TO_OBJECT_ID(_id: any): ObjectId {
        if (!_id || !Types.ObjectId.isValid(_id)) {
            throw new Error('Invalid User id');
        } else {
            return new ObjectId(_id);
        }
    }

    /**
     * @param message
     * @param error
     * @throws
     */
    public static THROWER(message: string, error: Error | any = '!'): never {
        console.log(message, error);
        throw new Error(message, error);
    }


    /**
     * @param o
     * @param o.author
     * @param o.title
     * @param o.description
     * @param o.pictures
     * @param o.isPromoted
     * @param o.tags
     * @returns
     * @throws
     */
    public static VALIDATE_CREATE_POST({author, title, description, pictures, isPromoted, tags}: {
        author: ObjectId;
        title: string | null;
        description: string | null;
        pictures: Array<string>;
        isPromoted: boolean;
        tags: Array<string>;
    }): IPost {
        if (!title || title.length <= 1) {
            throw new Error(`ERROR WHILE REGISTERING USER: invalid input: ${title}`);
        }
        return <any>MongoosePostModel.create({
            author,
            title,
            description,
            pictures,
            isPromoted,
            tags,
        }).catch((error) => this['THROWER']('ERROR WHILE CREATING POST: ', error));
    }

    /**
     * @param content
     * @param authorId
     * @param postId
     * @returns
     * @throws
     */
    public static VALIDATE_CREATE_COMMENT(
        content: string,
        authorId: ObjectId,
        postId: ObjectId,
    ): IComment | never {
        if (!content || content.length <= 0) {
            throw new Error(`ERROR WHILE CREATING COMMENT: invalid input: ${content}`);
        }
        return <any>MongooseCommentModel.create({
            content,
            authorId,
            postId,
        }).catch((error) => this['THROWER']('ERROR WHILE CREATING POST: ', error));
    }


    /**
     * @param title
     * @throws
     */
    public static VALIDATE_POST_DATA(
        title: string | null,
    ): void {
        if (!title || title.length <= 1) {
            throw new Error(`ERROR WHILE UPDATING POST: invalid input: ${title}`);
        }
    }

    /**
     * @param content
     * @throws
     */
    public static VALIDATE_COMMENT_DATA(
        content: string | null,
    ): void {
        if (!content || content.length <= 0) {
            throw new Error(`ERROR WHILE UPDATING COMMENT: invalid input: ${content}`);
        }
    }

    /**
     * @param p
     * @throws
     */
    public static VALIDATE_POST(
        p: IPost | null | undefined | any
    ): void {
        if (typeof p !== 'object') {
            throw new TypeError('USER NOT FOUND');
        }
    }

}

export default Validator;