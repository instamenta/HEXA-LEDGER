/** @file Error handling middleware. */
import {Request, Response} from 'express';
import HttpStatus from "@instamenta/http-status-codes";

/**
 * @param e
 * @param req
 * @param res
 */
export default function errorMiddleware(e: Error, req: Request, res: Response): void {
   console.error('[Non-existing Uri:', req.url, '] Error: ', e);

   res.status(HttpStatus.NOT_FOUND)
      .json({error: `Path is not handled by service ${req.url}`})
      .end();
}