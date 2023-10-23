import { WithId } from 'mongodb';
import * as I from '../types/user';
import BaseUser from './base/base.user';
export default class UserModel extends BaseUser {
    constructor(props: WithId<I.IUserSchema>);
    get(): I.OUserModel;
    project<T>(): T & Partial<I.OUserModel>;
}
