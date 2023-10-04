import StatusCode from '@instamenta/http-status-codes';
import type {
    Request as Req, Response as Res, NextFunction as Next
} from 'express';

/* eslint-disable @typescript-eslint/no-unused-vars */

export function _errorHandler(e: Error, r: Req, w: Res, n: Next) {
    console.error('Error:', e);
    w.status(StatusCode.INTERNAL_SERVER_ERROR)
        .json({error: 'Internal Server Error!'}).end();
}

export function _404Handler(r: Req, w: Res, n: Next) {
    console.log(r.url);
    w.status(StatusCode.NOT_FOUND)
        .json({error: 'Not Found'}).end();
}