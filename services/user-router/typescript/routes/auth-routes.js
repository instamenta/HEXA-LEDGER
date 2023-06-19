"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth-controller");
const auth_validator_1 = require("../validator/auth-validator");
const auth_middleware_1 = require("../middlewares/auth-middleware");
const AUTH_ROUTER = (0, express_1.Router)();
AUTH_ROUTER.route('/login')
    .post(auth_middleware_1.isGuest, auth_validator_1.loginValidator, auth_controller_1.login);
AUTH_ROUTER.route('/register')
    .post(auth_middleware_1.isGuest, auth_validator_1.registerValidator, auth_controller_1.register);
exports.default = AUTH_ROUTER;
