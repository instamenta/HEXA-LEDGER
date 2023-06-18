"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param error
 * @param request
 * @param response
 */
function errorMiddleware(error, request, response) {
    console.error(error.stack);
    console.error('Non-existing Uri:', request.url);
    response.status(500)
        .json({ error: 'Path not existing' })
        .send('Path not existing')
        .end();
}
exports.default = errorMiddleware;
