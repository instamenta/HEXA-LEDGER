// const USER_MODEL = require('../model/user-model')
// 	, BCRYPT = require('bcrypt')
// , {generateToken} = require('../utilities/token-tools')
// , {Request, Response} = require('express')
// , {sendMessage} = require('../producer');
const {registerUser, loginUser} = require('../grpc-client');

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function register(request, response) {
	try {
		const {username, email, password} = request.body;

		const status = await registerUser(username, email, password)
			.catch((error) => {
				throw new Error('Register Error: ', error.message);
			});
		console.table(status);

	} catch (error) {
		console.log(error);
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
		loginUser(username, password);
		// await sendMessage({username, password}, 'LOGIN');
		// const User = await USER_MODEL.findOne({username});
		//
		// if (!User || !password || !username) {
		// 	throw new Error('Invalid username or password');
		// }
		//
		// if (await BCRYPT.compare(password, User.password)) {
		// 	const token = await generateToken(User);
		// 	response.cookie('accessToken', token, {httpOnly: true});
		// 	response.json({
		// 		_id: User._id,
		// 		username: User.username,
		// 		email: User.email,
		// 		token: token,
		// 	}).status(200).end();
		// } else {
		// 	throw new Error('Invalid username or password');
		// }
	} catch (error) {
		console.error(error);
		response.json({message: error.message})
			.status(400).end();
	}
}

module.exports = {login, register};
