"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRegister = exports.ValidatePassword = exports.CovertToObjectId = exports.ValidateId = exports.ValidateFilters = exports.ValidateUser = void 0;
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * @param id
 * @param page
 * @param limit
 * @throws
 */
function VALIDATE_FILTERS(id, page, limit) {
    if (!id || !mongoose_1.Types.ObjectId.isValid(id)
        || !page || page > 0 || Number.isNaN(page)
        || !limit || limit > 0 || Number.isNaN(limit)) {
        throw new Error('Invalid User id');
    }
}
exports.ValidateFilters = VALIDATE_FILTERS;
/**
 * @param u
 * @throws
 */
function VALIDATE_USER(u) {
    if (!u) {
        throw new Error('User not found');
    }
}
exports.ValidateUser = VALIDATE_USER;
/**
 * @param _id
 * @throws
 */
function VALIDATE_ID(_id) {
    if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
        throw new Error(`Invalid _id : ${_id}`);
    }
}
exports.ValidateId = VALIDATE_ID;
/**
 * @param _id
 * @returns
 * @throws
 */
function CONVERT_TO_OBJECT_ID(_id) {
    if (!_id || !mongoose_1.Types.ObjectId.isValid(_id)) {
        throw new Error('Invalid User id');
    }
    else {
        return new bson_1.ObjectId(_id);
    }
}
exports.CovertToObjectId = CONVERT_TO_OBJECT_ID;
/**
 * @param password
 * @param u
 * @throws
 * @async
 */
async function VALIDATE_PASSWORD(password, u) {
    if (!u || !password || !(await bcrypt_1.default.compare(password, u.password))) {
        throw new Error('Login Error');
    }
}
exports.ValidatePassword = VALIDATE_PASSWORD;
/**
 * @param username
 * @param email
 * @param password
 * @returns
 * @throws
 */
async function VALIDATE_REGISTER(username, email, password) {
    if (!username
        || username.length <= 3
        || !email
        || email.length <= 6
        || !email.includes('@')
        || !email.includes('.')
        || !password
        || password.length <= 6) {
        throw new Error('Register Error');
    }
    return await user_schema_1.default.create({ username, email, password })
        .catch(error => {
        throw new Error('Register error: ', error);
    });
}
exports.ValidateRegister = VALIDATE_REGISTER;
