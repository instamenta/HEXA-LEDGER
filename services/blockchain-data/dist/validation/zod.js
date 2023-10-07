"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletAuthClaims = exports.threadIdParamOptional = exports.amountBody = exports.addressSchema = exports.transactionHashSchema = void 0;
const zod_1 = require("zod");
exports.transactionHashSchema = zod_1.z.string().refine(hash => /^0x[0-9a-fA-F]{64}$/.test(hash)
    || /^[0-9a-fA-F]{64}$/.test(hash), { message: '🚫 Invalid Ethereum transaction hash' });
exports.addressSchema = zod_1.z.string().refine(address => /^0x[a-fA-F0-9]{40}$/.test(address)
    || /^0x0{40}$/.test(address), { message: '🚫 Invalid Ethereum address', });
exports.amountBody = zod_1.z.object({
    amount: zod_1.z.coerce.number()
        .positive({ message: '💰 Amount must be a positive number.' })
});
exports.threadIdParamOptional = zod_1.z.object({
    threadId: zod_1.z.string()
        .length(24, { message: '🧵 Thread ID must be a string of 24 characters.' })
        .optional(),
});
exports.walletAuthClaims = zod_1.z.object({
    wallet: zod_1.z.string()
        .length(42, { message: '💼 Wallet must be a string of 42 characters.' })
});
