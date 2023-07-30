"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Used for validation post or comment data. */
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const post_schema_1 = __importDefault(require("../model/schema/post-schema"));
const comment_schema_1 = __importDefault(require("../model/schema/comment-schema"));
class Validator {
    /**
     * @param page
     * @param limit
     * @throws
     */
    static VALIDATE_FILTERS(page, limit) {
        if (!page || page < 0 || Number.isNaN(page)
            || !limit || limit <= 0 || Number.isNaN(limit)) {
            throw new Error(`Invalid filters - page : ${page} ${typeof page}, limit : ${limit} ${typeof limit}`);
        }
    }
    /**
     * @param u
     * @throws
     */
    static VALIDATE_USER(u) {
        if (!u) {
            throw new Error('User not found');
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
     * @param message
     * @param error
     * @throws
     */
    static THROWER(message, error = '!') {
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
    static VALIDATE_CREATE_POST({ author, title, description, pictures, isPromoted, tags }) {
        if (!title || title.length <= 1) {
            throw new Error(`ERROR WHILE REGISTERING USER: invalid input: ${title}`);
        }
        return post_schema_1.default.create({
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
    static VALIDATE_CREATE_COMMENT(content, authorId, postId) {
        if (!content || content.length <= 0) {
            throw new Error(`ERROR WHILE CREATING COMMENT: invalid input: ${content}`);
        }
        return comment_schema_1.default.create({
            content,
            authorId,
            postId,
        }).catch((error) => this['THROWER']('ERROR WHILE CREATING POST: ', error));
    }
    /**
     * @param title
     * @throws
     */
    static VALIDATE_POST_DATA(title) {
        if (!title || title.length <= 1) {
            throw new Error(`ERROR WHILE UPDATING POST: invalid input: ${title}`);
        }
    }
    /**
     * @param content
     * @throws
     */
    static VALIDATE_COMMENT_DATA(content) {
        if (!content || content.length <= 0) {
            throw new Error(`ERROR WHILE UPDATING COMMENT: invalid input: ${content}`);
        }
    }
    /**
     * @param p
     * @throws
     */
    static VALIDATE_POST(p) {
        if (typeof p !== 'object') {
            throw new TypeError('USER NOT FOUND');
        }
    }
}
exports.default = Validator;