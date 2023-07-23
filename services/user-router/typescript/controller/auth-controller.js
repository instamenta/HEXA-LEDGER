"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.register = exports.login = void 0;
const AUTH_CLIENT = __importStar(require("../client/auth-client"));
/**
 * @param request
 * @param response
 */
async function register(request, response) {
    try {
        const { username, email, password } = request.body;
        await AUTH_CLIENT.registerUser(username, email, password)
            .then((User) => {
            response.json(User).status(200).end();
        })
            .catch((error) => {
            throw new Error('Register Error: ' + error.message);
        });
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
 */
async function login(request, response) {
    try {
        const { email, password } = request.body;
        console.log(email, password);
        await AUTH_CLIENT.loginUser(email, password)
            .then((User) => {
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
/**
 * @param request
 * @param response
 */
async function updateUserById(request, response) {
    try {
        const { id, username, email, password } = request.body;
        await AUTH_CLIENT.updateUserById(id, username, email, password)
            .then((User) => {
            response.json(User).status(200).end();
        })
            .catch((error) => {
            throw new Error('Updating User Error: ' + error);
        });
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(400).end();
    }
}
exports.updateUserById = updateUserById;
/**
 * @param request
 * @param response
 */
async function deleteUserById(request, response) {
    try {
        const { id } = request.body;
        await AUTH_CLIENT.deleteUserById(id)
            .then(() => {
            response.status(200).end();
        })
            .catch((error) => {
            throw new Error('Deleting User Error: ' + error);
        });
    }
    catch (error) {
        console.error(error);
        response.json({ message: error.message }).status(400).end();
    }
}
exports.deleteUserById = deleteUserById;
