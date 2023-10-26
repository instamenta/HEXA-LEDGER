"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
const zod_1 = require("zod");
exports.addressSchema = zod_1.z.string().regex(/^(0x)?[0-9a-fA-F]{40}$/, { message: '🚫 Invalid Ethereum address.' });
