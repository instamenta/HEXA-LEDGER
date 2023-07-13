"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class Validator {
    /**
     * @param page
     * @param limit
     * @throws
     */
    static VALIDATE_FILTERS(page, limit) {
        if (!page || page < 0 || !limit || limit <= 0 ||
            Number.isNaN(page) || Number.isNaN(limit)) {
            throw new Error(`Invalid filters - page : ${page} ${typeof page}, limit : ${limit} ${typeof limit}`);
        }
    }
    /**
     * @param u
     * @throws
     */
    static VALIDATE_USER(u) {
        if (typeof u !== 'object') {
            throw new TypeError('User not found');
        }
    }
    /**
     * @param _id
     * @throws
     */
    static VALIDATE_ID(_id) {
        if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
            throw new Error(`Invalid _id : ${_id}`);
        }
    }
    /**
     * @param _id
     * @returns
     * @throws
     */
    static CONVERT_TO_OBJECT_ID(_id) {
        if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
            throw new Error('Invalid User id');
        }
        else {
            return new bson_1.ObjectId(_id);
        }
    }
    /**
     * @param password
     * @param u
     * @throws
     * @async
     */
    static async VALIDATE_PASSWORD(password, u) {
        if (!u || !password || !(await bcrypt_1.default.compare(password, u.password))) {
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
    static async VALIDATE_REGISTER(username, email, password) {
        if (!username || username.length <= 3 ||
            !password || password.length <= 6 ||
            !email || email.length <= 6 ||
            !email.includes('@') || !email.includes('.')) {
            throw new Error('Register Error');
        }
        return user_schema_1.default.create({ username, email, password })
            .catch(error => this['THROWER']('Register error: ', error));
    }
    /**
     * @param message
     * @param error
     * @throws
     */
    static THROWER(message, error = '!') {
        throw new Error(message, error);
    }
}
exports.default = Validator;
