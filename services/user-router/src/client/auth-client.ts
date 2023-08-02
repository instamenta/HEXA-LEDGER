/** @file Handles calls to auth endpoints of grpc client. */
import * as GRPC from '@grpc/grpc-js';
import GRPC_CLIENT from './grpc-client';
import {UserModel} from '../protos/generated/types/users_pb';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import UserGrpcModel from '../model/user-grpc-model';

const {
    LoginForm,
    RegisterForm,
    UpdateForm,
    idRequest
} = require('../protos/generated/users_pb');

/**
 * @param email
 * @param password
 * @returns
 */
export function loginUser(email: string, password: string): Promise<UserGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new LoginForm();
        m.setEmail(new StringValue().setValue(email));
        m.setPassword(new StringValue().setValue(password));

        GRPC_CLIENT.login(m, (err: GRPC.ServiceError, r: UserModel) => {
            err ? reject(err.message)
                : resolve(UserGrpcModel.fromUserGRPCMessage(r));
        });
    });
}

/**
 * @param username
 * @param email
 * @param password
 * @returns
 */
export function registerUser(username: string, email: string, password: string): Promise<UserGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new RegisterForm();
        m.setUsername(new StringValue().setValue(username));
        m.setEmail(new StringValue().setValue(email));
        m.setPassword(new StringValue().setValue(password));

        GRPC_CLIENT.register(m, (err: GRPC.ServiceError, r: UserModel) => {
            err ? reject(err.message)
                : resolve(UserGrpcModel.fromUserGRPCMessage(r));
        });
    });
}

/**
 * @param id
 * @returns
 */
export function deleteUserById(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const m = new idRequest().setId(new StringValue().setValue(id));
        GRPC_CLIENT.deleteUserById(m, (err: GRPC.ServiceError) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}

/**
 * @param id
 * @param username
 * @param email
 * @param password
 * @returns
 */
export function updateUserById(id: string, username: string, email: string, password: string): Promise<UserGrpcModel> {
    return new Promise((resolve, reject) => {
        const m = new UpdateForm();
        m.setId(new StringValue().setValue(id));
        m.setUsername(new StringValue().setValue(username));
        m.setEmail(new StringValue().setValue(email));
        m.setPassword(new StringValue().setValue(password));
        GRPC_CLIENT.updateUserById(m, (err: GRPC.ServiceError, r: UserModel) => {
            err ? reject(err.message)
                : resolve(UserGrpcModel.fromUserGRPCMessage(r));
        });
    });
}