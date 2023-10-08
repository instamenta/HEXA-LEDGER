const {z} = require('zod');

const transactionHashSchema = z.string().refine(
    hash => /^0x[0-9a-fA-F]{64}$/.test(hash)
        || /^[0-9a-fA-F]{64}$/.test(hash),
    {message: '🚫 Invalid Ethereum transaction hash'}
);

const addressSchema = z.string().refine(
    address => /^0x[a-fA-F0-9]{40}$/.test(address)
        || /^0x0{40}$/.test(address),
    {message: '🚫 Invalid Ethereum address',}
);

const hashSchema = z.string().regex(
    /^(0x)?[0-9a-fA-F]+$/,
    {message: "Invalid hash format"}
);

module.exports = {
    transactionHashSchema,
    addressSchema,
    hashSchema,
}