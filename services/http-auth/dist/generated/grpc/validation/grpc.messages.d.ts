import { z } from "zod";
export declare const PromotedObject: z.ZodObject<{
    promoter: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodDate>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    promoter?: string | undefined;
    date?: Date | undefined;
    amount?: number | undefined;
}, {
    promoter?: string | undefined;
    date?: Date | undefined;
    amount?: number | undefined;
}>;
export declare const DonationObject: z.ZodObject<{
    donator: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodDate>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    donator?: string | undefined;
    date?: Date | undefined;
    amount?: number | undefined;
}, {
    donator?: string | undefined;
    date?: Date | undefined;
    amount?: number | undefined;
}>;
export declare const ThreadModel: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    imagesList: z.ZodArray<z.ZodOptional<z.ZodString>, "many">;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    owner: z.ZodOptional<z.ZodString>;
    deleted: z.ZodOptional<z.ZodBoolean>;
    promotedList: z.ZodArray<z.ZodObject<{
        promoter: z.ZodOptional<z.ZodString>;
        date: z.ZodOptional<z.ZodDate>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        promoter?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }, {
        promoter?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }>, "many">;
    donationsList: z.ZodArray<z.ZodObject<{
        donator: z.ZodOptional<z.ZodString>;
        date: z.ZodOptional<z.ZodDate>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        donator?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }, {
        donator?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }>, "many">;
    likesList: z.ZodArray<z.ZodOptional<z.ZodString>, "many">;
    dislikesList: z.ZodArray<z.ZodOptional<z.ZodString>, "many">;
    tagsList: z.ZodArray<z.ZodOptional<z.ZodString>, "many">;
    likesCount: z.ZodOptional<z.ZodNumber>;
    dislikesCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    imagesList: (string | undefined)[];
    promotedList: {
        promoter?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }[];
    donationsList: {
        donator?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }[];
    likesList: (string | undefined)[];
    dislikesList: (string | undefined)[];
    tagsList: (string | undefined)[];
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    content?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    owner?: string | undefined;
    deleted?: boolean | undefined;
    likesCount?: number | undefined;
    dislikesCount?: number | undefined;
}, {
    imagesList: (string | undefined)[];
    promotedList: {
        promoter?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }[];
    donationsList: {
        donator?: string | undefined;
        date?: Date | undefined;
        amount?: number | undefined;
    }[];
    likesList: (string | undefined)[];
    dislikesList: (string | undefined)[];
    tagsList: (string | undefined)[];
    id?: string | undefined;
    name?: string | undefined;
    description?: string | undefined;
    content?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    owner?: string | undefined;
    deleted?: boolean | undefined;
    likesCount?: number | undefined;
    dislikesCount?: number | undefined;
}>;
export declare const CreateRequest: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    content: z.ZodString;
    owner: z.ZodString;
    imagesList: z.ZodArray<z.ZodString, "many">;
    tagsList: z.ZodArray<z.ZodString, "many">;
    isPromoted: z.ZodBoolean;
    auth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auth: string;
    name: string;
    description: string;
    content: string;
    imagesList: string[];
    owner: string;
    tagsList: string[];
    isPromoted: boolean;
}, {
    auth: string;
    name: string;
    description: string;
    content: string;
    imagesList: string[];
    owner: string;
    tagsList: string[];
    isPromoted: boolean;
}>;
export declare const AmountWithAuthRequest: z.ZodObject<{
    auth: z.ZodString;
    amount: z.ZodNumber;
    threadId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auth: string;
    amount: number;
    threadId: string;
}, {
    auth: string;
    amount: number;
    threadId: string;
}>;
export declare const Pagination: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    page: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const WalletWithAuthRequest: z.ZodObject<{
    wallet: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    wallet: string;
    id: string;
}, {
    wallet: string;
    id: string;
}>;
export declare const IdRequest: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const PingPongMessage: z.ZodObject<{
    timestamp: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    timestamp: number;
}, {
    name: string;
    timestamp: number;
}>;
export declare const PromotedStats: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    count?: number | undefined;
    amount?: number | undefined;
}, {
    count?: number | undefined;
    amount?: number | undefined;
}>;
export declare const DonationsStats: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    amount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    count?: number | undefined;
    amount?: number | undefined;
}, {
    count?: number | undefined;
    amount?: number | undefined;
}>;
export declare const StatsModel: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    promotedList: z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        count?: number | undefined;
        amount?: number | undefined;
    }, {
        count?: number | undefined;
        amount?: number | undefined;
    }>;
    donationsList: z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        count?: number | undefined;
        amount?: number | undefined;
    }, {
        count?: number | undefined;
        amount?: number | undefined;
    }>;
    likesCount: z.ZodOptional<z.ZodNumber>;
    dislikesCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    promotedList: {
        count?: number | undefined;
        amount?: number | undefined;
    };
    donationsList: {
        count?: number | undefined;
        amount?: number | undefined;
    };
    id?: string | undefined;
    name?: string | undefined;
    likesCount?: number | undefined;
    dislikesCount?: number | undefined;
}, {
    promotedList: {
        count?: number | undefined;
        amount?: number | undefined;
    };
    donationsList: {
        count?: number | undefined;
        amount?: number | undefined;
    };
    id?: string | undefined;
    name?: string | undefined;
    likesCount?: number | undefined;
    dislikesCount?: number | undefined;
}>;
