"use strict";
/** @file Validation schemas for zod. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.loginSchema = exports.registerSchema = exports.idAndAuthSchema = exports.idPageLimitSchema = exports.idSchema = exports.limitPageSchema = exports.limitPageFilterSchema = void 0;
const zod_1 = require("zod");
exports.limitPageFilterSchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.string().transform((v) => +v).optional(),
        page: zod_1.z.string().transform((v) => +v).optional(),
        filter: zod_1.z.string().optional(),
    }),
});
exports.limitPageSchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.string().transform((v) => +v).optional(),
        page: zod_1.z.string().transform((v) => +v).optional(),
    }),
});
exports.idSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    }),
});
exports.idPageLimitSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    }),
    query: zod_1.z.object({
        limit: zod_1.z.string().transform((v) => +v).optional(),
        page: zod_1.z.string().transform((v) => +v).optional(),
    }),
});
exports.idAndAuthSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    }),
    userData: zod_1.z.object({
        _id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    }),
});
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string()
            .min(3, 'Username must be at least 3 characters long')
            .max(30, 'Username can\'t exceed 30 characters'),
        email: zod_1.z.string()
            .email('Invalid email address'),
        password: zod_1.z.string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/, 'Password must contain at least one special character or number'),
    }),
});
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string()
            .email('Invalid email address'),
        password: zod_1.z.string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/, 'Password must contain at least one special character or number'),
    }),
});
exports.updateUserSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    }),
    body: zod_1.z.object({
        username: zod_1.z.string()
            .min(3, 'Username must be at least 3 characters long')
            .max(30, 'Username can\'t exceed 30 characters'),
        email: zod_1.z.string()
            .email('Invalid email address'),
        password: zod_1.z.string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/, 'Password must contain at least one special character or number'),
    }),
});
