import { z } from 'zod';

export const createBody = z.object({
   name: z.string()
      .min(1, { message: '🚫 Name must be at least 1 character.' })
      .max(48, { message: '🚫 Name cannot exceed 48 characters.' })
      .trim(),
   description: z.string()
      .min(3, { message: '📝 Description must be at least 3 characters.' })
      .max(120, { message: '🚫 Description cannot exceed 120 characters.' })
      .trim()
      .default('No Description!'),
   content: z.string()
      .min(26, { message: '📜 Content must be at least 26 characters.' })
      .max(360, { message: '🚫 Content cannot exceed 360 characters.' })
      .trim()
      .default('No Content Provided!'),
   images: z.array(z.string())
      .default([]),
   owner: z.string()
      .min(24, { message: '👤 Owner must be a string of minimum 24 characters.' })
      .max(42, { message: '🚫 Wallet must be a string of maximum 42 characters.' }),
   promoted: z.number()
      .min(1, { message: '🌟 Promotion amount must be a positive number.' })
      .optional()
      .default(1),
   tags: z.array(z.string())
      .default([]),
});

export const amountBody = z.object({
   amount: z.coerce.number()
      .positive({ message: '💰 Amount must be a positive number.' })
});

export const threadIdParam = z.object({
   threadId: z.string()
      .length(24, { message: '🧵 Thread ID must be a string of 24 characters.' }),
});

export const threadIdParamOptional = z.object({
   threadId: z.string()
      .length(24, { message: '🧵 Thread ID must be a string of 24 characters.' })
      .optional(),
});

export const walletAuthClaims = z.object({
   wallet: z.string()
      .length(42, { message: '💼 Wallet must be a string of 42 characters.' })
});

export const walletParam = z.object({
   wallet: z.string()
      .length(42, { message: '💼 Wallet must be a string of 42 characters.' })
});

export const pageQuery = z.object({
   limit: z.coerce.number()
      .positive({ message: '🚫 Limit must be a positive number.' })
      .lt(100, { message: '🚫 Limit must be a positive number less than 100.' }),
   skip: z.coerce.number()
      .gte(0, { message: '🚫 Skip must be a non-negative number.' }),
});

export const updateBody = z.object({
   name: z.string()
      .min(1, { message: '🚫 Name must be at least 1 character.' })
      .max(48, { message: '🚫 Name cannot exceed 48 characters.' })
      .trim(),
   description: z.string()
      .min(3, { message: '📝 Description must be at least 3 characters.' })
      .max(120, { message: '🚫 Description cannot exceed 120 characters.' })
      .trim()
      .default('No Description!'),
   content: z.string()
      .min(26, { message: '📜 Content must be at least 26 characters.' })
      .max(360, { message: '🚫 Content cannot exceed 360 characters.' })
      .trim()
      .default('No Content Provided!'),
   images: z.array(z.string())
      .default([]),
   tags: z.array(z.string())
      .default([]),
});
