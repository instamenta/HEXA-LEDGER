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
class ThreadController {
    threadRepository;
    constructor(threadRepository) {
        this.threadRepository = threadRepository;
    }
    async create(r, w) {
        try {
            const { body: threadData } = zod.create.parse(r);
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
    }
    async delete(r, w) {
    }
    async getOne(r, w) {
    }
    async getMany(r, w) {
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
