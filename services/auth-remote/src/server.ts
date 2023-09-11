import {Server, ServerCredentials} from '@grpc/grpc-js';
import {processOn, processOnce} from './utility/hexa-modules';
import {VLogger} from '@instamenta/vlogger';
import DotConfig from 'dot_configurator';
import AuthService from './service/auth-service';
import {MongoClient} from "mongodb";
import TokenTools from "./utility/token-tools";

const {AuthServiceService} = require('./protos/generated/auth_grpc_pb');

export const dot = new DotConfig(process.env as Record<string, string>);

(function StartService() {
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));
   const grpc_server = new Server();
   const tokenTools = TokenTools.getInstance({dot, vlogger});

   const mongoClient = new MongoClient(process.env['MONGODB_URI'] || 'NO URI')
   const db = mongoClient.db(dot.GET('DB_NAME', 'hexa-ledger'), {retryWrites: true});

   const authService = AuthService.getInstance({vlogger, db, tokenTools});

   grpc_server.addService(AuthServiceService, {
      auth: authService.auth.bind(authService),
      update: authService.update.bind(authService),

      getUser: authService.getUser.bind(authService),
      getUsers: authService.getUsers.bind(authService),
   });
   grpc_server.bindAsync(`0.0.0.0:${dot.GET('GRPC_PORT', 50_053)}`, ServerCredentials.createInsecure(), (e, port): void => {
      if (e) process.exit(1);
      console.log('Service running on port', port);
      grpc_server.start();
   });
})();


processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
