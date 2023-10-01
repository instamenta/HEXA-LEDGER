import * as GRPC_I from '../generated/grpc/typescript/threads_pb';
import ERRORS from '../utilities/errors/grpc.errors';
import ThreadBuilder from '../../src/models/builder-models/thread.builder';
import ThreadRepository from '../repositories/thread.repository';
import {IThreadsServer} from '../generated/grpc/typescript/threads_grpc_pb';
import {Int32Value, StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {Transform} from 'stream';
import {ServerUnaryCall, sendUnaryData, ServerWritableStream, Metadata} from '@grpc/grpc-js';
import {
   PingPongExtractor,
   PaginationExtractor,
   WalletWithAuthRequestExtractor,
   AmountWithAuthRequestExtractor,
} from "../generated/grpc/extacters/extractor";
import * as zod from '../generated/grpc/validation/grpc.messages'
import {ZodError} from "zod";
import {MongoError} from "mongodb";
import {handleZodError} from "../utilities/errors/grpc.handler";
import PingPongBuilder from "../generated/grpc/builders/pingpong";
/* eslint-disable @typescript-eslint/no-unused-vars */

export default class ThreadsService implements IThreadsServer {
   readonly #repository: ThreadRepository;

   constructor(threadRepository: ThreadRepository) {
      this.#repository = threadRepository;
   }

   [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

   public async create(
      call: ServerUnaryCall<GRPC_I.CreateRequest, GRPC_I.ThreadModel>,
      callback: sendUnaryData<GRPC_I.ThreadModel>
   ): Promise<void> {
      // Implement the logic for the "Create" RPC call
   }

   public async update(
      call: ServerUnaryCall<GRPC_I.ThreadModel, GRPC_I.ThreadModel>,
      callback: sendUnaryData<GRPC_I.ThreadModel>
   ): Promise<void> {
      // Implement the logic for the "Update" RPC call
   }

   public async delete(
      call: ServerUnaryCall<GRPC_I.IdRequest, GRPC_I.ThreadModel>,
      callback: sendUnaryData<GRPC_I.ThreadModel>
   ): Promise<void> {
      // Implement the logic for the "Delete" RPC call
   }

   public async getMany(
      call: ServerWritableStream<GRPC_I.Pagination, GRPC_I.ThreadModel>
   ): Promise<void> {
      const _request = new PaginationExtractor(call.request).extract();
      let data;
      try {
         data = zod.Pagination.parse(_request)
      } catch (e: unknown | ZodError) {
         call.emit('error', handleZodError(e as ZodError))
         return console.log(`${this.constructor.name}.getMany(): `, e);
      }
      const {page, limit} = data;
      const skip = page * limit + limit;
      try {
         const $_database = await this.#repository.getMany_$(skip, limit)
         const $_transform = new Transform({readableObjectMode: true, writableObjectMode: true});
         let counter = 0;

         $_transform._transform = (model: ThreadBuilder, encryption, call) => {
            call(null, model.build_GRPC());
            counter++;
         };

         $_transform.on('end', () => {
            if (!counter) {
               const _error = ERRORS.NOT_FOUND;
               _error.details = `Threads for [Page: ${page}], [Limit: ${limit}] not found.`;
               call.emit('error', _error);
            }
            const metadata = new Metadata();
            metadata.set('count', counter.toString());
            call.end(metadata);
         });

         $_transform.on('error', (e: Error) => {
            call.emit('error', ERRORS.INTERNAL);
         });

         // @ts-ignore
         $_database.pipe($_transform).pipe(call);

      } catch (e: Error | MongoError | unknown) {
         call.emit('error', ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.getMany(): `, e);
      }
   }

   public async getTotalCount(
      call: ServerUnaryCall<Empty, Int32Value>,
      callback: sendUnaryData<Int32Value>
   ): Promise<void> {
      // Implement the logic for the "GetTotalCount" RPC call
   }

   public async getByOwner(
      call: ServerWritableStream<GRPC_I.IdRequest, GRPC_I.ThreadModel>
   ): Promise<void> {
      // Implement the logic for the "GetByOwner" RPC call
   }

   public async getOne(
      call: ServerUnaryCall<GRPC_I.IdRequest, GRPC_I.ThreadModel>,
      callback: sendUnaryData<GRPC_I.ThreadModel>
   ): Promise<void> {
      // Implement the logic for the "GetOne" RPC call
   }

   public async getStatistics(
      call: ServerWritableStream<GRPC_I.Pagination, GRPC_I.StatsModel>
   ): Promise<void> {
      // Implement the logic for the "GetStatistics" RPC call
   }

   public async getLikes(
      call: ServerWritableStream<GRPC_I.IdRequest, StringValue>
   ): Promise<void> {
      try {
         const _request = zod.IdRequest.parse(call.request);
         const {id: threadId} = zod.IdRequest.parse(_request);

         const data: string[] | null = await this.#repository.getLikes(threadId);
         if (!data) {
            call.emit('error', ERRORS.NOT_FOUND);
            return console.log(`${this.constructor.name}.getDislikes(): Not found`);
         }
         for (let i = 0; i < data.length; i++) {
            call.write(new StringValue().setValue(data[i]));
         }

         call.on('end', () => {
            const metadata = new Metadata();
            metadata.set('count', data.length.toString());
            call.end(metadata);
         });

         call.on('error', () => call.emit('error', ERRORS.INTERNAL));

      } catch (e: ZodError | MongoError | Error | unknown) {
         if (e instanceof ZodError) call.emit('error', handleZodError(e));
         else call.emit('error', ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.getMany:()`, e);
      }
   }

   public async getDislikes(
      call: ServerWritableStream<GRPC_I.IdRequest, StringValue>
   ): Promise<void> {
      try {
         const _request = zod.IdRequest.parse(call.request);
         const {id: threadId} = zod.IdRequest.parse(_request);

         const data: string[] | null = await this.#repository.getDislikes(threadId);
         if (!data) {
            call.emit('error', ERRORS.NOT_FOUND);
            return console.log(`${this.constructor.name}.getDislikes(): Not found`);
         }
         for (let i = 0; i < data.length; i++) {
            call.write(new StringValue().setValue(data[i]));
         }

         call.on('end', () => {
            const metadata = new Metadata();
            metadata.set('count', data.length.toString());
            call.end(metadata);
         });

         call.on('error', () => call.emit('error', ERRORS.INTERNAL));

      } catch (e: ZodError | MongoError | Error | unknown) {
         if (e instanceof ZodError) call.emit('error', handleZodError(e));
         else call.emit('error', ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.getMany:()`, e);
      }
   }

   public async like(
      call: ServerUnaryCall<GRPC_I.WalletWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         const _request = new WalletWithAuthRequestExtractor(call.request).extract();
         const {wallet, id: threadId} = zod.WalletWithAuthRequest.parse(_request);

         this.#repository.like(threadId, wallet)
            .then((res: boolean) => res
               ? callback(null, new Empty())
               : callback(ERRORS.NOT_FOUND));
      } catch (e: ZodError | unknown) {
         (e instanceof ZodError) ? callback(handleZodError(e)) : callback(ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.promote(): `, e);
      }
   }

   public async dislike(
      call: ServerUnaryCall<GRPC_I.WalletWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         const _request = new WalletWithAuthRequestExtractor(call.request).extract();
         const {wallet, id: threadId} = zod.WalletWithAuthRequest.parse(_request);

         this.#repository.dislike(threadId, wallet)
            .then((res: boolean) => res
               ? callback(null, new Empty())
               : callback(ERRORS.NOT_FOUND));
      } catch (e: ZodError | unknown) {
         (e instanceof ZodError) ? callback(handleZodError(e)) : callback(ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.promote(): `, e);
      }
   }

   public async donate(
      call: ServerUnaryCall<GRPC_I.AmountWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         const _request = new AmountWithAuthRequestExtractor(call.request).extract();
         const {threadId, auth, amount} = zod.AmountWithAuthRequest.parse(_request);

         this.#repository.donate(threadId, auth, amount)
            .then((res: boolean) => res
               ? callback(null, new Empty())
               : callback(ERRORS.NOT_FOUND));
      } catch (e: ZodError | unknown) {
         (e instanceof ZodError) ? callback(handleZodError(e)) : callback(ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.donate(): `, e);
      }
   }

   public async promote(
      call: ServerUnaryCall<GRPC_I.AmountWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      try {
         const _request = new AmountWithAuthRequestExtractor(call.request).extract();
         const {threadId, auth, amount} = zod.AmountWithAuthRequest.parse(_request);

         this.#repository.promote(threadId, auth, amount)
            .then((res: boolean) => res
               ? callback(null, new Empty())
               : callback(ERRORS.NOT_FOUND));
      } catch (e: ZodError | unknown) {
         (e instanceof ZodError) ? callback(handleZodError(e)) : callback(ERRORS.INTERNAL);
         console.log(`${this.constructor.name}.promote(): `, e);
      }
   }

   public async pingPong(
      call: ServerUnaryCall<GRPC_I.PingPongMessage, GRPC_I.PingPongMessage>,
      callback: sendUnaryData<GRPC_I.PingPongMessage>
   ): Promise<void> {
      try {
         const _request = new PingPongExtractor(call.request).extract();
         const {name, timestamp} = zod.PingPongMessage.parse(_request);
         const start = new Date(timestamp).getTime();
         const diffMs = Date.now() - start;
         const sec = Math.floor(diffMs / 1000);
         const ms = (diffMs % 1000) / 1000;
         console.log({
            data: `[ Ping from "${name}" to "${this.constructor.name}" ]`,
            time: `[ Time taken: ${sec + ms.toFixed(5)} seconds ]`,
         });
         callback(null, new PingPongBuilder().withName(this.constructor.name).build());
      } catch (e) {
         console.log('[ Ping Failed ]');
         callback(ERRORS.INTERNAL);
      }
   }
}