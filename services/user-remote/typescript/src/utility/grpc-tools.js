"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const base_enumerations_1 = require("./enumerations/base-enumerations");
const { UserModel } = require('../protos/generated/users_pb');
class GrpcTools {
    /**
     * @param call
     * @param extractAll
     * @param include
     * @returns
     */
    static extractUserModel(call, extractAll = true, include = {}) {
        const u = call.request;
        if (extractAll) {
            return {
                _id: u.hasId() ? u.getId().getValue() : null,
                username: u.hasUsername() ? u.getUsername().getValue() : null,
                email: u.hasEmail() ? u.getEmail().getValue() : null,
                password: u.hasPassword() ? u.getPassword().getValue() : null,
                picture: u.hasPicture() ? u.getPicture().getValue() : null,
                followers: u.getFollowersList().map((f) => f.getValue()).toString(),
                following: u.getFollowingList().map((f) => f.getValue()).toString(),
            };
        }
        else {
            const m = {
                _id: null,
                username: null,
                email: null,
                password: null,
                picture: null,
                followers: [],
                following: [],
            };
            Object.keys(include).forEach((key) => {
                switch (key) {
                    case base_enumerations_1.UAttr._ID: {
                        m._id = u.hasId() ? u.getId().getValue() : null;
                        break;
                    }
                    case base_enumerations_1.UAttr.USER: {
                        m.username = u.hasUsername() ? u.getUsername().getValue() : null;
                        break;
                    }
                    case base_enumerations_1.UAttr.EMAIL: {
                        m.email = u.hasEmail() ? u.getEmail().getValue() : null;
                        break;
                    }
                    case base_enumerations_1.UAttr.PASSWORD: {
                        m.password = u.hasPassword() ? u.getPassword().getValue() : null;
                        break;
                    }
                    case base_enumerations_1.UAttr.PICTURE: {
                        m.picture = u.hasPicture() ? u.getPicture().getValue() : null;
                        break;
                    }
                    case base_enumerations_1.UAttr.FOLLOWERS: {
                        m.followers = u.getFollowersList().map((f) => f.getValue().toString());
                        break;
                    }
                    case base_enumerations_1.UAttr.FOLLOWING: {
                        m.following = u.getFollowingList().map((f) => f.getValue().toString());
                        break;
                    }
                }
            });
            return m;
        }
    }
    /**
     * @param u
     * @returns
     */
    static convertUserModel(u) {
        const m = new UserModel();
        const stringId = u._id.toString();
        m.setId(new wrappers_pb_1.StringValue().setValue(stringId));
        m.setUsername(new wrappers_pb_1.StringValue().setValue(u.username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(u.email));
        m.setPicture(new wrappers_pb_1.StringValue().setValue(u.picture));
        return m;
    }
}
exports.default = GrpcTools;
