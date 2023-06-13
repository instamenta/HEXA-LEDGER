const USER_MODEL = require('../model/user-model')
	, BCRYPT = require('bcrypt')
	, {GENERATE_TOKEN} = require('../utilities/token-tools')
	, {Request, Response} = require('express')
;

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function REGISTER(request, response) {
	const {username, email, password} = request.body;

	const USER = await USER_MODEL.create({
		username,
		email,
		password,
	});
	if (USER) {
		response.status(200).json({
			_id: USER._id,
			username: USER.username,
			email: USER.email,
			token: await GENERATE_TOKEN(USER),
		}).end();
	} else {
		response.status(400).end(JSON.stringify({
			message: 'Invalid credentials'
		}));
	}
}

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function LOGIN(request, response) {

	const {username, password} = request.body;
	const USER = await USER_MODEL.findOne({username});

	if (!USER || !password || !username) {
		return response.status(400).end(JSON.stringify({
			message: 'Invalid username or password'
		}));
	}

	if (await BCRYPT.compare(password, USER.password)) {
		const TOKEN = await GENERATE_TOKEN(USER);
		response.cookie('accessToken', TOKEN, {httpOnly: true});

		response.status(200).json({
			_id: USER._id,
			username: USER.username,
			email: USER.email,
			token: TOKEN,
		}).end();
	} else {
		response.status(400).end(JSON.stringify({
			message: 'Invalid username or password'
		}));
	}
}

module.exports = {LOGIN, REGISTER};
