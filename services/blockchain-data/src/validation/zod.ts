import {z} from 'zod';

export const transactionHashSchema = z.string().refine(
    hash => /^0x[0-9a-fA-F]{64}$/.test(hash)
        || /^[0-9a-fA-F]{64}$/.test(hash),
    {message: '🚫 Invalid Ethereum transaction hash'}
);

export const addressSchema = z.string().refine(
    address => /^0x[a-fA-F0-9]{40}$/.test(address)
        || /^0x0{40}$/.test(address),
    {message: '🚫 Invalid Ethereum address',}
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
