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
const zod = __importStar(require("../validation/thread.zod"));
const thread_model_1 = __importDefault(require("../models/thread.model"));
const error_handlers_1 = require("../utilities/error.handlers");
const stream_1 = require("stream");
class ThreadController {
    threadRepository;
    constructor(threadRepository) {
        this.threadRepository = threadRepository;
    }
    async create(r, w) {
        try {
            const threadData = zod.createBody.parse(r.body);
            this.threadRepository.create(threadData)
                .then(model => model instanceof thread_model_1.default
                ? w.status(http_status_codes_1.default.CREATED)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.BAD_REQUEST)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async update(r, w) {
        try {
            const { threadId } = zod.threadIdParam.parse(r.params);
            const threadData = zod.updateBody.parse(r.body);
            this.threadRepository.update(threadId, threadData)
                .then(model => model instanceof thread_model_1.default
                ? w.status(http_status_codes_1.default.CREATED)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async delete(r, w) {
        try {
            const { threadId } = zod.threadIdParam.parse(r.params);
            this.threadRepository.deleteById(threadId)
                .then(model => model instanceof thread_model_1.default
                ? w.status(http_status_codes_1.default.OK)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getOne(r, w) {
        try {
            const { threadId } = zod.threadIdParam.parse(r.params);
            this.threadRepository.getOneById(threadId)
                .then(model => model instanceof thread_model_1.default
                ? w.status(http_status_codes_1.default.OK)
                    .json(model.get()).end()
                : w.status(http_status_codes_1.default.NOT_FOUND)
                    .json('Failed to create').end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getMany(r, w) {
        try {
            const { skip, limit } = zod.pageQuery.parse(r.query);
            const models = await this.threadRepository.getMany(skip, limit);
            const data = models.map((model) => model.getStatic());
            data.length
                ? w.status(http_status_codes_1.default.OK)
                    .json(data).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getByOwner(r, w) {
        try {
            const { wallet: ownerAddr } = zod.walletParam.parse(r.params);
            const { skip, limit } = zod.pageQuery.parse(r.query);
            const $_DB = await this.threadRepository.getByOwner(ownerAddr, skip, limit);
            const $_T_ = new stream_1.Transform({ readableObjectMode: true, writableObjectMode: true });
            let counter = 0;
            w.setHeader('Content-Type', 'application/json');
            $_T_._transform = (d, encryption, call) => {
                call(null, JSON.stringify(d.getStatic()));
                counter++;
            };
            $_T_.on('end', () => {
                counter ? w.status(http_status_codes_1.default.OK).end()
                    : w.status(http_status_codes_1.default.NOT_FOUND).end();
            });
            $_DB.on('error', (e) => {
                w.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json(e).end();
            });
            $_DB.pipe($_T_).pipe(w);
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async like(r, w) {
        try {
            const { wallet } = zod.walletAuthClaims.parse(r.auth.claims);
            const { threadId } = zod.threadIdParam.parse(r.params);
            this.threadRepository.like(threadId, wallet)
                .then(res => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async dislike(r, w) {
        try {
            const { wallet } = zod.walletAuthClaims.parse(r.auth.claims);
            const { threadId } = zod.threadIdParam.parse(r.params);
            this.threadRepository.dislike(threadId, wallet)
                .then(res => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async promote(r, w) {
        try {
            const { wallet } = zod.walletAuthClaims.parse(r.auth.claims);
            const { threadId } = zod.threadIdParam.parse(r.params);
            const { amount } = zod.amountBody.parse(r.body);
            this.threadRepository.promote(threadId, wallet, amount)
                .then(res => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async donate(r, w) {
        try {
            const { wallet } = zod.walletAuthClaims.parse(r.auth.claims);
            const { threadId } = zod.threadIdParam.parse(r.params);
            const { amount } = zod.amountBody.parse(r.body);
            this.threadRepository.donate(threadId, wallet, amount)
                .then(res => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async transferOwnership(r, w) {
        try {
            const { wallet } = zod.walletAuthClaims.parse(r.auth.claims);
            const { threadId } = zod.threadIdParam.parse(r.params);
            const { wallet: newOwner } = zod.walletParam.parse(r.params);
            this.threadRepository.transferOwnership(threadId, wallet, newOwner)
                .then(res => res
                ? w.status(http_status_codes_1.default.OK).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end());
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getMany_$(r, w) {
        try {
            const { skip, limit } = zod.pageQuery.parse(r.query);
            const $_DB = await this.threadRepository.getMany_$(skip, limit);
            let counter = 0;
            $_DB.on('data', (model) => {
                w.write(JSON.stringify(model.getStatic()) + '--------------');
            });
            $_DB.on('end', () => {
                counter ? w.status(http_status_codes_1.default.OK).end()
                    : w.status(http_status_codes_1.default.NOT_FOUND).end();
            });
            $_DB.on('error', (e) => {
                w.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json(e).end();
            });
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
}
exports.default = ThreadController;
