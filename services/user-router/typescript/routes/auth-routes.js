"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Router for auth. */
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth-controller");
const auth_validator_1 = require("../validator/auth-validator");
const auth_middleware_1 = require("../middleware/auth-middleware");
const AUTH_ROUTER = (0, express_1.Router)();
AUTH_ROUTER.route('/login')
    .post(auth_middleware_1.isGuest, auth_validator_1.loginValidator, auth_controller_1.login);
AUTH_ROUTER.route('/register')
    .post(auth_middleware_1.isGuest, auth_validator_1.registerValidator, auth_controller_1.register);
AUTH_ROUTER.route('/:id')
    .put(auth_middleware_1.isAuthenticated, auth_middleware_1.isOwner, auth_controller_1.updateUserById)
    .delete(auth_middleware_1.isAuthenticated, auth_middleware_1.isOwner, auth_controller_1.deleteUserById);
exports.default = AUTH_ROUTER;
