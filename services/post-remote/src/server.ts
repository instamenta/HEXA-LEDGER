import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
import {connectProducer, disconnectProducer} from './producer';
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

const {UserServiceService} = require('./protos/generated/users_grpc_pb')
	, GRPC_PORT = process.env.GRPC_PORT || 50_052
;

(async function StartService() {
	const Server = new GRPC.Server();
	Server.addService(UserServiceService, {
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
			await connectProducer();
		});
})();

['unhandledRejection', 'uncaughtException'].forEach(type => {
	process.on(type, async (error: Error) => {
		try {
			Log['process_disconnect_log'](type, error);
			await disconnectProducer();
		} catch {
			console.log('Exit...');
			process.exit(1);
		}
	});
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
	process.once(type, async (error: Error) => {
		try {
			Log['process_disconnect_log'](type, error);
			process.exit(0);
		} finally {
			await disconnectProducer();
			Log['kafka_disconnect_log'](error);
			process.kill(process.pid, type);
		}
	});
});
