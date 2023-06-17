const {verifyToken, decodeToken} = require('../utilities/token-tools')
	, {Request, Response, NextFunction} = require('express')
;

/**
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
async function isAuthenticated(request, response, next) {
	try {
		const token = request.headers['x-authorization-token'];
		verifyToken(token);
		request.userData = await decodeToken(token);
		next();
	} catch (error) {
		response
			.status(401)
			.json({message: error.message})
			.end();
	}
}

/**
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
async function isGuest(request, response, next) {
	try {
		const token = request.headers['x-authorization-token'];
		if (token) {
			throw new Error('Valid authorization token');
		} else {
			next();
		}
	} catch (error) {
		response
			.status(401)
			.json({message: error.message})
			.end();
	}
}

module.exports = {isGuest, isAuthenticated};