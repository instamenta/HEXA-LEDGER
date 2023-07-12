import {ServerUnaryCall, sendUnaryData} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import MongooseUserModel from '../model/schema/user-schema';
import TokenTools from '../utility/token-tools';
import GrpcTools from '../utility/grpc-tools';
import Validator from '../utility/validator';
import {IUser} from '../utility/types/base-types';
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
		, u = <IUser>await MongooseUserModel.findOne({email})
    ;
	await Validator['VALIDATE_PASSWORD'](password, u);
	callback(null, GrpcTools.convertUserModel(u).setToken(new StringValue()
		.setValue(await TokenTools['GENERATE_TOKEN'](u))));
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
		, password = r.hasPassword() ? r.getPassword()!.getValue() : null
		, u: IUser | null = await Validator['VALIDATE_REGISTER'](username, email, password);
	callback(null, GrpcTools.convertUserModel(u).setToken(new StringValue()
		.setValue(await TokenTools['GENERATE_TOKEN'](u))));
}


