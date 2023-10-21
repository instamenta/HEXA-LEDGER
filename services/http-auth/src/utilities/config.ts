import {type MongoClientOptions} from 'mongodb';
import {z} from 'zod';

const envSchema = z.object({
    PORT: z.string().default('4003'),
    SERVICE_NAME: z.string().default('AUTH_SERVICE'),
    CLERK_JWT_PUBLIC_KEY: z.string(),
    GRPC_PORT: z.string().default('50064'),
    //! DATABASE
    DB_URI: z.string(),
    DB_NAME: z.string().default('main'),
    DB_AUTH_COLLECTION: z.string().default('auth'),
    DB_USER_COLLECTION: z.string().default('users'),
    DB_STAT_COLLECTION: z.string().default('stats'),
});

const env = envSchema.parse(process.env);

export const config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_AUTH_COLLECTION: env.DB_AUTH_COLLECTION || 'auth',
    DB_USER_COLLECTION: env.DB_USER_COLLECTION || 'users',
    DB_STAT_COLLECTION: env.DB_STAT_COLLECTION || 'stats',
    DB_OPTIONS: {appName: env.SERVICE_NAME,} as MongoClientOptions,
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    GRPC_PORT: env.GRPC_PORT
};
