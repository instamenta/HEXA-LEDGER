import {z} from 'zod';

export const addressSchema = z.string().regex(/^(0x)?[0-9a-fA-F]{40}$/,
   {message: '🚫 Invalid Ethereum address.'});

export const amountSchema = z.number().positive();