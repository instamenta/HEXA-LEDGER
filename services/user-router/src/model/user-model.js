const MONGOOSE = require('mongoose')
	, BCRYPT = require('bcrypt')
;

const USER_SCHEMA = MONGOOSE.Schema({
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

USER_SCHEMA.pre('save', async function () {
	const SALT = await BCRYPT.genSalt(10);
	this.password = await BCRYPT.hash(this.password, SALT);
});

const USER_MODEL = MONGOOSE.model('User', USER_SCHEMA);

module.exports = USER_MODEL;