import {Request, Response, NextFunction} from 'express';
import StatusCode from '@instamenta/http-status-codes';

export function _errorHandler(e: Error, r: Request, w: Response, n: NextFunction) {
   console.error('Error:', e);

   w.status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({error: 'Internal Server Error!'})
      .end();
}

export function _404Handler(r: Request, w: Response, n: NextFunction) {
   w.status(StatusCode.NOT_FOUND)
      .json({ error: 'Not Found' })
      .end();
}