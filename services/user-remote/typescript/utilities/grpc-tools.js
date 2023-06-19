"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUserModel = exports.extractUserModel = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const { UserModel } = require('../generated/users_pb');
/**
 * @param call
 * @param extractAll
 * @param include
 * @returns
 */
function extractUserModel(call, extractAll = true, include = {}) {
    const u = call.request;
    console.log(u);
    if (extractAll) {
        return {
            _id: u.hasId() ? u.getId().getValue() : null,
            username: u.hasUsername() ? u.getUsername().getValue() : null,
            email: u.hasEmail() ? u.getEmail().getValue() : null,
            password: u.hasPassword() ? u.getPassword().getValue() : null,
            picture: u.hasPicture() ? u.getPicture().getValue() : null,
            followers: u.getFollowersList()
                .map((werUser) => werUser.getValue()).toString(),
            following: u.getFollowingList()
                .map((wingUser) => wingUser.getValue()).toString(),
            // comments: u.hasComments() ? u.getComments()!.getValue() : null,
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
                case '_id': {
                    m._id = u.hasId() ? u.getId().getValue() : null;
                    break;
                }
                case 'username': {
                    m.username = u.hasUsername() ? u.getUsername().getValue() : null;
                    break;
                }
                case 'email': {
                    m.email = u.hasEmail() ? u.getEmail().getValue() : null;
                    break;
                }
                case 'password': {
                    m.password = u.hasPassword() ? u.getPassword().getValue() : null;
                    break;
                }
                case 'picture': {
                    m.picture = u.hasPicture() ? u.getPicture().getValue() : null;
                    break;
                }
                case 'followers': {
                    m.followers = u.getFollowersList()
                        .map((werUser) => werUser.getValue().toString());
                    break;
                }
                case 'following': {
                    m.following = u.getFollowingList()
                        .map((wingUser) => wingUser.getValue().toString());
                    break;
                }
            }
        });
        return m;
    }
}
exports.extractUserModel = extractUserModel;
function convertUserModel(u) {
    const m = new UserModel();
    const stringId = u._id.toString();
    m.setId(new wrappers_pb_1.StringValue().setValue(stringId));
    m.setUsername(new wrappers_pb_1.StringValue().setValue(u.username));
    m.setEmail(new wrappers_pb_1.StringValue().setValue(u.email));
    m.setPicture(new wrappers_pb_1.StringValue().setValue(u.picture));
    // m.setFollowersList(new Int32Value().setValue(u.following?.length))
    // m.setFollowingList(new Int32Value().setValue(u.followers?.length))
    return m;
}
exports.convertUserModel = convertUserModel;
