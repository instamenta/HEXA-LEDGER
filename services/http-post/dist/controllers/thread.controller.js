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
            this.threadRepository.create(threadData).then(model => model instanceof thread_model_1.default
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
            const { postId } = zod.postIdParam.parse(r.params);
            const threadData = zod.updateBody.parse(r.body);
            this.threadRepository.update(postId, threadData).then(model => model instanceof thread_model_1.default
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
            const { postId } = zod.postIdParam.parse(r.params);
            this.threadRepository.deleteById(postId).then(model => model instanceof thread_model_1.default
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
            const { postId } = zod.postIdParam.parse(r.params);
            this.threadRepository.getOneById(postId).then(model => model instanceof thread_model_1.default
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
            console.log('=================');
            const $_DB = await this.threadRepository.getMany(skip, limit);
            const $_T_ = new stream_1.Transform({ readableObjectMode: true, writableObjectMode: true });
            let co = 0;
            $_T_._transform = (d, enc, call) => {
                console.log(d.getStatic());
                call(null, JSON.stringify(d.getStatic()));
                co++;
            };
            $_T_.on('end', () => {
                co ? w.status(http_status_codes_1.default.OK).end()
                    : w.status(http_status_codes_1.default.NOT_FOUND).end();
            });
            $_DB.on('error', (e) => {
                console.log('=================ERROR');
                w.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json(e).end();
            });
            $_DB.pipe($_T_).pipe(w);
        }
        catch (e) {
            (0, error_handlers_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getByOwner(r, w) {
    }
    async like(r, w) {
    }
    async dislike(r, w) {
    }
    async promote(r, w) {
    }
    async donate(r, w) {
    }
    async transferOwnership(r, w) {
    }
}
exports.default = ThreadController;
