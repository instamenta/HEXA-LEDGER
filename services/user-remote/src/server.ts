/** @file File initializes and attaches methods to GRPC Server. */
require('dotenv').config();
import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
// Import {connectProducer, disconnectProducer} from './producer';
import Log from './utility/logger';
import {
    deleteUserById,
    followUser, getAllUsers,
    getUserById, getUserFollowers,
    getUserFollowing, getUsers,
    login, register,
    unfollowUser, updateUserById,
} from './service/wrapper';

const {UserServiceService} = require('./protos/generated/users_grpc_pb')
    , GRPC_PORT = process.env['GRPC_PORT'] || 50_051
;

(function StartService() {
    const Server = new GRPC.Server();
    Server.addService(UserServiceService, {
        getUserById,
        login, register,
        getUsers, getAllUsers,
        followUser, unfollowUser,
        updateUserById, deleteUserById,
        getUserFollowers, getUserFollowing,
    });
    Server.bindAsync(`0.0.0.0:${GRPC_PORT}`,
        GRPC.ServerCredentials.createInsecure(),
        async (error, port) => {
            if (error) {
                Log['grpc_disconnect_log'](port, error);
                process.exit(1);
            }
            Server.start();
            Log['grpc_start_log'](port);
            await connectDatabase();
            // Await connectProducer();
        });
})();

['unhandledRejection', 'uncaughtException'].forEach((type) => {
    process.on(type, (error: Error) => {
        try {
            Log['process_disconnect_log'](type, error);
            // Await disconnectProducer();
        } catch {
            console.log('Exit...');
            process.exit(1);
        }
    });
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach((type) => {
    process.once(type, (error: Error) => {
        try {
            Log['process_disconnect_log'](type, error);
            process.exit(0);
        } finally {
            // Await disconnectProducer();
            // Log['kafka_disconnect_log'](error);
            process.kill(process.pid, type);
        }
    });
});
