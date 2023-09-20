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
const zod = __importStar(require("../validation/thread.zod"));
const zod_1 = require("zod");
class ThreadController {
    async create(r, w) {
        try {
            const { body: { name, description, content, images, owner, promoted, tags } } = zod.create.parse(r);
        }
        catch (e) {
            if (e instanceof zod_1.ZodError)
                w.end();
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
