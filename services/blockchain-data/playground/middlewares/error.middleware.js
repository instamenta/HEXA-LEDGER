const StatusCode = require('../utilities/statusCodes')
    , {Request, Response, NextFunction} = require('express')
;

/**
 * @param {Error} error
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
function _errorHandler(error, request, response, next) {
    response.status(StatusCode.INTERNAL_SERVER_ERROR).json({error: 'Internal Server Error!'}).end();
    console.error('Error:', error);
}

/**
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
function _404Handler(request, response, next) {
    response.status(StatusCode.NOT_FOUND).json({error: 'Not Found'}).end();
    console.log(request.url);
}

module.exports = {
    _errorHandler,
    _404Handler,
}