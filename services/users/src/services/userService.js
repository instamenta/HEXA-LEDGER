const { User, LoginResponse, RegisterResponse } = require('../generated/users_pb');

function login(call, callback) {
    const { email, password } = call.request;

    // Perform login logic and generate token
    const token = 'generated_token';

    const response = new LoginResponse();
    response.setToken(token);

    callback(null, response);
}

function register(call, callback) {
    const { email, nickname, password } = call.request;

    // Perform registration logic
    const message = `User ${nickname} registered successfully`;

    const response = new RegisterResponse();
    response.setMessage(message);

    callback(null, response);
}

module.exports = {
    login,
    register,
};
