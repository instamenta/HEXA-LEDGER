/** @file Starts the grpc server and attach all handlers for each endpoints. */
import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
// Import {connectProducer, disconnectProducer} from './producer';
import Log from './utility/logger';
import {
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment,
    getPostById,
    getPosts,
    getPostComments,
    upvotePost,
    downvotePost,
    upvoteComment,
    downvoteComment,
    getUserPosts,
} from './service/wrapper';

const {PostServiceService} = require('./protos/generated/posts_grpc_pb')
    , GRPC_PORT = process.env.GRPC_PORT || 50_052
;

(function StartService() {
    const Server = new GRPC.Server();
    Server.addService(PostServiceService, {
        createPost,
        updatePost,
        deletePost,
        createComment,
        updateComment,
        deleteComment,
        getPostById,
        getPosts,
        getPostComments,
        upvotePost,
        downvotePost,
        upvoteComment,
        downvoteComment,
        getUserPosts
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
            Log['kafka_disconnect_log'](error);
            process.kill(process.pid, type);
        }
    });
});
