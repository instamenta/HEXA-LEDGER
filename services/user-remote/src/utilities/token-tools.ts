import {sign, verify} from 'jsonwebtoken';
import {IUser} from '../models/user-schema';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';

/**
 * @param u
 * @returns
 */
function generateToken(u: IUser): Promise<string> {
	const PAYLOAD = {
		username: u.username,
		email: u.email,
		_id: u._id,
		picture: u.picture,
	};
	return new Promise((resolve, reject) => {
		sign(PAYLOAD, 'SECRET', {expiresIn: '60 days'},
			(error, token) => error ? reject(error) : resolve(token!)
		);
	});
}

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

export {generateToken, decodeToken, verifyToken};