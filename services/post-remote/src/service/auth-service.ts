import {ServerUnaryCall, sendUnaryData} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import MongooseUserModel, {IUser} from '../model/user-schema';
import {generateToken} from '../utility/token-tools';
import {convertUserModel} from '../utility/grpc-tools';
import * as Validator from '../utility/validator';
import {
	LoginForm as ILoginForm,
	RegisterForm as IRegisterForm,
	UserModel as IUserModel
} from '../protos/generated/types/users_pb';

export {
	LOGIN,
	REGISTER,
};

/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function LOGIN(
	call: ServerUnaryCall<ILoginForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {

	const r = call.request
		, email = r.hasEmail() ? r.getEmail()!.getValue() : null
		, password = r.hasPassword() ? r.getPassword()!.getValue() : null
		, u: IUser | null = await MongooseUserModel.findOne({email})
    ;
	await Validator.ValidatePassword(password, u);

	callback(null, convertUserModel(u as IUser)
		.setToken(new StringValue().setValue(
			await generateToken(u as IUser))
		));
}

/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function REGISTER(
	call: ServerUnaryCall<IRegisterForm, IUserModel>,
	callback: sendUnaryData<IUserModel>
): Promise<void> {

	const r = call.request
		, username = r.hasUsername() ? r.getUsername()!.getValue() : null
		, email = r.hasEmail() ? r.getEmail()!.getValue() : null
		, password = r.hasPassword() ? r.getPassword()!.getValue() : null;
	const u: IUser | null = await Validator.ValidateRegister(username, email, password);
	callback(null, convertUserModel(u)
		.setToken(new StringValue()
			.setValue(await generateToken(u))
		));
}


