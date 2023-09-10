import {Request, Response, NextFunction} from 'express';
import StatusCode from '@instamenta/http-status-codes'

export default function errorMiddleware(
   error: Error,
   req: Request,
   res: Response,
   next: NextFunction
): void {
   console.log('==================================')
   console.error('[Request URI]: [', req.url, ']\n', error.stack);
   res.status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({error: 'Internal Service Error'})
      .end();
}
