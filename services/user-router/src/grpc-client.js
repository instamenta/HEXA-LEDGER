const GRPC = require('@grpc/grpc-js')
	, {UserServiceClient} = require('./generated/users_grpc_pb')
	, CLIENT = new UserServiceClient('user-remote:50051', GRPC.credentials.createInsecure())
	, {LoginForm, RegisterForm} = require('./generated/users_pb')
	, {StringValue} = require('google-protobuf/google/protobuf/wrappers_pb')
	, UserClass = require('./models/userClass')
;

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserClass>}
 */
function loginUser(email, password) {
	return new Promise((resolve, reject) => {
		const m = new LoginForm();
		m.setEmail(new StringValue().setValue(email.toString()));
		m.setPassword(new StringValue().setValue(password.toString()));
		CLIENT.login(m, (err, response) =>
			err ? reject(err.message)
				: resolve(UserClass.fromUserGRPCMessage(response)));
	});
}

/**
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserClass>}
 */
async function registerUser(username, email, password) {
	return new Promise((resolve, reject) => {
		const m = new RegisterForm();
		m.setUsername(new StringValue().setValue(username.toString()));
		m.setEmail(new StringValue().setValue(email.toString()));
		m.setPassword(new StringValue().setValue(password.toString()));
		CLIENT.register(m, (err, response) =>
			err ? reject(err.message)
				: resolve(UserClass.fromUserGRPCMessage(response)));
	});
}

module.exports = {registerUser, loginUser};
