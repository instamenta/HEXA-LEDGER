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
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validator/zod-schema"));
class AuthController {
    vlog;
    client;
    constructor(vloggger, client) {
        this.vlog = vloggger.getVlog(this.constructor.name);
        this.client = client;
    }
    static getInstance(vloggger, client) {
        return new AuthController(vloggger, client);
    }
    async authenticate(req, res) {
        const { body: { address, username, picture } } = await zod.authData.parseAsync(req)
            .catch((e) => {
            res.status(http_status_codes_1.default.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({ e, func: 'authenticate' });
        });
        const result = await this.client.authenticate({ username, address, picture })
            .catch(console.log);
    }
    async update(req, res) {
        const { body: { address, username, picture } } = await zod.authData.parseAsync(req)
            .catch((e) => {
            res.status(http_status_codes_1.default.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({ e, func: 'update' });
        });
        const result = await this.client.update({ username, address, picture })
            .catch(console.log);
    }
    async getUser(req, res) {
        const data = await zod.authId.parseAsync(req)
            .catch((e) => {
            res.status(http_status_codes_1.default.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({ e, func: 'getUser' });
        });
        const { param: { authId } } = data;
        const result = await this.client.getUser({ authId })
            .catch(console.log);
    }
    async getUsers(req, res) {
        let data;
        try {
            data = await zod.limitSkip.parseAsync(req);
            if (!data)
                throw ;
        }
        catch (e) {
            res.status(http_status_codes_1.default.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({ e, func: 'getUsers' });
        }
        const { query: { limit, skip } } = data;
        const result = await this.client.getUsers({ limit, skip })
            .catch(console.log);
    }
}
exports.default = AuthController;
