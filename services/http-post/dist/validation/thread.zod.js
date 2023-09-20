"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBody = exports.pageQuery = exports.postIdParam = exports.createBody = void 0;
const zod_1 = require("zod");
exports.createBody = zod_1.z.object({
    name: zod_1.z.string().min(1).max(48).trim(),
    description: zod_1.z.string().min(3).max(120).trim().default('No Description!'),
    content: zod_1.z.string().min(26).max(360).trim().default('No Content Provided!'),
    images: zod_1.z.array(zod_1.z.string()).default([]),
    owner: zod_1.z.string().length(24),
    promoted: zod_1.z.number().optional().default(0),
    tags: zod_1.z.array(zod_1.z.string()).default([]),
});
exports.postIdParam = zod_1.z.object({
    postId: zod_1.z.string().length(24),
});
exports.pageQuery = zod_1.z.object({
    limit: zod_1.z.coerce.number().positive().lt(100),
    skip: zod_1.z.coerce.number().gte(0),
});
exports.updateBody = zod_1.z.object({
    name: zod_1.z.string().min(1).max(48).trim(),
    description: zod_1.z.string().min(3).max(120).trim().default('No Description!'),
    content: zod_1.z.string().min(26).max(360).trim().default('No Content Provided!'),
    images: zod_1.z.array(zod_1.z.string()).default([]),
    tags: zod_1.z.array(zod_1.z.string()).default([]),
});
