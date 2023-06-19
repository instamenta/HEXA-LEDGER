'use strict';

import MONGOOSE, {Document, Schema} from 'mongoose';
import BCRYPT from 'bcrypt';
import {ObjectId} from 'bson';

export interface IUser extends Document {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    picture: string;
    followers: ObjectId[];
    following: ObjectId[];
    comments: ObjectId[];
}

const UserSchema: Schema<IUser> = new MONGOOSE.Schema<IUser>({
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
			type: MONGOOSE.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	following: [
		{
			type: MONGOOSE.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	comments: [
		{
			type: MONGOOSE.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
});
/**
 * Pre-save hook to hash the password before saving the user.
 * @returns {Promise<void>}
 */
UserSchema.pre<IUser>('save', async function (next) {
	try {
		if (!this.isModified('password')) {
			return next();
		}

		const SALT = await BCRYPT.genSalt(10);
		this.password = await BCRYPT.hash(this.password, SALT);

		return next();
	} catch (error: Error | any) {
		return next(error);
	}
});


const UserModel = MONGOOSE.model<IUser>('User', UserSchema);

export default UserModel;
