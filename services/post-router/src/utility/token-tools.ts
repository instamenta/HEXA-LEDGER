import {verify} from 'jsonwebtoken';
import {ITokenData} from '../middleware/auth-middleware';
const TOKEN_SECRET : string = process.env.TOKEN_SECRET || 'SECRET';

export {decodeToken};

/**
 * @param token
 * @returns
 */
function decodeToken(token: string): Promise<ITokenData> {
	return new Promise((resolve, reject) => {
		verify(token, TOKEN_SECRET, (error, decoded) => {
			error ? reject(error) : resolve(<ITokenData>decoded);
		});
	});
}


