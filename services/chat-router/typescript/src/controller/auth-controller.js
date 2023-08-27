"use strict";
/** @file Controller for handling user request. */
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
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validator/zod-auth-schema"));
const zod_1 = require("../validator/zod");
class AuthController {
    vlog;
    prisma;
    service;
    constructor(vloggger, prisma, service) {
        this.vlog = vloggger.getVlog(this.constructor.name);
        this.prisma = prisma;
        this.service = service;
    }
    static getInstance({ vlogger, prisma, authService }) {
        return new AuthController(vlogger, prisma, authService);
    }
    async createUser(req, res) {
        try {
            const { body: { username }, userData: { _id: authId } } = await (0, zod_1.zParse)(zod.userSchema, req);
            this.service.createUser(username, authId)
                .then((user) => res.status(http_status_codes_1.default.OK)
                .json(user)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to get user user' })
                .end();
            this.vlog.error({ e, func: 'getUserById' });
        }
    }
    async editUser(req, res) {
        try {
            const { body: { username }, userData: { _id: authId } } = await (0, zod_1.zParse)(zod.userSchema, req);
            this.service.editUser(res, username, authId)
                .then((user) => res.status(http_status_codes_1.default.OK)
                .json(user)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to get user followers' })
                .end();
            this.vlog.error({ e, func: 'getUserFollowers' });
        }
    }
    async getUsers(req, res) {
        try {
            const { query: { limit, page, filter }, } = await (0, zod_1.zParse)(zod.limitPageFilterSchema, req);
            this.service.getUsers(page, limit, filter)
                .then((users) => res.status(http_status_codes_1.default.OK)
                .json(users)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to get users' })
                .end();
            this.vlog.error({ e, func: 'getUsers' });
        }
    }
    async getUser(req, res) {
        try {
            const { param: { userId: id }, } = await (0, zod_1.zParse)(zod.getUserSchema, req);
            this.service.getUser(id)
                .then((user) => res.status(http_status_codes_1.default.OK)
                .json(user)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to get all users' })
                .end();
            this.vlog.error({ e, func: 'getAllUsers' });
        }
    }
}
exports.default = AuthController;
