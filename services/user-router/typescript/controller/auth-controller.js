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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Controller used for handling auth related requests. */
const AUTH_CLIENT = __importStar(require("../client/auth-client"));
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
class AuthController {
    /**
     *! Register a new user.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *! fetch('/auth/register', {
     *!   method: 'POST',
     *!   body: JSON.stringify({
     *!     username: 'example_user',
     *!     email: 'example@example.com',
     *!     password: 'example_password'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json'
     *!   }
     *! })
     */
    register(request, response) {
        try {
            AUTH_CLIENT.registerUser(request.body?.username, request.body?.email, request.body?.password).then((User) => response.status(http_status_codes_1.default.OK)
                .json(User)
                .end());
        }
        catch (error) {
            response.status(400)
                .json({ message: error.message })
                .end();
            console.log(error);
        }
    }
    /**
     *! Log in a user.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *! fetch('/auth/login', {
     *!   method: 'POST',
     *!   body: JSON.stringify({
     *!     email: 'example@example.com',
     *!     password: 'example_password'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json'
     *!   }
     *! })
     */
    login(request, response) {
        try {
            AUTH_CLIENT.loginUser(request.body?.email, request.body?.password).then((User) => response.status(http_status_codes_1.default.OK)
                .json(User)
                .end());
        }
        catch (error) {
            response.status(400)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Update a user by their ID.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *! fetch('/auth/update', {
     *!   method: 'PUT',
     *!   body: JSON.stringify({
     *!     id: 'user_id',
     *!     username: 'new_username',
     *!     email: 'new_email@example.com',
     *!     password: 'new_password'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json'
     *!   }
     *! })
     */
    updateUserById(request, response) {
        try {
            AUTH_CLIENT.updateUserById(request.body?.id, request.body?.username, request.body?.email, request.body?.password).then((User) => response.status(http_status_codes_1.default.OK)
                .json(User)
                .end());
        }
        catch (error) {
            response.status(400)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
    /**
     *! Delete a user by their ID.
     *
     * @param request - The request object.
     * @param response - The response object.
     * @example
     *! fetch('/auth/delete', {
     *!   method: 'DELETE',
     *!   body: JSON.stringify({
     *!     id: 'user_id'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json'
     *!   }
     *! })
     */
    deleteUserById(request, response) {
        try {
            AUTH_CLIENT.deleteUserById(request.body?.id).then(() => response.status(http_status_codes_1.default.OK)
                .end());
        }
        catch (error) {
            response.status(400)
                .json({ message: error.message })
                .end();
            console.error(error);
        }
    }
}
exports.default = AuthController;
