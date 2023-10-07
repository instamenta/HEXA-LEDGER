"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4003'),
    SERVICE_NAME: zod_1.z.string().default('BLOCKCHAIN_DATA'),
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
    DB_THREADS_COLLECTION: zod_1.z.string().default('blockchain'),
    CLERK_JWT_PUBLIC_KEY: zod_1.z.string(),
    PROVIDER_API_KEY: zod_1.z.string(),
    ETHEREUM_NETWORK: zod_1.z.string(),
    DB_BALANCE_COLLECTION: zod_1.z.string(),
});
const env = envSchema.parse(process.env);
exports.config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'blockchain',
    DB_OPTIONS: { appName: env.SERVICE_NAME },
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    PROVIDER_API_KEY: env.PROVIDER_API_KEY,
    ETHEREUM_NETWORK: env.ETHEREUM_NETWORK,
    DB_BALANCE_COLLECTION: env.DB_BALANCE_COLLECTION
};
