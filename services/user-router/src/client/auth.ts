import * as GRPC from '@grpc/grpc-js';
import CLIENT from '../grpc-client';
import {UserModel} from '../generated/types/users_pb';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import UserClass from '../models/userClass';

const {LoginForm, RegisterForm} = require('../generated/users_pb');

/**
 * @param email
 * @param password
 * @returns
 */
function loginUser(email: string, password: string): Promise<UserClass> {
	return new Promise((resolve, reject) => {
		const m = new LoginForm();
		m.setEmail(new StringValue().setValue(email));
		m.setPassword(new StringValue().setValue(password));

		CLIENT.login(m, (err: GRPC.ServiceError, response: UserModel) => {
			err ? reject(err.message)
				: resolve(UserClass.fromUserGRPCMessage(response));
		});
	});
}

/**
 * @param username
 * @param email
 * @param password
 * @returns
 */
function registerUser(username: string, email: string, password: string,): Promise<UserClass> {
	return new Promise((resolve, reject) => {
		const m = new RegisterForm();
		m.setUsername(new StringValue().setValue(username));
		m.setEmail(new StringValue().setValue(email));
		m.setPassword(new StringValue().setValue(password));

		CLIENT.register(m, (err: GRPC.ServiceError, response: UserModel) => {
			err ? reject(err.message)
				: resolve(UserClass.fromUserGRPCMessage(response));
		});
	});
}

export {registerUser, loginUser};
