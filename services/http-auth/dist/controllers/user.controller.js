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
const zod = __importStar(require("../validation/user.zod"));
const user_model_1 = __importDefault(require("../models/user.model"));
const error_handler_1 = require("../utilities/errors/error.handler");
class UserController {
    #repository;
    #vlog;
    constructor(repository, vlogger) {
        this.#repository = repository;
        this.#vlog = vlogger.getVlogger('UserController');
    }
    async create(r, w) {
        this.#vlog.debug({ f: 'create', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const userData = zod.createBody.parse(r.body);
            const clerkId = r.auth.claims?.clerk_id;
            if (!r.auth.hasOwnProperty('claims') || typeof clerkId !== 'string') {
                w.status(http_status_codes_1.default.UNAUTHORIZED).end();
                return this.#vlog.info({ f: 'create', m: r.ip, d: r.body });
            }
            this.#repository.create({ ...userData, clerkId })
                .then((model) => model instanceof user_model_1.default
                ? w.status(http_status_codes_1.default.CREATED)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.BAD_REQUEST)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async update(r, w) {
        this.#vlog.debug({ f: 'update', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { param } = zod.userIdOrWalletParam.parse(r.params);
            const userData = zod.updateBody.parse(r.body);
            this.#repository.update(param, userData)
                .then((model) => model instanceof user_model_1.default
                ? w.status(http_status_codes_1.default.CREATED)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async delete(r, w) {
        this.#vlog.debug({ f: 'delete', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { param } = zod.userIdOrWalletParam.parse(r.params);
            this.#repository.delete(param)
                .then((model) => model instanceof user_model_1.default
                ? w.status(http_status_codes_1.default.OK)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getOne(r, w) {
        this.#vlog.debug({ f: 'getOne', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { param } = zod.userIdOrWalletParam.parse(r.params);
            this.#repository.getOneById(param)
                .then((model) => model instanceof user_model_1.default
                ? w.status(http_status_codes_1.default.OK)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getMany(r, w) {
        this.#vlog.debug({ f: 'getMany', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { skip, limit } = zod.pageQuery.parse(r.query);
            this.#repository.getMany(skip, limit)
                .then((models) => models.length
                ? w.status(http_status_codes_1.default.OK)
                    .json(models.map((model) => model.get())).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getTotalCount(r, w) {
        this.#vlog.debug({ f: 'getTotalCount', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            this.#repository.getTotalCount()
                .then((res) => w.status(http_status_codes_1.default.OK).json(res).end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async addReferenceId(r, w) {
        this.#vlog.debug({ f: 'addReferenceId', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { param } = zod.userIdOrWalletParam.parse(r.params);
            const { service, refId } = zod.refIdAndService.parse(r.params);
            this.#repository.addReferenceId(param, service, refId)
                .then((res) => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async assignOwnership(r, w) {
        this.#vlog.debug({ f: 'assignOwnership', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const { param } = zod.userIdOrWalletParam.parse(r.params);
            const { refId, type } = zod.refIdAndType.parse(r.params);
            this.#repository.assignOwnership(param, type, refId)
                .then((res) => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
}
exports.default = UserController;
