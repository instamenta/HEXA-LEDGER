'use strict';
require('dotenv').config();

const JWT = require('jsonwebtoken')
	, TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET'
	, {ObjectId} = require('bson')
;

/**
 * @typedef {object} UserModel
 * @property {ObjectId} _id
 * @property {string} username
 * @property {string} email
 */

/**
 * @param {UserModel} User
 * @returns {Promise<string>}
 */
function generateToken(User) {
	const PAYLOAD = {
		username: User.username,
		email: User.email,
		_id: User._id,
	};
	return JWT.sign(PAYLOAD, TOKEN_SECRET, {
		expiresIn: '60 days'
	});
}

/**
 * @param {string} token
 * @returns {Promise<string|UserModel>}
 */
function decodeToken(token) {
	return JWT.decode(token, TOKEN_SECRET);
}

/**
 * @param {string} token
 * @returns {string}
 */
function verifyToken(token) {
	return JWT.verify(token, TOKEN_SECRET);
}

module.exports = {generateToken, decodeToken, verifyToken};
