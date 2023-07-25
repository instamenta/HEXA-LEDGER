/** @file Service used for Auth related Server Endpoint Methods. */

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
    UserModel as IUserModel, UpdateForm,
    idRequest
} from '../protos/generated/types/users_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {ObjectId} from 'bson';

export {
    LOGIN,
    REGISTER,
    UPDATE_USER_BY_ID,
    DELETE_USER_BY_ID
};

/**
 * @param call
 * @param callback
 * @async
 * @throws
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
 * @async
 * @throws
 */
async function REGISTER(
    call: ServerUnaryCall<IRegisterForm, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    const r = call.request
        , username = r.hasUsername() ? r.getUsername()!.getValue() : null
        , email = r.hasEmail() ? r.getEmail()!.getValue() : null
        , password = r.hasPassword() ? r.getPassword()!.getValue() : null
        , u: IUser | null = await Validator['VALIDATE_REGISTER'](username, email, password)
    ;
    callback(null, GrpcTools.convertUserModel(u).setToken(new StringValue()
        .setValue(await TokenTools['GENERATE_TOKEN'](u))));
}

/**
 * @param call
 * @param callback
 * @async
 * @throws
 */
async function DELETE_USER_BY_ID(
    call: ServerUnaryCall<idRequest, Empty>,
    callback: sendUnaryData<Empty>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
        , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id)
    ;
    await MongooseUserModel.deleteOne({_id})
        .then(() => callback(null, new Empty()))
        .catch((error) => Validator['THROWER']('ERROR WHILE DELETING USER: ', error))
    ;
}

/**
 * @param call
 * @param callback
 * @async
 * @throws
 */
async function UPDATE_USER_BY_ID(
    call: ServerUnaryCall<UpdateForm, IUserModel>,
    callback: sendUnaryData<IUserModel>
): Promise<void> {
    const r = call.request
        , id = r.hasId() ? r.getId()!.getValue() : null
        , username = r.hasUsername() ? r.getUsername()!.getValue() : null
        , email = r.hasEmail() ? r.getEmail()!.getValue() : null
        , password = r.hasPassword() ? r.getPassword()!.getValue() : null
        , _id: ObjectId = Validator['CONVERT_TO_OBJECT_ID'](id)
    ;
    await Validator['VALIDATE_USER_DATA'](username, email, password);
    await MongooseUserModel.findOneAndUpdate(
        {_id},
        {
            $set: {
                username,
                email,
                password,
            }
        })
        .then(async (u: any) => {
            callback(null, GrpcTools.convertUserModel(u as IUser)
                .setToken(new StringValue()
                    .setValue(await TokenTools['GENERATE_TOKEN'](u as IUser))));
        }).catch((error) => Validator['THROWER']('ERROR WHILE UPDATING USER: ', error));
}
