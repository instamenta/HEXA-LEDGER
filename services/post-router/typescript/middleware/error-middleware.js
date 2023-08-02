"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error Middleware used for handling errors.
 * @param error - The error object.
 * @param request - The Express request object.
 * @param response - The Express response object.
 * @param next - The next function to pass control to the next middleware.
 */
function errorMiddleware(error, request, response, next) {
    console.log();
    console.error(error.stack);
    console.error('Non-existing Uri:', request.url);
    response
        .status(500)
        .json({ error: 'Path not existing' })
        .end();
}
exports.default = errorMiddleware;
