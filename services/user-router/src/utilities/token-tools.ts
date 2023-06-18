import {verify} from 'jsonwebtoken';
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';

/**
 * @param token
 * @returns
 */
function decodeToken(token: string): Promise<string> {
	return new Promise((resolve, reject) => {
		verify(token, 'SECRET', (error, decoded) => {
			error ? reject(error) : resolve(decoded as string);
		});
	});
}

/**
 * @param token
 * @returns
 */
function verifyToken(token: string): string {
	return verify(token, TOKEN_SECRET) as string;
}

export {decodeToken, verifyToken};

