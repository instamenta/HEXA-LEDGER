/** @file Error handling middleware. */
import {Request, Response} from 'express';

/**
 * @param error
 * @param request
 * @param response
 */
function errorMiddleware(error: Error, request: Request, response: Response): void {
   console.error(error.stack);
   console.error('Non-existing Uri:', request.url);
   response
      .status(500)
      .json({error: 'Path not existing'})
      .send('Path not existing')
      .end();
}

export default errorMiddleware;
