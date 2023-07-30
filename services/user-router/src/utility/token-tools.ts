/** @file Token tools used for cookies and jwt. */
import {verify} from 'jsonwebtoken';
import {ITokenData} from '../middleware/auth-middleware';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';

/**
 * @param token
 * @returns
 */
function decodeToken(token: string): Promise<ITokenData> {
    return new Promise((resolve, reject) => {
        verify(token, 'SECRET', (error, decoded) => {
            error
                ? reject(error)
                : resolve(decoded as ITokenData);
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

