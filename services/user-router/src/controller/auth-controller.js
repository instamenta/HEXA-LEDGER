const USER_MODEL = require('../model/user-model')
	, BCRYPT = require('bcrypt')
	, {generateToken} = require('../utilities/token-tools')
	, {Request, Response} = require('express')
	, {sendMessage} = require('../producer');


/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function register(request, response) {
	try {
		const {username, email, password} = request.body;
		await sendMessage({username, email, password}, 'REGISTER');
		const User = await USER_MODEL.create({
			username,
			email,
			password,
		});
		if (User) {
			response.json({
				_id: User._id,
				username: User.username,
				email: User.email,
				token: await generateToken(User),
			}).status(200).end();
		} else {
			throw new Error('Invalid credentials');
		}
	} catch (error) {
		response.json({message: error.message})
			.status(400).end();
	}
}

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function login(request, response) {
	try {
		const {username, password} = request.body;
		await sendMessage({username, password}, 'LOGIN');
		const User = await USER_MODEL.findOne({username});

		if (!User || !password || !username) {
			throw new Error('Invalid username or password');
		}

		if (await BCRYPT.compare(password, User.password)) {
			const token = await generateToken(User);
			response.cookie('accessToken', token, {httpOnly: true});
			response.json({
				_id: User._id,
				username: User.username,
				email: User.email,
				token: token,
			}).status(200).end();
		} else {
			throw new Error('Invalid username or password');
		}
	} catch (error) {
		response.json({message: error.message})
			.status(400).end();
	}
}

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function validate(request, response) {
	console.log('valid');
	response.end();
}

module.exports = {login, register, validate};
