require('dotenv').config();
const {z} = require('zod');

const envSchema = z.object({
    PORT: z.string().default('4003'),
    SERVICE_NAME: z.string().default('BLOCKCHAIN_DATA'),
    PROVIDER_API_KEY: z.string(),
    ETHEREUM_NETWORK: z.string(),

    DB_URI: z.string(),
    DB_NAME: z.string().default('main'),
    DB_TRANSACTION_COLLECTION: z.string(),
    DB_BALANCE_COLLECTION: z.string(),
    DB_RECEIPT_COLLECTION: z.string(),
    DB_BLOCK_COLLECTION: z.string(),
});

const env = envSchema.parse(process.env);

/**@type {{
 SERVICE_NAME: string,
 PORT: string,
 PROVIDER_API_KEY: string,
 ETHEREUM_NETWORK: string,
 DB_URI: string,
 DB_NAME: string,
 DB_OPTIONS: {appName: string},
 DB_TRANSACTION_COLLECTION: string,
 DB_RECEIPT_COLLECTION: string,
 DB_BALANCE_COLLECTION: string,
 DB_BLOCK_COLLECTION: string
 }} */
const config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_OPTIONS: {appName: env.SERVICE_NAME},
    PROVIDER_API_KEY: env.PROVIDER_API_KEY,
    ETHEREUM_NETWORK: env.ETHEREUM_NETWORK,

    DB_TRANSACTION_COLLECTION: env.DB_TRANSACTION_COLLECTION,
    DB_BALANCE_COLLECTION: env.DB_BALANCE_COLLECTION,
    DB_RECEIPT_COLLECTION: env.DB_RECEIPT_COLLECTION,
    DB_BLOCK_COLLECTION: env.DB_BLOCK_COLLECTION,
};

module.exports = config;