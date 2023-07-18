import {sign, verify} from 'jsonwebtoken';
import {IUser} from './types/base-types';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';

class TokenTools {

    /**
     * @param u
     * @returns
     */
    public static GENERATE_TOKEN(u: IUser): Promise<string> {
        const PAYLOAD = {
            username: u.username,
            email: u.email,
            _id: u._id,
            picture: u.picture,
        };
        return new Promise((resolve, reject) => {
            sign(PAYLOAD, 'SECRET', {expiresIn: '60 days'},
                (error, token) => error
                    ? reject(error)
                    : resolve(token!)
            );
        });
    }

    /**
     * @param token
     * @returns
     */
    public static DECODE_TOKEN(token: string): Promise<string> {
        return new Promise((resolve, reject) => {
            verify(token, 'SECRET', (error, decoded) => error
                ? reject(error)
                : resolve(<string>decoded)
            );
        });
    }

    /**
     * @param token
     * @returns
     */
    public static VERIFY_TOKEN(token: string): string {
        return <string>verify(token, TOKEN_SECRET);
    }
}

export default TokenTools;