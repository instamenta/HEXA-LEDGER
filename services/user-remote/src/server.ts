/** @file File initializes and attaches methods to GRPC Server. */

import {Server, ServerCredentials} from '@grpc/grpc-js';
import {processOn, processOnce} from './utility/hexa-modules';
import connectDatabase from './mongodb';
import {VLogger} from '@instamenta/vlogger';
import DotConfig from 'dot_configurator';
import Wrapper from './service/wrapper';
import AuthService from './service/auth-service';
import UserService from './service/user-service';

const {UserServiceService} = require('./protos/generated/users_grpc_pb');

export const dot = new DotConfig(process.env as Record<string, string>);

(function StartService() {
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));
   const grpc_server = new Server();

   const authService = AuthService.getInstance();
   const userService = UserService.getInstance();
   const w = Wrapper.getInstance(vlogger, authService, userService);

   grpc_server.addService(UserServiceService, {
      getUserById: w.getUserById.bind(w),
      login: w.login.bind(w),
      register: w.register.bind(w),
      getUsers: w.getUsers.bind(w),
      getAllUsers: w.getAllUsers.bind(w),
      followUser: w.followUser.bind(w),
      unfollowUser: w.unfollowUser.bind(w),
      updateUserById: w.updateUserById.bind(w),
      deleteUserById: w.deleteUserById.bind(w),
      getUserFollowers: w.getUserFollowers.bind(w),
      getUserFollowing: w.getUserFollowing.bind(w),
   });
   grpc_server.bindAsync(`0.0.0.0:${dot.GET('GRPC_PORT', 50_051)}`, ServerCredentials.createInsecure(), (e, port): void => {
      if (e) process.exit(1);
      console.log('Service running on port', port);
      grpc_server.start();
      connectDatabase();
   });
})();


processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
