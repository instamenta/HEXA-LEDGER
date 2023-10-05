import {z} from 'zod';

export const txHashSchema = z.string().refine(
    hash => /^0x[0-9a-fA-F]{64}$/.test(hash)
        || /^[0-9a-fA-F]{64}$/.test(hash),
    {message: '🚫 Invalid Ethereum transaction hash'}
);


export const amountBody = z.object({
    amount: z.coerce.number()
        .positive({message: '💰 Amount must be a positive number.'})
});


export const threadIdParamOptional = z.object({
    threadId: z.string()
        .length(24, {message: '🧵 Thread ID must be a string of 24 characters.'})
        .optional(),
});

export const walletAuthClaims = z.object({
    wallet: z.string()
        .length(42, {message: '💼 Wallet must be a string of 42 characters.'})
});
