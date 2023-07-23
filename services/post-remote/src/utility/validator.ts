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
	): Error | void {
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
		if (!u == null) {
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
		throw new Error(message, error);
	}

	/**
	 * @param authorId
	 * @param  title
	 * @param  description
	 * @param  pictures
	 * @param isPromoted
	 * @param tags
	 * @returns
	 */
	public static async VALIDATE_CREATE_POST(
		authorId: ObjectId,
		title: string | null,
		description: string | null,
		pictures: Array<string>,
		isPromoted: boolean,
		tags: Array<string>,
	): Promise<IPost> {

		if (!title || title.length <= 1) {
			throw new Error('ERROR WHILE REGISTERING USER: invalid input: ');
		}
		return MongoosePostModel.create({
			authorId,
			title,
			description,
			pictures,
			isPromoted,
			tags,
		}).catch(error => this['THROWER']('ERROR WHILE CREATING POST: ', error));
	}

	/**
	 * @param content
	 * @param  authorId
	 * @param  postId
	 * @returns
	 */
	public static async VALIDATE_CREATE_COMMENT(
		content: string,
		authorId: ObjectId,
		postId: ObjectId,
	): Promise<IComment> {

		if (!content || content.length <= 0) {
			throw new Error(`ERROR WHILE CREATING COMMENT: invalid input: ${content}`);
		}
		return MongooseCommentModel.create({
			content,
			authorId,
			postId,
		}).catch(error => this['THROWER']('ERROR WHILE CREATING POST: ', error));
	}


	/**
	 * @param  title
	 */
	public static VALIDATE_POST_DATA(
		title: string | null,
	): void {
		if (!title || title.length <= 1) {
			throw new Error(`ERROR WHILE UPDATING POST: invalid input: ${title}`);
		}
	}

	/**
	 * @param  content
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