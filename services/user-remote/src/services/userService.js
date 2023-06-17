'use strict';
const proto = require('../generated/users_pb')
    ,{UserModel} = proto.user
    , {ServerUnaryCall, sendUnaryData} = require('@grpc/grpc-js')
    , {StringValue, BoolValue} = require('google-protobuf/google/protobuf/wrappers_pb')
    , MongooseUserModel = require('../models/userModelSchema')
    , {generateToken} = require('../utilities/token-tools')
;

/**
 * @param {ServerUnaryCall} call
 * @param {sendUnaryData} callback
 * @returns {Promise<void>}}
 */
async function login(call, callback) {
    const m = call.request;
    const o = {
        email: m.hasEmail() ? m.getEmail() : null,
        password: m.hasPassword() ? m.getPassword() : null,
    };
    console.table(o);

    /**
     * @type {MongooseUserModel|undefined}
     */
    const User = await MongooseUserModel.findOne({
        email: o.email,
    }).catch((error) => console.error(error.message));

    if (!User) {
        return callback(new Error('Login Error'));
    }

    /**
     * @type {!proto.user.UserModel}

     */
    const message = new UserModel()
    /**
     * @type {string}
     */
    const token = await generateToken(User)

    message.setUsername(new StringValue().setValue(User.username));
    message.setEmail(new StringValue().setValue(User.email));
    message.setToken(new StringValue().setValue(token));

    callback(null, message);
}

/**
 * @param {ServerUnaryCall} call
 * @param {sendUnaryData} callback
 * @returns {Promise<void>}
 */
async function register(call, callback) {
    const m = call.request;

    const o = {
        username: m.hasUsername() ? m.getUsername().getValue() : null,
        email: m.hasEmail() ? m.getEmail().getValue() : null,
        password: m.hasPassword() ? m.getPassword().getValue() : null,
    };
    console.table(o);

    /**
     * @type {MongooseUserModel|undefined}
     */
    const User = await MongooseUserModel.create({
        username: o.username,
        email: o.email,
        password: o.password,
    }).catch((error) => console.error(error.message));

    if (!User) {
        return callback(new Error('Registation Error'));
    }

    /**
     * @type {!proto.user.UserModel}
     */
    const message = new UserModel()
    /**
     * @type {string}
     */
    const token = await generateToken(User);

    message.setUsername(new StringValue().setValue(User.username));
    message.setEmail(new StringValue().setValue(User.email));
    message.setToken(new StringValue().setValue(token));

    callback(null, message);
}

module.exports = {
    login,
    register,
};


/**
 * @type {UserModelSchema}
 */