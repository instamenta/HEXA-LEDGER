import {type MongoClientOptions} from 'mongodb';
import crypto_data from './crypto';
import motherboard from "./motherboard";
import {z} from 'zod';


function load_environment_variables() {
    const crypto = getCryptoData();

    const env = envSchema.parse(process.env);

    const envSchema = z.object({
        PORT: z.string().default('4004'),
        SERVICE_NAME: z.string().default('CONTRACT_SERVICE'),
        CLERK_JWT_PUBLIC_KEY: z.string(),
        GRPC_PORT: z.string().default('50074'),
        //! DATABASE
        DB_URI: z.string(),
        DB_NAME: z.string().default('main'),
        DB_WALLET_COLLECTION: z.string().default('wallet'),
        INFURA_API_KEY: z.string(),
        SEPOLIA_PRIVATE_KEY: z.string(),
        OWNER_ADDRESS: z.string(),
        CONTRACT_ADDRESS: z.string(),
    });

    return {
        SERVICE_NAME: env.SERVICE_NAME,
        PORT: env.PORT,
        DB_URI: env.DB_URI,
        DB_NAME: env.DB_NAME,
        DB_AUTH_COLLECTION: env.DB_WALLET_COLLECTION || 'wallet',
        DB_OPTIONS: {appName: env.SERVICE_NAME,} as MongoClientOptions,
        CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
        GRPC_PORT: env.GRPC_PORT,
        INFURA_API_KEY: env.INFURA_API_KEY,
        SEPOLIA_PRIVATE_KEY: env.SEPOLIA_PRIVATE_KEY,
        OWNER_ADDRESS: env.OWNER_ADDRESS,
        CONTRACT_ADDRESS: env.CONTRACT_ADDRESS,
        crypto
    };
}

export const config = load_environment_variables()

export default config;

function getCryptoSchema() {
    return z.object({
        contract: z.object({
            SimpleWallet: z.string(),
            Threads: z.string(),
        }),
        owner_address: z.string(),
        private_key: z.string(),
        chain_id: z.number(),
        network_name: z.string(),
        provider_url: z.string(),
    })
}

function getCryptoData() {
    if (motherboard.target === 'hardhat') {
        return getCryptoSchema().parse(crypto_data.hardhat);
    } else if (motherboard.target === 'sepolia') {
        return getCryptoSchema().parse(crypto_data.sepolia);
    } else {
        throw new Error('Provide network target in motherboard')
    }
}