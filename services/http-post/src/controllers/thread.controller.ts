import {Request as Req, Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/thread.zod';
import {z, ZodError} from 'zod';
import ThreadRepository from '../repositories/thread.repository';
import ThreadModel from '../models/thread.model';
import {MongoError} from 'mongodb';
import {RespondMongoToError, RespondToError, RespondToZodError} from '../utilities/error.handlers';

export default class ThreadController {

    private threadRepository: ThreadRepository;

    constructor(threadRepository: ThreadRepository) {
        this.threadRepository = threadRepository;
    }

    public async create(r: Req, w: Res): Promise<any> {
        try {
            const {
                body // {name, description, content, images, owner, promoted, tags}
            }: z.infer<typeof zod.create> = zod.create.parse(r);

            const model = await this.threadRepository.create(body);
            if (model instanceof ThreadModel) {
                return w.status(StatusCode.CREATED)
                    .json(model.get())
                    .end();
            } else {
                return w.status(StatusCode.BAD_REQUEST).end();
            }
        } catch (e: Error | ZodError | MongoError | any) {
            if (e instanceof ZodError) RespondToZodError(e, w);
            else if (e instanceof MongoError) RespondMongoToError(e, w);
            else RespondToError(e, w);
        }
    }

    public async update(r: Req, w: Res): Promise<void> {

    }

    public async delete(r: Req, w: Res): Promise<void> {

    }

    public async getOne(r: Req, w: Res): Promise<void> {

    }

    public async getMany(r: Req, w: Res): Promise<void> {

    }

    public async getByOwner(r: Req, w: Res): Promise<void> {

    }

    public async like(r: Req, w: Res): Promise<void> {

    }

    public async dislike(r: Req, w: Res): Promise<void> {

    }

    public async promote(r: Req, w: Res): Promise<void> {

    }

    public async donate(r: Req, w: Res): Promise<void> {

    }

    public async transferOwnership(r: Req, w: Res): Promise<void> {

    }

}
