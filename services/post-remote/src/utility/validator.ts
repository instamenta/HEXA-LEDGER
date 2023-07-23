import {ObjectId} from 'bson';
import {Types} from 'mongoose';
import {IUser} from './types/base-types';

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
    public static CONVERT_TO_OBJECT_ID(_id: ObjectId | string | null): ObjectId {
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
}

export default Validator;