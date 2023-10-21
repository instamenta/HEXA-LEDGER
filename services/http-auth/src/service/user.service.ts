import * as PI from '../generated/grpc/typescript/threads_pb';
import ThreadBuilder from '../models/builder-models/thread.builder';
import StatRepository from '../repositories/stat.repository';
import {IThreadsServer} from '../generated/grpc/typescript/threads_grpc_pb';
import {Int32Value, StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {Transform} from 'stream';
import {type ServerUnaryCall, type sendUnaryData, type ServerWritableStream} from '@grpc/grpc-js';
import * as zod from '../generated/grpc/validation/grpc.messages';
import {ZodError, z} from 'zod';
import PingPongBuilder from '../generated/grpc/builders/pingpong';
import StatsModel from '../models/statistics.model';
import StatsModelBuilder from '../generated/grpc/builders/stats.model';
import PromotedStatsBuilder from '../generated/grpc/builders/promoted.stats';
import DonationsStatsBuilder from '../generated/grpc/builders/donation.stats';
import ThreadModel from '../models/thread.model';
import {
    PingPongExtractor,
    PaginationExtractor,
    WalletWithAuthRequestExtractor,
    AmountWithAuthRequestExtractor,
    IdRequestExtractor,
    CreateRequestExtractor,
} from '../generated/grpc/extacters/extractor';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {type MongoError} from 'mongodb';
import type Vlogger from "@instamenta/vlogger";
import type {IVlog} from "@instamenta/vlogger";
import {w, Meta} from "@instamenta/grpc-errors";

export default class AuthService implements IThreadsServer {
    readonly #repository: StatRepository;
    readonly #vlog: IVlog;

    constructor(threadRepository: StatRepository, vlogger: Vlogger) {
        this.#repository = threadRepository;
        this.#vlog = vlogger.getVlogger('ThreadsService');
    }

    [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

    public async create(
        call: ServerUnaryCall<PI.CreateRequest, PI.ThreadModel>,
        callback: sendUnaryData<PI.ThreadModel>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'create'});
            const threadData = zod.CreateRequest.parse(new CreateRequestExtractor(call.request).extract());

            type IAdditionalData =
                { images: string[], tags: string[], promoted: number }
                & z.infer<typeof zod.CreateRequest>;
            let data = threadData as IAdditionalData;
            data = {...data, images: threadData.imagesList, tags: threadData.tagsList, promoted: 0};

            this.#repository.create(data)
                .then((model) =>
                    model instanceof ThreadModel
                        ? callback(null, new ThreadBuilder(model).build_GRPC())
                        : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async update(
        call: ServerUnaryCall<PI.ThreadModel, PI.ThreadModel>,
        callback: sendUnaryData<PI.ThreadModel>
    ): Promise<void> {

    }

    public async delete(
        call: ServerUnaryCall<PI.IdRequest, PI.ThreadModel>,
        callback: sendUnaryData<PI.ThreadModel>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'delete'});
            const {id: threadId} = zod.IdRequest.parse(new IdRequestExtractor(call.request).extract());

            this.#repository.deleteById(threadId)
                .then((model) => model instanceof ThreadModel
                    ? callback(null, new ThreadBuilder(model).build_GRPC())
                    : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: Error | ZodError | MongoError | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async getMany(
        call: ServerWritableStream<PI.Pagination, PI.ThreadModel>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'getMany'});
            const {page, limit} = zod.Pagination.parse(new PaginationExtractor(call.request).extract())
                , skip = page * limit + limit
                , db_stream = await this.#repository.getMany_$(skip, limit)
                , transform = new Transform({readableObjectMode: true, writableObjectMode: true});
            let counter = 0;

            transform._transform = (model: ThreadBuilder, encryption, call) => {
                call(null, model.build_GRPC());
                counter++;
            };

            transform.on('end', () => {
                if (!counter) return w.E({
                    call, _key: w.K.NOT_FOUND, _details: `Threads for [Page: ${page}], [Limit: ${limit}] not found.`
                });
                call.end(Meta.build().set('count', counter.toString()).get());
            });

            transform.on('error', (e: Error) => {
                w.E({call, _key: w.K.INTERNAL})
                this.#vlog.error({e})
            });

            // @ts-ignore
            db_stream.pipe(transform).pipe(call);
        } catch (e: Error | MongoError | ZodError | unknown) {
            (e instanceof ZodError) ? call.emit('error', w.handleZodError(e)) : w.E({call, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async getTotalCount(
        call: ServerUnaryCall<Empty, Int32Value>,
        callback: sendUnaryData<Int32Value>
    ): Promise<void> {
        this.#repository.getTotalCount()
            .then((res) => callback(null, new Int32Value().setValue(res)))
            .catch((e: Error | MongoError | unknown) => {
                w.CB({callback, _key: w.K.INTERNAL})
                this.#vlog.error({e, f: 'getTotalCount'})
            });
    }

    public async getByOwner(
        call: ServerWritableStream<PI.IdRequest, PI.ThreadModel>
    ): Promise<void> {
        // Implement the logic for the "GetByOwner" RPC call
    }

    public async getOne(
        call: ServerUnaryCall<PI.IdRequest, PI.ThreadModel>,
        callback: sendUnaryData<PI.ThreadModel>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'getOne'});
            const {id: threadId} = zod.IdRequest.parse(new IdRequestExtractor(call.request).extract());

            this.#repository.getOneById(threadId)
                .then((model: ThreadModel | null) =>
                    model
                        ? callback(null, new ThreadBuilder(model).build_GRPC())
                        : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: ZodError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e)) : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async getStatistics(
        call: ServerWritableStream<PI.Pagination, PI.StatsModel>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'getStatistics'});
            const {page, limit} = zod.Pagination.parse(new PaginationExtractor(call.request).extract())
                , skip = page * limit + limit
                , db_stream = await this.#repository.getStatistics_$(skip, limit)
                , transform = new Transform({readableObjectMode: true, writableObjectMode: true});
            let counter = 0;

            transform._transform = (model: StatsModel, encryption, call) => {
                const data = model.get()
                const promoted = new PromotedStatsBuilder().withAmount(data.promoted.amount).withCount(data.donations.count);
                const donations = new DonationsStatsBuilder().withAmount(data.donations.amount).withCount(data.donations.count);
                call(null, new StatsModelBuilder()
                    .withId(data.id)
                    .withPromoted(promoted)
                    .withDonations(donations)
                    .withName(data.name)
                    .withLikesCount(data.likes)
                    .withDislikesCount(data.dislikes)
                    .build());
                counter++;
            };

            transform.on('end', () => {
                if (!counter) return w.E({
                    call, _key: w.K.NOT_FOUND, _details: `Threads for [Page: ${page}], [Limit: ${limit}] not found.`
                });
                call.end(Meta.build().set('count', counter.toString()).get());
            });

            transform.on('error', (e: Error) => {
                w.E({call, _key: w.K.INTERNAL});
                this.#vlog.error({e})
            });

            // @ts-ignore
            db_stream.pipe(transform).pipe(call);
        } catch (e: Error | MongoError | ZodError | unknown) {
            (e instanceof ZodError) ? call.emit('error', w.handleZodError(e))
                : w.E({call, _key: w.K.INTERNAL})
            this.#vlog.error({e})
        }
    }

    public async getLikes(
        call: ServerWritableStream<PI.IdRequest, StringValue>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'getLikes'});
            const {id: threadId} = zod.IdRequest.parse(new IdRequestExtractor(call.request).extract());

            const data = await this.#repository.getLikes(threadId);
            if (!data) {
                w.E({call, _key: w.K.NOT_FOUND});
                return this.#vlog.error({f: 'getLikes', e: 'Not Found'});
            }

            for (let i = 0; i < data.length; i++) {
                call.write(new StringValue().setValue(data[i]));
            }

            call.on('end', () => {
                call.end(Meta.build().set('count', data.length.toString()).get())
            });

            call.on('error', (e) => {
                w.E({call, _key: w.K.INTERNAL});
                this.#vlog.error({e});
            });
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? call.emit('error', w.handleZodError(e))
                : w.E({call, _key: w.K.INTERNAL})
            this.#vlog.error({e})
        }
    }

    public async getDislikes(
        call: ServerWritableStream<PI.IdRequest, StringValue>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'getDislikes'});
            const {id: threadId} = zod.IdRequest.parse(new IdRequestExtractor(call.request).extract());

            const data = await this.#repository.getDislikes(threadId);
            if (!data) {
                w.E({call, _key: w.K.NOT_FOUND});
                return this.#vlog.error({e: 'Not Found'});
            }

            for (let i = 0; i < data.length; i++) {
                call.write(new StringValue().setValue(data[i]));
            }

            call.on('end', () => {
                call.end(Meta.build().set('count', data.length.toString()).get());
            });

            call.on('error', (e) => {
                w.E({call, _key: w.K.INTERNAL})
                this.#vlog.error({e})
            });
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? call.emit('error', w.handleZodError(e))
                : w.E({call, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async like(
        call: ServerUnaryCall<PI.WalletWithAuthRequest, Empty>,
        callback: sendUnaryData<Empty>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'like'});
            const {wallet, id: threadId} = zod.WalletWithAuthRequest.parse(
                new WalletWithAuthRequestExtractor(call.request).extract());

            this.#repository.like(threadId, wallet)
                .then((res: boolean) => res ? callback(null, new Empty())
                    : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async dislike(
        call: ServerUnaryCall<PI.WalletWithAuthRequest, Empty>,
        callback: sendUnaryData<Empty>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'dislikes'});
            const {wallet, id: threadId} = zod.WalletWithAuthRequest.parse(
                new WalletWithAuthRequestExtractor(call.request).extract());

            this.#repository.dislike(threadId, wallet)
                .then((res: boolean) => res ? callback(null, new Empty())
                    : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e, f: 'dislike'})
        }
    }

    public async donate(
        call: ServerUnaryCall<PI.AmountWithAuthRequest, Empty>,
        callback: sendUnaryData<Empty>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'donate'});
            const {threadId, auth, amount} = zod.AmountWithAuthRequest.parse(
                new AmountWithAuthRequestExtractor(call.request).extract());

            this.#repository.donate(threadId, auth, amount)
                .then((res) => res
                    ? callback(null, new Empty())
                    : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async promote(
        call: ServerUnaryCall<PI.AmountWithAuthRequest, Empty>,
        callback: sendUnaryData<Empty>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'promote'});
            const {threadId, auth, amount} = zod.AmountWithAuthRequest.parse(
                new AmountWithAuthRequestExtractor(call.request).extract());

            this.#repository.promote(threadId, auth, amount)
                .then((res: boolean) => res ? callback(null, new Empty())
                    : w.CB({callback, _key: w.K.NOT_FOUND})
                );
        } catch (e: ZodError | MongoError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }

    public async pingPong(
        call: ServerUnaryCall<PI.PingPongMessage, PI.PingPongMessage>,
        callback: sendUnaryData<PI.PingPongMessage>
    ): Promise<void> {
        try {
            this.#vlog.debug({d: call.request.toObject(), f: 'pingPong'});
            const {name, timestamp} = zod.PingPongMessage.parse(new PingPongExtractor(call.request).extract())
                , diffMs = Date.now() - new Date(timestamp).getTime()
                , seconds = Math.floor(diffMs / 1000)
                , microsecond = (diffMs % 1000) / 1000;
            console.log({
                data: `[ Ping from "${name}" to "${this.constructor.name}" ]`,
                time: `[ Time taken: ${seconds + microsecond.toFixed(5)} seconds ]`,
            });
            callback(null, new PingPongBuilder().withName(this.constructor.name).build());
        } catch (e: ZodError | Error | unknown) {
            (e instanceof ZodError) ? callback(w.handleZodError(e))
                : w.CB({callback, _key: w.K.INTERNAL});
            this.#vlog.error({e})
        }
    }
}