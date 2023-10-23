import type { Request, Response, NextFunction } from 'express';
export declare function _errorHandler(e: Error, r: Request, w: Response, n: NextFunction): void;
export declare function _404Handler(r: Request, w: Response, n: NextFunction): void;
