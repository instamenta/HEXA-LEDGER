import { StrictAuthProp } from '@clerk/clerk-sdk-node';
import express from 'express';
export declare function initialize_server(): express.Express;
export declare function initialize_database(): import("mongodb").Db;
export declare class graceful_shutdown {
    static process_on(_cases_: string[]): void;
    static process_once(_cases_: string[]): void;
}
declare global {
    namespace Express {
        interface Request extends StrictAuthProp {
        }
    }
}
