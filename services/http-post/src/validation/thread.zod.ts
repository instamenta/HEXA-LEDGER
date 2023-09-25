import {z} from 'zod';

export const createBody = z.object({
   name: z.string().min(1).max(48).trim(),
   description: z.string().min(3).max(120).trim().default('No Description!'),
   content: z.string().min(26).max(360).trim().default('No Content Provided!'),
   images: z.array(z.string()).default([]),
   owner: z.string().length(24),
   promoted: z.number().optional().default(0),
   tags: z.array(z.string()).default([]),
});

export const amountBody = z.object({
   amount: z.coerce.number().positive()
});

export const threadIdParam = z.object({
   threadId: z.string().length(24),
});

export const threadIdParamOptional = z.object({
   threadId: z.string().length(24).optional(),
});

export const walletAuthClaims = z.object({
   wallet: z.string().length(42)
});

export const walletParam = z.object({
   wallet: z.string().length(42)
});

export const pageQuery = z.object({
   limit: z.coerce.number().positive().lt(100),
   skip: z.coerce.number().gte(0),
});

export const updateBody = z.object({
   name: z.string().min(1).max(48).trim(),
   description: z.string().min(3).max(120).trim().default('No Description!'),
   content: z.string().min(26).max(360).trim().default('No Content Provided!'),
   images: z.array(z.string()).default([]),
   tags: z.array(z.string()).default([]),
});