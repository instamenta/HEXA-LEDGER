/* eslint-disable @typescript-eslint/no-unused-vars */
import StatusCode from '@instamenta/http-status-codes';
import type {Request, Response, NextFunction} from 'express';
import Vlogger from "@instamenta/vlogger";

export function _errorHandler(e: Error, r: Request, w: Response, n: NextFunction) {
    Vlogger.getInstance().getVlogger('ErrorMiddleware').error({e, f: '_errorHandler'})
    w.status(StatusCode.INTERNAL_SERVER_ERROR)
        .json({error: 'Internal Server Error!'}).end();
}

export function _404Handler(r: Request, w: Response, n: NextFunction) {
    Vlogger.getInstance().getVlogger('ErrorMiddleware').error({e: 'Not Found 404 ', f: '_404Handler', m: r.url})
    w.status(StatusCode.NOT_FOUND)
        .json({error: 'Not Found'}).end();
}