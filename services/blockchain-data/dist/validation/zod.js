"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletAuthClaims = exports.threadIdParamOptional = exports.amountBody = exports.txHashSchema = void 0;
const zod_1 = require("zod");
exports.txHashSchema = zod_1.z.string().refine(hash => /^0x[0-9a-fA-F]{64}$/.test(hash)
    || /^[0-9a-fA-F]{64}$/.test(hash), { message: '🚫 Invalid Ethereum transaction hash' });
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
