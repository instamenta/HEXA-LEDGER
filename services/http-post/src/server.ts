import ThreadRepository from "./repositories/thread.repository";
import {ServerCredentials, Server} from '@grpc/grpc-js';
import ThreadsService from './service/threads.service';
import {config} from "./utilities/config";
import {ThreadsService as grpc_threads_service} from './generated/grpc/typescript/threads_grpc_pb'
import type Vlogger from "@instamenta/vlogger";

export function start_grpc_server(threadRepository: ThreadRepository, vlogger: Vlogger) {
    const _grpc_server = new Server();

    const threadService = new ThreadsService(threadRepository, vlogger);

    _grpc_server.addService(grpc_threads_service, threadService);

    _grpc_server.bindAsync(`0.0.0.0:${config.GRPC_PORT}`, ServerCredentials.createInsecure(),
        (error: Error | null, port: number): void => {
            if (error) {
                vlogger.getVlogger('GrpcServer').error({e: error, f: 'bindAsync'});
                process.exit();
            }
            vlogger.getVlogger('GrpcServer').info({d: `[ GRPC Service running on PORT: [ ${port}] ]`, f: 'bindAsync'});
            _grpc_server.start();
        });
}
