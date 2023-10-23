import { type MongoClientOptions } from 'mongodb';
export declare const config: {
    SERVICE_NAME: string;
    PORT: string;
    DB_URI: string;
    DB_NAME: string;
    DB_AUTH_COLLECTION: string;
    DB_USER_COLLECTION: string;
    DB_STAT_COLLECTION: string;
    DB_OPTIONS: MongoClientOptions;
    CLERK_JWT_PUBLIC_KEY: string;
    GRPC_PORT: string;
};
