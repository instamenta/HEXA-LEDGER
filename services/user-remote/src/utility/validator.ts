import {ObjectId} from 'bson';
import {Types} from 'mongoose';
import MongooseUserModel from '../model/schema/user-schema';
import BCRYPT from 'bcrypt';
import {IError, IUser} from './types/base-types';

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
		if (!page || page < 0 ||
            !limit || limit <= 0 ||
            Number.isNaN(page) ||
            Number.isNaN(limit)
		) {
			throw new Error(`Invalid filters - page : ${page} ${typeof page}, limit : ${limit} ${typeof limit}`);
		}
	}

	/**
	 * @param u
	 * @throws
	 */
	public static VALIDATE_USER(
		u: IUser | null | undefined | any
	): void {
		if (typeof u !== 'object') {
			throw new TypeError('User not found');
		}
	}

	/**
	 * @param _id
	 * @throws
	 */
	public static VALIDATE_ID(
		_id: ObjectId | string | null
	): void {
		if (!_id || !Types.ObjectId.isValid(_id)) {
			throw new Error(`Invalid _id : ${_id}`);
		}
	}

	/**
	 * @param _id
	 * @returns
	 * @throws
	 */
	public static CONVERT_TO_OBJECT_ID(
		_id: ObjectId | string | null
	): ObjectId {
		if (!_id || !Types.ObjectId.isValid(_id)) {
			throw new Error('Invalid User id');
		} else {
			return new ObjectId(_id);
		}
	}

	/**
	 * @param password
	 * @param u
	 * @throws
	 * @async
	 */
	public static async VALIDATE_PASSWORD(
		password: string | null,
		u: IUser | any
	): Promise<void> {
		if (!u || !password || !(await BCRYPT.compare(password, u.password))) {
			throw new Error('Login Error');
		}
	}

	/**
	 * @param username
	 * @param email
	 * @param password
	 * @returns
	 * @throws
	 */
	public static async VALIDATE_REGISTER(
		username: string | null,
		email: string | null,
		password: string | null
	): Promise<IUser> {

		if (!username || username.length <= 3 ||
            !password || password.length <= 6 ||
            !email || email.length <= 6 ||
            !email.includes('@') || !email.includes('.')
		) {
			throw new Error('Register Error');
		}
		return MongooseUserModel.create({username, email, password})
			.catch(error => this['THROWER']('Register error: ', error));
	}

	/**
	 * @param message
	 * @param error
	 * @throws
	 */
	public static THROWER(message: string, error: IError = '!'): never {
		throw new Error(message, error);
	}
}

export default Validator;