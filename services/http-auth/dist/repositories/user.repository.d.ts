import UserModel from '../models/user.model';
import * as I from "../types/user";
import { Db } from 'mongodb';
export default class UserRepository {
    #private;
    constructor(db: Db);
    create(d: I.PCreateUser): Promise<UserModel | null>;
    getTotalCount(): Promise<number>;
    delete(param: string): Promise<UserModel | null>;
    update(param: string, d: I.PUpdateUser): Promise<UserModel | null>;
    getOneById(param: string): Promise<UserModel | null>;
    getMany(skip: number, limit: number): Promise<UserModel[]>;
    addReferenceId(param: string, service: string, refId: string): Promise<boolean>;
    assignOwnership(param: string, type: string, refId: string): Promise<boolean>;
}
