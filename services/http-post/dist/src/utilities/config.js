"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4002'),
    SERVICE_NAME: zod_1.z.string().default('HTTP_POST'),
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
    DB_THREADS_COLLECTION: zod_1.z.string().default('threads'),
    CLERK_JWT_PUBLIC_KEY: zod_1.z.string(),
    GRPC_PORT: zod_1.z.string().default('50054')
});
const env = envSchema.parse(process.env);
exports.config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'threads',
    DB_OPTIONS: { appName: env.SERVICE_NAME, },
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    GRPC_PORT: env.GRPC_PORT
};
