import {z} from "zod";

export const PromotedObject = z.object({
   promoter: z.string()
      .min(1, {message: '🚫 Promoter must be at least 1 character.'})
      .max(48, {message: '🚫 Promoter cannot exceed 48 characters.'})
      .optional(),
   date: z.date()
      .min(new Date(2000, 0, 1), {message: '🚫 Date must be after 2000-01-01.'})
      .optional(),
   amount: z.number()
      .positive({message: '🚫 Amount must be a positive number.'})
      .optional(),
});

export const DonationObject = z.object({
   donator: z.string()
      .min(1, {message: '🚫 Donator must be at least 1 character.'})
      .max(48, {message: '🚫 Donator cannot exceed 48 characters.'})
      .optional(),
   date: z.date()
      .min(new Date(2000, 0, 1), {message: '🚫 Date must be after 2000-01-01.'})
      .optional(),
   amount: z.number()
      .positive({message: '🚫 Amount must be a positive number.'})
      .optional()
});

export const ThreadModel = z.object({
   id: z.string()
      .min(24, {message: '🚫 Thread ID must be at least 24 characters.'})
      .max(42, {message: '🚫 Thread ID cannot exceed 42 characters.'})
      .optional(),
   name: z.string()
      .min(1, {message: '🚫 Name must be at least 1 character.'})
      .max(48, {message: '🚫 Name cannot exceed 48 characters.'})
      .optional(),
   description: z.string()
      .min(3, {message: '🚫 Description must be at least 3 characters.'})
      .max(120, {message: '🚫 Description cannot exceed 120 characters.'})
      .optional(),
   content: z.string()
      .min(26, {message: '🚫 Content must be at least 26 characters.'})
      .max(360, {message: '🚫 Content cannot exceed 360 characters.'})
      .optional(),
   imagesList: z.array(z.string().optional()),
   createdAt: z.date().optional(),
   updatedAt: z.date().optional(),
   owner: z.string()
      .min(24, {message: '🚫 Owner must be at least 24 characters.'})
      .max(42, {message: '🚫 Owner cannot exceed 42 characters.'})
      .optional(),
   deleted: z.boolean().optional(),
   promotedList: z.array(PromotedObject),
   donationsList: z.array(DonationObject),
   likesList: z.array(z.string().optional()),
   dislikesList: z.array(z.string().optional()),
   tagsList: z.array(z.string().optional()),
   likesCount: z.number()
      .min(0, {message: '🚫 Likes count cannot be negative.'})
      .optional(),
   dislikesCount: z.number()
      .min(0, {message: '🚫 Dislikes count cannot be negative.'})
      .optional(),
});

export const CreateRequest = z.object({
   name: z.string()
      .min(1, {message: '🚫 Name must be at least 1 character.'})
      .max(48, {message: '🚫 Name cannot exceed 48 characters.'})
      .optional(),
   description: z.string()
      .min(3, {message: '🚫 Description must be at least 3 characters.'})
      .max(120, {message: '🚫 Description cannot exceed 120 characters.'})
      .optional(),
   content: z.string()
      .min(26, {message: '🚫 Content must be at least 26 characters.'})
      .max(360, {message: '🚫 Content cannot exceed 360 characters.'})
      .optional(),
   owner: z.string()
      .min(24, {message: '🚫 Owner must be at least 24 characters.'})
      .max(42, {message: '🚫 Owner cannot exceed 42 characters.'})
      .optional(),
   imagesList: z.array(z.string().optional()),
   tagsList: z.array(z.string().optional()),
   isPromoted: z.boolean().optional(),
   auth: z.string()
      .min(1, {message: '🚫 Auth must be at least 1 character.'})
      .optional(),
});

export const AmountWithAuthRequest = z.object({
   auth: z.string()
      .min(1, {message: '🚫 Auth must be at least 1 character.'})
      .optional(),
   amount: z.number()
      .positive({message: '🚫 Amount must be a positive number.'})
      .optional(),
   threadId: z.string()
      .min(23, {message: '🚫 threadId must be at least 23 character.'})
      .optional(),
});

export const Pagination = z.object({
   page: z.number()
      .min(0, {message: '🚫 Page must be a non-negative number.'})
      .optional(),
   limit: z.number()
      .positive({message: '🚫 Limit must be a positive number.'})
      .max(100, {message: '🚫 Limit must be less than 100.'})
      .optional(),
});

export const WalletWithAuthRequest = z.object({
   wallet: z.string()
      .min(42, {message: '🚫 Wallet must be at least 42 characters.'})
      .optional(),
   id: z.string()
      .min(1, {message: '🚫 ID must be at least 1 character.'})
      .optional(),
});

export const IdRequest = z.object({
   id: z.string()
      .min(1, {message: '🚫 ID must be at least 1 character.'})
      .optional(),
});

export const PromotedStats = z.object({
   count: z.number()
      .min(0, {message: '🚫 Count must be a non-negative number.'})
      .optional(),
   amount: z.number()
      .positive({message: '🚫 Amount must be a positive number.'})
      .optional(),
});

export const DonationsStats = z.object({
   count: z.number()
      .min(0, {message: '🚫 Count must be a non-negative number.'})
      .optional(),
   amount: z.number()
      .positive({message: '🚫 Amount must be a positive number.'})
      .optional(),
});

export const StatsModel = z.object({
   id: z.string()
      .min(1, {message: '🚫 ID must be at least 1 character.'})
      .optional(),
   name: z.string()
      .min(1, {message: '🚫 Name must be at least 1 character.'})
      .max(48, {message: '🚫 Name cannot exceed 48 characters.'})
      .optional(),
   promotedList: z.array(PromotedStats),
   donationsList: z.array(DonationsStats),
   likesCount: z.number()
      .min(0, {message: '🚫 Likes count cannot be negative.'})
      .optional(),
   dislikesCount: z.number()
      .min(0, {message: '🚫 Dislikes count cannot be negative.'})
      .optional(),
});

