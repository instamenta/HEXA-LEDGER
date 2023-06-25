import {Request} from 'express';

export type ITokenData = {
    _id: string;
    username: string;
    email: string;
    picture: string;
    iat: number;
    exp: number;
}

export interface iRequestWithUser extends Request {
    userData: ITokenData
}
