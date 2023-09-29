import ThreadRepository from "./repositories/thread.repository";
import {ServerCredentials, Server} from '@grpc/grpc-js';
import ThreadsService from './service/threads.service';
import {config} from "./utilities/config";

const {ThreadsService: grpc_threads_service} = require('./generated/grpc/javascript/threads_grpc_pb.js');

export function start_grpc_server(threadRepository: ThreadRepository) {
   const _grpc_server = new Server();

   const threadService = new ThreadsService(threadRepository);

   _grpc_server.addService(grpc_threads_service, threadService);

   _grpc_server.bindAsync(`0.0.0.0:${config.GRPC_PORT}`, ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
         if (error) {
            console.error(error);
            process.exit(1);
         }
         console.log(`[ GRPC Service running on PORT: [${port}] ]`);
         _grpc_server.start();
      });
}