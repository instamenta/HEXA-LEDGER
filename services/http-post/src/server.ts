import ThreadRepository from "./repositories/thread.repository";
import {ServerCredentials, Server} from '@grpc/grpc-js';
import ThreadsService from './service/threads.service';
import {config} from "./utilities/config";

import { ThreadsService  as grpc_threads_service} from './generated/grpc/typescript/threads_grpc_pb'

export function start_grpc_server(threadRepository: ThreadRepository) {
   const _grpc_server = new Server();

   const threadService = new ThreadsService(threadRepository);

   _grpc_server.addService(grpc_threads_service, threadService);

   _grpc_server.bindAsync(`0.0.0.0:${config.GRPC_PORT}`, ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
         if (error) {
            console.error(error);
            process.exit();
         }
         console.log(`[ GRPC Service running on PORT: [${port}] ]`);
         _grpc_server.start();
      });
}