import * as GRPC_I from '../generated/grpc/types/threads_pb';
import ERRORS from '../utilities/errors/grpc.errors';
import ThreadBuilder from '../../src/models/builder-models/thread.builder';
import ThreadRepository from '../repositories/thread.repository';
import {IThreadsServer} from '../generated/grpc/types/threads_grpc_pb'
import {Int32Value} from 'google-protobuf/google/protobuf/wrappers_pb';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {Transform} from 'stream';
import {
   ServerUnaryCall,
   sendUnaryData,
   ServerWritableStream,
   Metadata,
} from '@grpc/grpc-js';
/* eslint-disable @typescript-eslint/no-unused-vars */

export default class ThreadsServiceImpl implements IThreadsServer {

   readonly #repository: ThreadRepository;

   constructor(threadRepository: ThreadRepository) {
      this.#repository = threadRepository;
   }

   [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

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
      const r = call.request;
      const req = {
         page: r.hasPage() ? r.getPage()!.getValue() : 0,
         limit: r.hasLimit() ? r.getLimit()!.getValue() : 10,
      };
      const skip = req.page * req.limit + req.limit;

      const $_database = await this.#repository.getMany_$(skip, req.limit);
      const $_transform = new Transform({readableObjectMode: true, writableObjectMode: true});
      let counter = 0;

      $_transform._transform = (model: ThreadBuilder, encryption, call) => {
         call(null, model.build_GRPC());
         counter++;
      };

      $_transform.on('end', () => {
         const metadata = new Metadata();
         metadata.set('count', counter.toString());
         call.end(metadata);
      });

      $_transform.on('error', (e: Error) => {
         call.emit('error', ERRORS.INTERNAL_ERROR);
      });

      // @ts-ignore
      $_database.pipe($_transform).pipe(call);

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
      call: ServerUnaryCall<GRPC_I.IdRequest, Int32Value>,
      callback: sendUnaryData<Int32Value>
   ): Promise<void> {
      // Implement the logic for the "GetLikes" RPC call
   }

   public async getDislikes(
      call: ServerUnaryCall<GRPC_I.IdRequest, Int32Value>,
      callback: sendUnaryData<Int32Value>
   ): Promise<void> {
      // Implement the logic for the "GetDislikes" RPC call
   }

   public async like(
      call: ServerUnaryCall<GRPC_I.WalletWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      // Implement the logic for the "Like" RPC call
   }

   public async dislike(
      call: ServerUnaryCall<GRPC_I.WalletWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      // Implement the logic for the "Dislike" RPC call
   }

   public async donate(
      call: ServerUnaryCall<GRPC_I.AmountWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      // Implement the logic for the "Donate" RPC call
   }

   public async promote(
      call: ServerUnaryCall<GRPC_I.AmountWithAuthRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): Promise<void> {
      // Implement the logic for the "Promote" RPC call
   }
}