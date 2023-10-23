"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4003'),
    SERVICE_NAME: zod_1.z.string().default('AUTH_SERVICE'),
    CLERK_JWT_PUBLIC_KEY: zod_1.z.string(),
    GRPC_PORT: zod_1.z.string().default('50064'),
    //! DATABASE
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
    DB_AUTH_COLLECTION: zod_1.z.string().default('auth'),
    DB_USER_COLLECTION: zod_1.z.string().default('users'),
    DB_STAT_COLLECTION: zod_1.z.string().default('stats'),
});
const env = envSchema.parse(process.env);
exports.config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_AUTH_COLLECTION: env.DB_AUTH_COLLECTION || 'auth',
    DB_USER_COLLECTION: env.DB_USER_COLLECTION || 'users',
    DB_STAT_COLLECTION: env.DB_STAT_COLLECTION || 'stats',
    DB_OPTIONS: { appName: env.SERVICE_NAME, },
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    GRPC_PORT: env.GRPC_PORT
};
