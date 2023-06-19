'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 35,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    picture: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png'
    },
    followers: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});
/**
 * Pre-save hook to hash the password before saving the user.
 * @returns {Promise<void>}
 */
UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const SALT = await bcrypt_1.default.genSalt(10);
        this.password = await bcrypt_1.default.hash(this.password, SALT);
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const UserModel = mongoose_1.default.model('User', UserSchema);
exports.default = UserModel;
