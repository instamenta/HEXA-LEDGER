import { NextFunction, Request, Response } from 'express';
export declare function _metrics_endpoint(req: Request, res: Response): Promise<void>;
export declare function _metrics_middleware(req: Request, res: Response, next: NextFunction): void;
