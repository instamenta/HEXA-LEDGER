const { User, LoginResponse, RegisterResponse } = require('../generated/users_pb');
const { handleUnaryCall, sendUnaryData} = require('@grpc/grpc-js')
/**
 *
 * @param {handleUnaryCall} call
 * @param {sendUnaryData} callback
 */
function login(call, callback) {
	const { email, password } = call.request;

	// Perform login logic and generate token
	const token = 'generated_token';

	const response = new LoginResponse();
	response.setToken(token);

	callback(null, response);
}

/**
 * @param {handleUnaryCall} call
 * @param {sendUnaryData} callback
 */
function register(call, callback) {
	const { email, username, password } = call.request;

	// Perform registration logic
	const message = `User ${username} registered successfully`;

	const response = new RegisterResponse();
	response.setMessage(message);

	callback(null, response);
}

module.exports = {
	login,
	register,
};
