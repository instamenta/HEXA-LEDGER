'use strict';
const {StringValue} = require('google-protobuf/google/protobuf/wrappers_pb')
	, proto = require('../generated/users_pb')
;

class UserClass {
	/**
	 * @param {object} userData
	 * @param {string} userData._id
	 * @param {string} userData.username
	 * @param {string} userData.email
	 * @param {string} userData.password
	 * @param {string} userData.picture
	 * @param {string} userData.token
	 */
	constructor(userData) {
		({
			_id: this._id,
			username: this.username,
			email: this.email,
			password: this.password,
			picture: this.picture,
			token: this.token,
		} = userData);
	}

	/**
	 * @param {!proto.user.UserModel} m
	 * @returns {UserClass}
	 */
	static fromUserGRPCMessage(m) {
		return new UserClass({
			_id: m.hasId() ? m.getId().getValue() : null,
			username: m.hasUsername() ? m.getUsername().getValue() : null,
			email: m.hasEmail() ? m.getEmail().getValue() : null,
			password: m.hasPassword() ? m.getPassword().getValue() : null,
			picture: m.hasPicture() ? m.getPicture().getValue() : null,
			token: m.hasToken() ? m.getToken().getValue() : null,
		});
	}
}

module.exports = UserClass;
