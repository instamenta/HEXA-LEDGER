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
 * @param {UserModel} USER
 * @returns {Promise<string>}
 */
async function GENERATE_TOKEN(USER) {
	const PAYLOAD = {
		username: USER.username,
		_id: USER._id,
	};

	return await JWT.sign(PAYLOAD, TOKEN_SECRET, {
		expiresIn: '60 days'
	});
}

/**
 * @param {string} TOKEN
 * @returns {Promise<string>}
 */
async function DECODE_TOKEN(TOKEN) {
	if (TOKEN) {
		return await JWT.decode(TOKEN, TOKEN_SECRET);
	} else {
		return 'NO_TOKEN';
	}
}

module.exports = {GENERATE_TOKEN, DECODE_TOKEN};
