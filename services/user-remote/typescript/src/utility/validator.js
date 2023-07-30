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
    static VALIDATE_FILTERS(page, limit) {
        if (!page || page < 0 || !limit || limit <= 0 ||
            Number.isNaN(page) || Number.isNaN(limit)) {
            throw new Error(`INVALID FILTERS - PAGE : ${page} ${typeof page}, LIMIT : ${limit} ${typeof limit}`);
        }
    }
    static VALIDATE_USER(u) {
        if (typeof u !== 'object') {
            throw new TypeError('USER NOT FOUND');
        }
    }
    static VALIDATE_ID(_id) {
        if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
            throw new Error(`INVALID ID _id : ${_id}`);
        }
    }
    static CONVERT_TO_OBJECT_ID(_id) {
        if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
            throw new Error(`INVALID USER _id : ${_id}`);
        }
        else {
            return new bson_1.ObjectId(_id);
        }
    }
    static async VALIDATE_PASSWORD(password, u) {
        if (!u || !password || !(await bcrypt_1.default.compare(password, u.password))) {
            throw new Error('ERROR WHILE LOGGING IN USER');
        }
    }
    static async VALIDATE_REGISTER(username, email, password) {
        if (!username || username.length <= 3 ||
            !password || password.length <= 6 ||
            !email || email.length <= 6 ||
            !email.includes('@') || !email.includes('.')) {
            throw new Error('ERROR WHILE REGISTERING USER: invalid input: ');
        }
        return await user_schema_1.default.create({ username, email, password })
            .catch((error) => this['THROWER']('ERROR WHILE REGISTERING USER: ', error));
    }
    static THROWER(message, error = '!') {
        throw new Error(message, error);
    }
    static VALIDATE_USER_DATA(username, email, password) {
        if (!username || username.length <= 3 ||
            !password || password.length <= 6 ||
            !email || email.length <= 6 ||
            !email.includes('@') || !email.includes('.')) {
            throw new Error('ERROR WHILE UPDATING USER');
        }
    }
}
exports.default = Validator;