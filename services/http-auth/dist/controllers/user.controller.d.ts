import { type Request as Req, type Response as Res } from 'express';
import * as zod from '../validation/user.zod';
import type * as I from '../types/user';
import { z } from 'zod';
import Vlogger from "@instamenta/vlogger";
import UserRepository from "../repositories/user.repository";
export default class UserController {
    #private;
    constructor(repository: UserRepository, vlogger: Vlogger);
    create(r: Req<object, object, z.infer<typeof zod.createBody>>, w: Res<I.OUserModel | string | Error>): Promise<void>;
    update(r: Req<{
        userId: string;
    }>, w: Res<I.OUserModel | string | Error>): Promise<void>;
    delete(r: Req<{
        param: string;
    }>, w: Res<I.OUserModel | string | Error>): Promise<void>;
    getOne(r: Req<{
        userId: string;
    }>, w: Res<string | I.OUserModel | Error>): Promise<void>;
    getMany(r: Req<object, {
        skip: number;
        limit: number;
    }>, w: Res<I.OUserModel[] | Error>): Promise<void>;
    getTotalCount(r: Req, w: Res): Promise<void>;
    addReferenceId(r: Req<{
        param: string;
        service: string;
        refId: string;
    }>, w: Res): Promise<void>;
    assignOwnership(r: Req<{
        param: string;
    }>, w: Res): Promise<void>;
}
