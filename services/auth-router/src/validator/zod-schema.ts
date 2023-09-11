import {z} from 'zod';

export const authData = z.object({
   body: z.object({
      address: z.string().min(3),
      username: z.string().min(3),
      picture: z.string().min(3),
   })
})

export const authId = z.object({
   params: z.object({
      authId: z.string().length(24),
   }),
});


export const limitSkip = z.object({
   query: z.object({
      limit: z.coerce.number(),
      skip: z.coerce.number(),
   }),
});
