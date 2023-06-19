'use strict';

import {ServerUnaryCall, sendUnaryData} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import MongooseUserModel, {IUser} from '../models/user-schema';
import {generateToken} from '../utilities/token-tools';
import {compare as comparePasswords} from 'bcrypt';
import {
	LoginForm as ILoginForm,
	RegisterForm as IRegisterForm,
	UserModel as IUserModel
} from '../generated/types/users_pb';
const {UserModel} = require('../generated/users_pb');

/**
 * @param call
 * @param callback
 * @returns
 */
async function login(call: ServerUnaryCall<ILoginForm, IUserModel>, callback: sendUnaryData<IUserModel>) {
	const r = call.request;
	const o = {
		email: r.hasEmail() ? r.getEmail()!.getValue() : null,
		password: r.hasPassword() ? r.getPassword()!.getValue() : null,
	};
	try {
		const u: IUser | null = await MongooseUserModel.findOne({email: o.email});
		if (!u || o.password === null || !await comparePasswords(u.password, o.password)) {
			throw new Error('Login Error');
		}
		const userId: string = u['_id'].toString();
		const m: IUserModel = new UserModel();
		m.setId(new StringValue().setValue(userId));
		m.setUsername(new StringValue().setValue(u.username));
		m.setEmail(new StringValue().setValue(u.email));

		const TOKEN = await generateToken(u);
		m.setToken(new StringValue().setValue(TOKEN));

		callback(null, m);
	} catch (error: Error | any) {
		callback(error);
	}
}

/**
 * @param call
 * @param callback
 * @returns
 */
async function register(call: ServerUnaryCall<IRegisterForm, IUserModel>, callback: sendUnaryData<IUserModel>) {
	const r = call.request;
	const o = {
		username: r.hasUsername() ? r.getUsername()!.getValue() : null,
		email: r.hasEmail() ? r.getEmail()!.getValue() : null,
		password: r.hasPassword() ? r.getPassword()!.getValue() : null,
	};
	try {
		const u: IUser | null = await MongooseUserModel.create({
			username: o.username,
			email: o.email,
			password: o.password,
		});
		if (!u) {
			throw new Error('Registration Error');
		}

		const m: IUserModel = new UserModel();
		const id: string = u['_id'].toString();
		m.setId(new StringValue().setValue(id));
		m.setUsername(new StringValue().setValue(u.username));
		m.setEmail(new StringValue().setValue(u.email));

		const TOKEN = await generateToken(u);
		m.setToken(new StringValue().setValue(TOKEN));

		callback(null, m);
	} catch (error: Error | any) {
		callback(error);
	}
}

export {
	login,
	register,
};
