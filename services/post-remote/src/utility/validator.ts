import {ObjectId} from 'bson';
import {Types} from 'mongoose';
import {IUser} from '../model/user-schema';

export {
    VALIDATE_USER as ValidateUser,
    VALIDATE_FILTERS as ValidateFilters,
    VALIDATE_ID as ValidateId,
    CONVERT_TO_OBJECT_ID as CovertToObjectId,
    THROWER as Thrower,
};

/**
 * @param page
 * @param limit
 * @throws
 */
function VALIDATE_FILTERS(
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
function VALIDATE_USER(
    u: IUser | null | undefined | any
): void {
    if (!u == null) {
        throw new Error('User not found');
    }
}

/**
 * @param _id
 * @throws
 */
function VALIDATE_ID(
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
function CONVERT_TO_OBJECT_ID(
    _id: ObjectId | string | null
): ObjectId {
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
function THROWER(message: string, error: Error | any = '!'): never {
    throw new Error(message, error);
}