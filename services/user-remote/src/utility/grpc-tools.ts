/** @file Grpc tools used for getting and creating GRPC messages and etc. */
import {UserModel as IUserModel} from '../protos/generated/types/users_pb';
import {ServerUnaryCall} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {IExtractedUserModel, IUser} from './types/base-types';
import {UAttr} from './enumerations/base-enumerations';

const {UserModel} = require('../protos/generated/users_pb');

class GrpcTools {
    /**
     * @param call
     * @param extractAll
     * @param include
     * @returns
     */
    public static extractUserModel(
        call: ServerUnaryCall<any, IUserModel>,
        extractAll = true,
        include: object = {},
    ): IExtractedUserModel | any {
        const u = call.request;
        if (extractAll) {
            return {
                _id: u.hasId() ? u.getId()!.getValue() : null,
                username: u.hasUsername() ? u.getUsername()!.getValue() : null,
                email: u.hasEmail() ? u.getEmail()!.getValue() : null,
                password: u.hasPassword() ? u.getPassword()!.getValue() : null,
                picture: u.hasPicture() ? u.getPicture()!.getValue() : null,
                followers: u.getFollowersList().map((f: StringValue) => f.getValue()).toString(),
                following: u.getFollowingList().map((f: StringValue) => f.getValue()).toString(),
            };
        } else {
            const m: IExtractedUserModel = {
                _id: null,
                username: null,
                email: null,
                password: null,
                picture: null,
                followers: [],
                following: [],
            };
            for (let i = 0, keys = Object.keys(include), len = keys.length; i < len; i++) {
                switch (keys[i]) {
                    case UAttr._ID: {
                        m._id = u.hasId() ? u.getId()!.getValue() : null;
                        break;
                    }
                    case UAttr.USER: {
                        m.username = u.hasUsername() ? u.getUsername()!.getValue() : null;
                        break;
                    }
                    case UAttr.EMAIL: {
                        m.email = u.hasEmail() ? u.getEmail()!.getValue() : null;
                        break;
                    }
                    case UAttr.PASSWORD: {
                        m.password = u.hasPassword() ? u.getPassword()!.getValue() : null;
                        break;
                    }
                    case UAttr.PICTURE: {
                        m.picture = u.hasPicture() ? u.getPicture()!.getValue() : null;
                        break;
                    }
                    case UAttr.FOLLOWERS: {
                        m.followers = u.getFollowersList().map((f: StringValue) => f.getValue().toString());
                        break;
                    }
                    case UAttr.FOLLOWING: {
                        m.following = u.getFollowingList().map((f: StringValue) => f.getValue().toString());
                        break;
                    }
                }
            }
            return m;
        }
    }

    /**
     * @param u
     * @returns
     */
    public static convertUserModel(u: IUser): IUserModel {
        return new UserModel()
            .setId(new StringValue().setValue(u._id.toString()))
            .setUsername(new StringValue().setValue(u.username))
            .setEmail(new StringValue().setValue(u.email))
            .setPicture(new StringValue().setValue(u.picture));
    }
}

export default GrpcTools;