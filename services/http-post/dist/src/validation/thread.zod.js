"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBody = exports.pageQuery = exports.walletParam = exports.walletAuthClaims = exports.threadIdParamOptional = exports.threadIdParam = exports.amountBody = exports.createBody = void 0;
const zod_1 = require("zod");
exports.createBody = zod_1.z.object({
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' })
        .max(48, { message: 'Name cannot exceed 48 characters.' })
        .trim(),
    description: zod_1.z.string()
        .min(3, { message: 'Description must be at least 3 characters.' })
        .max(120, { message: 'Description cannot exceed 120 characters.' })
        .trim()
        .default('No Description!'),
    content: zod_1.z.string()
        .min(26, { message: 'Content must be at least 26 characters.' })
        .max(360, { message: 'Content cannot exceed 360 characters.' })
        .trim()
        .default('No Content Provided!'),
    images: zod_1.z.array(zod_1.z.string())
        .default([]),
    owner: zod_1.z.string()
        .min(24, { message: 'Owner must be a string of minimum 24 characters.' })
        .max(42, { message: 'Wallet must be a string of maximum 42 characters.' }),
    promoted: zod_1.z.number()
        .min(1, { message: 'Promotion amount must be a positive number' })
        .optional()
        .default(1),
    tags: zod_1.z.array(zod_1.z.string())
        .default([]),
});
exports.amountBody = zod_1.z.object({
    amount: zod_1.z.coerce.number()
        .positive({ message: 'Amount must be a positive number.' })
});
exports.threadIdParam = zod_1.z.object({
    threadId: zod_1.z.string()
        .length(24, { message: 'Thread ID must be a string of 24 characters.' }),
});
exports.threadIdParamOptional = zod_1.z.object({
    threadId: zod_1.z.string()
        .length(24, { message: 'Thread ID must be a string of 24 characters.' })
        .optional(),
});
exports.walletAuthClaims = zod_1.z.object({
    wallet: zod_1.z.string()
        .length(42, { message: 'Wallet must be a string of 42 characters.' })
});
exports.walletParam = zod_1.z.object({
    wallet: zod_1.z.string()
        .length(42, { message: 'Wallet must be a string of 42 characters.' })
});
exports.pageQuery = zod_1.z.object({
    limit: zod_1.z.coerce.number()
        .positive()
        .lt(100, { message: 'Limit must be a positive number less than 100.' }),
    skip: zod_1.z.coerce.number()
        .gte(0, { message: 'Skip must be a non-negative number.' }),
});
exports.updateBody = zod_1.z.object({
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' })
        .max(48, { message: 'Name cannot exceed 48 characters.' })
        .trim(),
    description: zod_1.z.string()
        .min(3, { message: 'Description must be at least 3 characters.' })
        .max(120, { message: 'Description cannot exceed 120 characters.' })
        .trim()
        .default('No Description!'),
    content: zod_1.z.string()
        .min(26, { message: 'Content must be at least 26 characters.' })
        .max(360, { message: 'Content cannot exceed 360 characters.' })
        .trim()
        .default('No Content Provided!'),
    images: zod_1.z.array(zod_1.z.string())
        .default([]),
    tags: zod_1.z.array(zod_1.z.string())
        .default([]),
});
