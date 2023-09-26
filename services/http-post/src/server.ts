import ThreadRepository from "./repositories/thread.repository";
import * as GRPC from '@grpc/grpc-js';
import ThreadsService from './service/threads.service';
import {config} from "./utilities/config";

const {ThreadsService: grpc_threads_service} = require('./generated/grpc/javascript/threads_grpc_pb.js');

export function start_grpc_server(threadRepository: ThreadRepository) {
   const _grpc_server = new GRPC.Server();

   const threadService = new ThreadsService(threadRepository);

   _grpc_server.addService(grpc_threads_service, {
      create: threadService.create.bind(threadService),
      update: threadService.update.bind(threadService),
      delete: threadService.delete.bind(threadService),
      getOne: threadService.getOne.bind(threadService),
      getMany: threadService.getMany.bind(threadService),
      getByOwner: threadService.getByOwner.bind(threadService),
      getStatistics: threadService.getStatistics.bind(threadService),
      getTotalCount: threadService.getTotalCount.bind(threadService),
      like: threadService.like.bind(threadService),
      dislike: threadService.dislike.bind(threadService),
      getLikes: threadService.getLikes.bind(threadService),
      getDislikes: threadService.getDislikes.bind(threadService),
      promote: threadService.promote.bind(threadService),
      donate: threadService.donate.bind(threadService),
      transferOwnership: threadService.transferOwnership.bind(threadService),
   });
   _grpc_server.bindAsync(
      `0.0.0.0:${config.GRPC_PORT}`,
      GRPC.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
         if (error) process.exit(1);
         console.log(`[ GRPC Service running on PORT --- ${port} --- ]`);
         _grpc_server.start();
      }
   );
}