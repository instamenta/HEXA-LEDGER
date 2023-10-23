"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refIdAndType = exports.refIdAndService = exports.updateBody = exports.pageQuery = exports.userIdOrWalletParam = exports.createBody = void 0;
const zod_1 = require("zod");
exports.createBody = zod_1.z.object({
    wallet: zod_1.z.string()
        .min(24, { message: '👤 Wallet must be a string of minimum 24 characters.' })
        .max(42, { message: '🚫 Wallet cannot exceed 42 characters.' }),
    name: zod_1.z.string()
        .min(1, { message: '🚫 Name must be at least 1 character.' })
        .max(24, { message: '🚫 Name cannot exceed 24 characters.' }),
    role: zod_1.z.string(),
    image: zod_1.z.string(),
});
exports.userIdOrWalletParam = zod_1.z.object({
    param: zod_1.z.string()
        .min(23, { message: '🧵 Thread ID must be a string of 24 characters.' })
        .max(50, { message: '🧵 Wallet must be a valid ethereum wallet.' }),
});
exports.pageQuery = zod_1.z.object({
    limit: zod_1.z.coerce.number()
        .positive({ message: '🚫 Limit must be a positive number.' })
        .lt(100, { message: '🚫 Limit must be a positive number less than 100.' }),
    skip: zod_1.z.coerce.number()
        .gte(0, { message: '🚫 Skip must be a non-negative number.' }),
});
exports.updateBody = zod_1.z.object({
    wallet: zod_1.z.string()
        .min(24, { message: '👤 Wallet must be a string of minimum 24 characters.' })
        .max(42, { message: '🚫 Wallet cannot exceed 42 characters.' }),
    name: zod_1.z.string()
        .min(1, { message: '🚫 Name must be at least 1 character.' })
        .max(24, { message: '🚫 Name cannot exceed 24 characters.' }),
    image: zod_1.z.string(),
    images: zod_1.z.array(zod_1.z.string()),
});
exports.refIdAndService = zod_1.z.object({
    service: zod_1.z.string(),
    refId: zod_1.z.string(),
});
exports.refIdAndType = zod_1.z.object({
    type: zod_1.z.string(),
    refId: zod_1.z.string(),
});
