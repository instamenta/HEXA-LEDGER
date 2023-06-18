"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
// const USER_MODEL = require('../model/user-model')
// 	, BCRYPT = require('bcrypt')
// , {generateToken} = require('../utilities/token-tools')
// , {Request, Response} = require('express')
// , {sendMessage} = require('../producer');
const grpc_client_1 = require("../grpc-client");
const token_tools_1 = require("../utilities/token-tools");
/**
 * @param request
 * @param response
 * @returns
 */
async function register(request, response) {
    try {
        const { username, email, password } = request.body;
        const status = await (0, grpc_client_1.registerUser)(username, email, password)
            .then(async (User) => {
            console.log(User);
            if (User.hasOwnProperty('token') && typeof User.token === 'string') {
                console.log(await (0, token_tools_1.decodeToken)(User.token));
            }
            response.json(User).status(200).end();
        })
            .catch((error) => {
            throw new Error('Register Error: ' + error.message);
        });
        console.table(status);
    }
    catch (error) {
        console.log(error);
        response.json({ message: error.message }).status(400).end();
    }
}
exports.register = register;
/**
 * @param request
 * @param response
 * @returns
 */
async function login(request, response) {
    try {
        const { email, password } = request.body;
        await (0, grpc_client_1.loginUser)(email, password)
            .then(async (User) => {
            console.log(User);
            if (User.hasOwnProperty('token') && typeof User.token === 'string') {
                console.log(await (0, token_tools_1.decodeToken)(User.token));
            }
            response.json(User).status(200).end();
        })
            .catch((error) => {
            throw new Error('Login Error: ' + error.message);
        });
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(400).end();
    }
}
exports.login = login;
