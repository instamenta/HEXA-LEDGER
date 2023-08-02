import { Request, Response, NextFunction } from 'express';

/**
 * Error Middleware used for handling errors.
 * @param error - The error object.
 * @param request - The Express request object.
 * @param response - The Express response object.
 * @param next - The next function to pass control to the next middleware.
 */
function errorMiddleware(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
): void {
    console.log()
    console.error(error.stack);
    console.error('Non-existing Uri:', request.url);
    response
        .status(500)
        .json({ error: 'Path not existing' })
        .end();
}

export default errorMiddleware;
