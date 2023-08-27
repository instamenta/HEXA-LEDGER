"use strict";
/** @file Zod validation Schema for User. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSchema = exports.userSchema = exports.limitPageFilterSchema = void 0;
const zod_1 = require("zod");
exports.limitPageFilterSchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.coerce.number().refine((v) => v > 0).default(5),
        page: zod_1.z.coerce.number().refine((v) => v > 0).default(1),
        filter: zod_1.z.string().default(''),
    })
});
exports.userSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().min(3),
    }),
    userData: zod_1.z.object({
        _id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    })
});
exports.getUserSchema = zod_1.z.object({
    param: zod_1.z.object({
        userId: zod_1.z.string().uuid()
    })
});
