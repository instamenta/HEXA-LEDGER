'use strict';

const MONGOOSE = require('mongoose')
	, BCRYPT = require('bcrypt')
	, {ObjectId} = require('bson')
;
/**
 * @typedef {Object} UserModelSchema
 * @property {ObjectId} _id
 * @property {string} username
 * @property {string} email
 * @property {string} password
 */


const UserSchema = MONGOOSE.Schema({
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
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
});
/**
 * Pre-save hook to hash the password before saving the user.
 * @memberof UserModelSchema
 * @returns {Promise<void>}
 */
UserSchema.pre('save', async function () {
	const SALT = await BCRYPT.genSalt(10);
	this.password = await BCRYPT.hash(this.password, SALT);
});
/**
 * @type {MONGOOSE.Model<UserModelSchema>}
 */
const UserModelSchema = MONGOOSE.model('User', UserSchema);

module.exports = UserModelSchema;