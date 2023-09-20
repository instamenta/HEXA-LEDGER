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

export const postIdParam = z.object({
   postId: z.string().length(24),
})

export const updateBody = z.object({
   name: z.string().min(1).max(48).trim(),
   description: z.string().min(3).max(120).trim().default('No Description!'),
   content: z.string().min(26).max(360).trim().default('No Content Provided!'),
   images: z.array(z.string()).default([]),
   tags: z.array(z.string()).default([]),
})