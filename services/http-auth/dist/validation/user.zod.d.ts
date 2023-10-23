import { z } from 'zod';
export declare const createBody: z.ZodObject<{
    wallet: z.ZodString;
    name: z.ZodString;
    role: z.ZodString;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    wallet: string;
    name: string;
    role: string;
    image: string;
}, {
    wallet: string;
    name: string;
    role: string;
    image: string;
}>;
export declare const userIdOrWalletParam: z.ZodObject<{
    param: z.ZodString;
}, "strip", z.ZodTypeAny, {
    param: string;
}, {
    param: string;
}>;
export declare const pageQuery: z.ZodObject<{
    limit: z.ZodNumber;
    skip: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    skip: number;
}, {
    limit: number;
    skip: number;
}>;
export declare const updateBody: z.ZodObject<{
    wallet: z.ZodString;
    name: z.ZodString;
    image: z.ZodString;
    images: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    wallet: string;
    name: string;
    image: string;
    images: string[];
}, {
    wallet: string;
    name: string;
    image: string;
    images: string[];
}>;
export declare const refIdAndService: z.ZodObject<{
    service: z.ZodString;
    refId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    service: string;
    refId: string;
}, {
    service: string;
    refId: string;
}>;
export declare const refIdAndType: z.ZodObject<{
    type: z.ZodString;
    refId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    refId: string;
}, {
    type: string;
    refId: string;
}>;
