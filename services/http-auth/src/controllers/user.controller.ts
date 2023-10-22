import {type Request as Req, type Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/user.zod';
import type * as I from '../types/user';
import UserModel from '../models/user.model';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import Vlogger, {type IVlog} from "@instamenta/vlogger";
import UserRepository from "../repositories/user.repository";

export default class UserController {
    readonly #repository: UserRepository;
    readonly #vlog: IVlog;

    constructor(repository: UserRepository, vlogger: Vlogger) {
        this.#repository = repository;
        this.#vlog = vlogger.getVlogger('ThreadController');
    }

    public async create(
        r: Req<object, object, z.infer<typeof zod.createBody>>,
        w: Res<I.OUserModel | string | Error>
    ): Promise<void> {
        this.#vlog.debug({f: 'create', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const userData = zod.createBody.parse(r.body);
            const clerkId = r.auth.claims?.clerk_id;

            if (!r.auth.hasOwnProperty('claims') || typeof clerkId !== 'string') {
                w.status(StatusCode.UNAUTHORIZED).end();
                return this.#vlog.info({f: 'create', m: r.ip, d: r.body})
            }

            this.#repository.create({...userData, clerkId})
                .then((model: UserModel | null) => model instanceof UserModel
                    ? w.status(StatusCode.CREATED)
                        .json(model.get()).end()
                    : w.status(StatusCode.BAD_REQUEST)
                        .json('Failed to create').end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async update(
        r: Req<{ userId: string }>,
        w: Res<I.OUserModel | string | Error>
    ): Promise<void> {
        this.#vlog.debug({f: 'update', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {param} = zod.userIdOrWalletParam.parse(r.params);
            const userData = zod.updateBody.parse(r.body);

            this.#repository.update(param, userData)
                .then((model: UserModel | null) =>
                    model instanceof UserModel
                        ? w.status(StatusCode.CREATED)
                            .json(model.get()).end()
                        : w.status(StatusCode.NOT_FOUND)
                            .json('Failed to create').end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async delete(
        r: Req<{ threadId: string }>,
        w: Res<I.OUserModel | string | Error>
    ): Promise<void> {
        this.#vlog.debug({f: 'delete', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {param} = zod.userIdOrWalletParam.parse(r.params);

            this.#repository.delete(param)
                .then((model: UserModel | null) =>
                    model instanceof UserModel
                        ? w.status(StatusCode.OK)
                            .json(model.get()).end()
                        : w.status(StatusCode.NOT_FOUND)
                            .json('Failed to create').end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getOne(
        r: Req<{ userId: string }>,
        w: Res<string | I.OUserModel | Error>
    ): Promise<void> {
        this.#vlog.debug({f: 'getOne', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {param} = zod.userIdOrWalletParam.parse(r.params);

            this.#repository.getOneById(param)
                .then((model: UserModel | null) =>
                    model instanceof UserModel
                        ? w.status(StatusCode.OK)
                            .json(model.get()).end()
                        : w.status(StatusCode.NOT_FOUND)
                            .json('Failed to create').end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getMany(
        r: Req<object, { skip: number, limit: number }>,
        w: Res<I.OUserModel[] | Error>
    ): Promise<void> {
        this.#vlog.debug({f: 'getMany', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {skip, limit} = zod.pageQuery.parse(r.query);

            this.#repository.getMany(skip, limit)
                .then((models: UserModel[]) =>
                    models.length
                        ? w.status(StatusCode.OK)
                            .json(models.map((model) => model.get())).end()
                        : w.status(StatusCode.NOT_FOUND).end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getTotalCount(
        r: Req,
        w: Res
    ): Promise<void> {
        this.#vlog.debug({f: 'getTotalCount', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            this.#repository.getTotalCount()
                .then((res: number) =>
                    w.status(StatusCode.OK).json(res).end());
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async addReferenceId(
        r: Req<{ param: string, service: string, refId: string}>,
        w: Res
    ): Promise<void> {
        this.#vlog.debug({f: 'addReferenceId', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {param} = zod.userIdOrWalletParam.parse(r.params);
            const {service, refId} = zod.refIdAndService.parse(r.params)

            this.#repository.addReferenceId(param, service, refId)
                .then((res: boolean) => res
                    ? w.status(StatusCode.OK).end()
                    : w.status(StatusCode.NOT_FOUND).end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async assignOwnership(
        r: Req<{ param: string, }>,
        w: Res
    ): Promise<void> {
        this.#vlog.debug({f: 'assignOwnership', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const {param} = zod.userIdOrWalletParam.parse(r.params);
            const {refId, type} = zod.refIdAndType.parse(r.params)

            this.#repository.assignOwnership(param, type, refId)
                .then((res: boolean) => res
                    ? w.status(StatusCode.OK).end()
                    : w.status(StatusCode.NOT_FOUND).end()
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

}

