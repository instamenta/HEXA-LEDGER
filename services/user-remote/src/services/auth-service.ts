import {ServerUnaryCall, sendUnaryData} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import MongooseUserModel, {IUser} from '../models/user-schema';
import {generateToken} from '../utilities/token-tools';
import BCRYPT from 'bcrypt';
import {convertUserModel} from '../utilities/grpc-tools';
import {
	LoginForm as ILoginForm,
	RegisterForm as IRegisterForm,
	UserModel as IUserModel
} from '../generated/types/users_pb';

/**
 * Handles the login request
 * ( takes email $ password )
 * @param call - The gRPC call object for the login request.
 * @param callback - The callback function to send the login response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function login(
	call: ServerUnaryCall<ILoginForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	try {
		const r = call.request
			, email = r.hasEmail() ? r.getEmail()!.getValue() : null
			, password = r.hasPassword() ? r.getPassword()!.getValue() : null
			, u: IUser | null = await MongooseUserModel.findOne({email})
        ;
		if (!u || !password || !await BCRYPT.compare(password, u.password)) {
			throw new Error('Login Error');
		}
		const m = convertUserModel(u);
		const TOKEN = await generateToken(u);
		m.setToken(new StringValue().setValue(TOKEN));

		callback(null, m);
	} catch (error: Error | any) {
		callback(error);
	}
}

/**
 * Handles the registration request
 * ( takes username , password & e-mail
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @throws - Emits an error if the input is invalid
 * @async
 */
async function register(
	call: ServerUnaryCall<IRegisterForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {
	try {
		const r = call.request
			, username = r.hasUsername() ? r.getUsername()!.getValue() : null
			, email = r.hasEmail() ? r.getEmail()!.getValue() : null
			, password = r.hasPassword() ? r.getPassword()!.getValue() : null
        ;
		const u: IUser | null = await MongooseUserModel
			.create({username, email, password});
		if (!u) {
			throw new Error('Registration Error');
		}
		const m = convertUserModel(u);
		const TOKEN = await generateToken(u);
		m.setToken(new StringValue().setValue(TOKEN));

		callback(null, m);
	} catch (error: Error | any) {
		callback(error);
	}
}

export {login, register};
