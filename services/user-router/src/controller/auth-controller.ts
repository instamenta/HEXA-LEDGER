import * as AUTH_CLIENT from '../client/auth';
import {Request, Response} from 'express';

/**
 * @param request
 * @param response
 * @returns
 */
async function register(request: Request, response: Response): Promise<void> {
	try {
		const {username, email, password} = request.body;

		await AUTH_CLIENT.registerUser(username, email, password)
			.then(async (User) => {
				response.json(User).status(200).end();
			})
			.catch((error) => {
				throw new Error('Register Error: ' + error.message);
			});
	} catch (error: Error | any) {
		console.log(error);
		response.json({message: error.message}).status(400).end();
	}
}

/**
 * @param request
 * @param response
 * @returns
 */
async function login(request: Request, response: Response): Promise<void> {
	try {
		const {email, password} = request.body;
		await AUTH_CLIENT.loginUser(email, password)
			.then(async (User) => {
				response.json(User).status(200).end();
			})
			.catch((error) => {
				throw new Error('Login Error: ' + error.message);
			});
	} catch (error: Error | any) {
		console.error(error);
		response.json({message: error.message}).status(400).end();
	}
}

export {login, register};
