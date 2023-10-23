"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsModel = exports.DonationsStats = exports.PromotedStats = exports.PingPongMessage = exports.IdRequest = exports.WalletWithAuthRequest = exports.Pagination = exports.AmountWithAuthRequest = exports.CreateRequest = exports.ThreadModel = exports.DonationObject = exports.PromotedObject = void 0;
const zod_1 = require("zod");
exports.PromotedObject = zod_1.z.object({
    promoter: zod_1.z.string()
        .min(1, { message: 'Promoter must be at least 1 character.' })
        .max(48, { message: 'Promoter cannot exceed 48 characters.' })
        .optional(),
    date: zod_1.z.date()
        .min(new Date(2000, 0, 1), { message: 'Date must be after 2000-01-01.' })
        .optional(),
    amount: zod_1.z.number()
        .positive({ message: 'Amount must be a positive number.' })
        .optional(),
});
exports.DonationObject = zod_1.z.object({
    donator: zod_1.z.string()
        .min(1, { message: 'Donator must be at least 1 character.' })
        .max(48, { message: 'Donator cannot exceed 48 characters.' })
        .optional(),
    date: zod_1.z.date()
        .min(new Date(2000, 0, 1), { message: 'Date must be after 2000-01-01.' })
        .optional(),
    amount: zod_1.z.number()
        .positive({ message: 'Amount must be a positive number.' })
        .optional()
});
exports.ThreadModel = zod_1.z.object({
    id: zod_1.z.string()
        .min(24, { message: 'Thread ID must be at least 24 characters.' })
        .max(42, { message: 'Thread ID cannot exceed 42 characters.' })
        .optional(),
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' })
        .max(48, { message: 'Name cannot exceed 48 characters.' })
        .optional(),
    description: zod_1.z.string()
        .min(3, { message: 'Description must be at least 3 characters.' })
        .max(120, { message: 'Description cannot exceed 120 characters.' })
        .optional(),
    content: zod_1.z.string()
        .min(26, { message: 'Content must be at least 26 characters.' })
        .max(360, { message: 'Content cannot exceed 360 characters.' })
        .optional(),
    imagesList: zod_1.z.array(zod_1.z.string().optional()),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    owner: zod_1.z.string()
        .min(24, { message: 'Owner must be at least 24 characters.' })
        .max(42, { message: 'Owner cannot exceed 42 characters.' })
        .optional(),
    deleted: zod_1.z.boolean().optional(),
    promotedList: zod_1.z.array(exports.PromotedObject),
    donationsList: zod_1.z.array(exports.DonationObject),
    likesList: zod_1.z.array(zod_1.z.string().optional()),
    dislikesList: zod_1.z.array(zod_1.z.string().optional()),
    tagsList: zod_1.z.array(zod_1.z.string().optional()),
    likesCount: zod_1.z.number()
        .min(0, { message: 'Likes count cannot be negative.' })
        .optional(),
    dislikesCount: zod_1.z.number()
        .min(0, { message: 'Dislikes count cannot be negative.' })
        .optional(),
});
exports.CreateRequest = zod_1.z.object({
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' })
        .max(48, { message: 'Name cannot exceed 48 characters.' }),
    description: zod_1.z.string()
        .min(3, { message: 'Description must be at least 3 characters.' })
        .max(120, { message: 'Description cannot exceed 120 characters.' }),
    content: zod_1.z.string()
        .min(26, { message: 'Content must be at least 26 characters.' })
        .max(360, { message: 'Content cannot exceed 360 characters.' }),
    owner: zod_1.z.string()
        .min(24, { message: 'Owner must be at least 24 characters.' })
        .max(42, { message: 'Owner cannot exceed 42 characters.' }),
    imagesList: zod_1.z.array(zod_1.z.string()),
    tagsList: zod_1.z.array(zod_1.z.string()),
    isPromoted: zod_1.z.boolean(),
    auth: zod_1.z.string()
        .min(1, { message: 'Auth must be at least 1 character.' })
});
exports.AmountWithAuthRequest = zod_1.z.object({
    auth: zod_1.z.string()
        .min(23, { message: 'Auth must be at least 1 character.' }),
    amount: zod_1.z.number()
        .positive({ message: 'Amount must be a positive number.' }),
    threadId: zod_1.z.string()
        .min(23, { message: 'threadId must be at least 23 character.' }),
});
exports.Pagination = zod_1.z.object({
    page: zod_1.z.number()
        .min(0, { message: 'Page must be a non-negative number.' })
        .default(0),
    limit: zod_1.z.number()
        .positive({ message: 'Limit must be a positive number.' })
        .max(100, { message: 'Limit must be less than 100.' })
        .default(10),
});
exports.WalletWithAuthRequest = zod_1.z.object({
    wallet: zod_1.z.string()
        .min(42, { message: 'Wallet must be at least 42 characters.' }),
    id: zod_1.z.string()
        .min(1, { message: 'ID must be at least 1 character.' }),
});
exports.IdRequest = zod_1.z.object({
    id: zod_1.z.string()
        .min(1, { message: 'ID must be at least 1 character.' })
});
exports.PingPongMessage = zod_1.z.object({
    timestamp: zod_1.z.number()
        .positive('Timestamp must be a positive number.'),
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' }),
});
exports.PromotedStats = zod_1.z.object({
    count: zod_1.z.number()
        .min(0, { message: 'Count must be a non-negative number.' })
        .optional(),
    amount: zod_1.z.number()
        .positive({ message: 'Amount must be a positive number.' })
        .optional(),
});
exports.DonationsStats = zod_1.z.object({
    count: zod_1.z.number()
        .min(0, { message: 'Count must be a non-negative number.' })
        .optional(),
    amount: zod_1.z.number()
        .positive({ message: 'Amount must be a positive number.' })
        .optional(),
});
exports.StatsModel = zod_1.z.object({
    id: zod_1.z.string()
        .min(1, { message: 'ID must be at least 1 character.' })
        .optional(),
    name: zod_1.z.string()
        .min(1, { message: 'Name must be at least 1 character.' })
        .max(48, { message: 'Name cannot exceed 48 characters.' })
        .optional(),
    promotedList: exports.PromotedStats,
    donationsList: exports.DonationsStats,
    likesCount: zod_1.z.number()
        .min(0, { message: 'Likes count cannot be negative.' })
        .optional(),
    dislikesCount: zod_1.z.number()
        .min(0, { message: 'Dislikes count cannot be negative.' })
        .optional(),
});
