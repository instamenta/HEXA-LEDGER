import {type MongoClientOptions} from 'mongodb';
import {z} from 'zod';

const envSchema = z.object({
    PORT: z.string().default('4003'),
    SERVICE_NAME: z.string().default('BLOCKCHAIN_DATA'),
    DB_URI: z.string(),
    DB_NAME: z.string().default('main'),
    DB_THREADS_COLLECTION: z.string().default('blockchain'),
    CLERK_JWT_PUBLIC_KEY: z.string(),
    PROVIDER_API_KEY: z.string(),
    ETHEREUM_NETWORK: z.string(),
});

const env = envSchema.parse(process.env);

export const config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'blockchain',
    DB_OPTIONS: {appName: env.SERVICE_NAME} as MongoClientOptions,
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    PROVIDER_API_KEY: env.PROVIDER_API_KEY,
    ETHEREUM_NETWORK: env.ETHEREUM_NETWORK,
};
