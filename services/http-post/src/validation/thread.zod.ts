import {z} from 'zod';

export const create = z.object({
    body: z.object({
        name: z.string().min(1).max(48).trim(),
        description: z.string().min(3).max(120).trim().default('No Description!'),
        content: z.string().min(26).max(360).trim().default('No Content Provided!'),
        images: z.array(z.string()).default([]),
        owner: z.string().length(24),
        promoted: z.number().optional().default(0),
        tags: z.array(z.string()).default([]),
    }),
});
