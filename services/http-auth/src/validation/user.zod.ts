import { z } from 'zod';

export const createBody = z.object({
    wallet: z.string()
        .min(24, { message: '👤 Wallet must be a string of minimum 24 characters.' })
        .max(42, { message: '🚫 Wallet cannot exceed 42 characters.' }),
    name: z.string()
        .min(1, { message: '🚫 Name must be at least 1 character.' })
        .max(24, { message: '🚫 Name cannot exceed 24 characters.' }),
    role: z.string(),
    image: z.string(),
});

export const userIdOrWalletParam = z.object({
    param: z.string()
        .min(23, { message: '🧵 Thread ID must be a string of 24 characters.' })
        .max(50, { message: '🧵 Wallet must be a valid ethereum wallet.' }),
});

export const pageQuery = z.object({
   limit: z.coerce.number()
      .positive({ message: '🚫 Limit must be a positive number.' })
      .lt(100, { message: '🚫 Limit must be a positive number less than 100.' }),
   skip: z.coerce.number()
      .gte(0, { message: '🚫 Skip must be a non-negative number.' }),
});

export const updateBody = z.object({
    wallet: z.string()
        .min(24, { message: '👤 Wallet must be a string of minimum 24 characters.' })
        .max(42, { message: '🚫 Wallet cannot exceed 42 characters.' }),
    name: z.string()
        .min(1, { message: '🚫 Name must be at least 1 character.' })
        .max(24, { message: '🚫 Name cannot exceed 24 characters.' }),
    image: z.string(),
    images: z.array(z.string()),
});

export const refIdAndService = z.object({
    service: z.string(),
    refId: z.string(),
});

export const refIdAndType = z.object({
    type: z.string(),
    refId: z.string(),
});
