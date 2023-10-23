"use strict";
// import UserRepository from "./repositories/user.repository";
// import {ServerCredentials, Server} from '@grpc/grpc-js';
// import  from './service/auth.service';
// import {config} from "./utilities/config";
// import {ThreadsService as grpc_threads_service} from './generated/grpc/typescript/threads_grpc_pb'
// import type Vlogger from "@instamenta/vlogger";
//
// export function start_grpc_server(threadRepository: StatRepository, vlogger: Vlogger) {
//     const _grpc_server = new Server();
//
//     const threadService = new AuthService(threadRepository, vlogger);
//
//     _grpc_server.addService(grpc_threads_service, threadService);
//
//     _grpc_server.bindAsync(`0.0.0.0:${config.GRPC_PORT}`, ServerCredentials.createInsecure(),
//         (error: Error | null, port: number): void => {
//             if (error) {
//                 vlogger.getVlogger('GrpcServer').error({e: error, f: 'bindAsync'});
//                 process.exit(1);
//             }
//             vlogger.getVlogger('GrpcServer').info({m: `[ GRPC Service running on PORT: [ ${port}] ]`, f: 'bindAsync'});
//             _grpc_server.start();
//         });
// }
