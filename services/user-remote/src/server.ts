import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
import {connectProducer, disconnectProducer} from './producer';
import {
	grpc_disconnect_log,
	grpc_start_log,
	kafka_disconnect_log,
	process_disconnect_log
} from './utility/logger';
import {
	getUserById,
	login, register,
	getUsers, getAllUsers,
	followUser, unfollowUser,
	getUserFollowers, getUserFollowing,
} from './service/wrapper';

const {UserServiceService} = require('./protos/generated/users_grpc_pb')
	, GRPC_PORT = process.env.GRPC_PORT || 50_051
;

(async function StartService() {
	const Server = new GRPC.Server();
	Server.addService(UserServiceService, {
		getUserById,
		login, register,
		getUsers, getAllUsers,
		followUser, unfollowUser,
		getUserFollowers, getUserFollowing,
	});
	Server.bindAsync(`0.0.0.0:${GRPC_PORT}`,
		GRPC.ServerCredentials.createInsecure(),
		async (error, port) => {
			if (error) {
				grpc_disconnect_log(port, error);
				process.exit(1);
			}
			Server.start();
			grpc_start_log(port);
			await connectDatabase();
			await connectProducer();
		});
})();

['unhandledRejection', 'uncaughtException'].forEach(type => {
	process.on(type, async (error: Error) => {
		try {
			process_disconnect_log(type, error);
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
			process_disconnect_log(type, error);
			process.exit(0);
		} finally {
			await disconnectProducer();
			kafka_disconnect_log(error);
			process.kill(process.pid, type);
		}
	});
});
