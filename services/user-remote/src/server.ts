import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
import {connectProducer, disconnectProducer} from './producer';
import {
	getUserById,
	login, register,
	getUsers, getAllUsers,
	followUser, unfollowUser,
	getUserFollowers, getUserFollowing,
} from './services/wrapper';

const {UserServiceService} = require('./generated/users_grpc_pb');

(async function StartService() {
	const Server = new GRPC.Server();
	Server.addService(UserServiceService, {
		getUserById,
		login, register,
		getUsers, getAllUsers,
		followUser, unfollowUser,
		getUserFollowers, getUserFollowing,
	});
	Server.bindAsync('0.0.0.0:50051',
		GRPC.ServerCredentials.createInsecure(),
		async (error, port) => {
			if (error) {
				console.log(`================================================================
				GRPC Server ran into Error, Port: ${port}
				================================================================`, error);
				process.exit(1);
			}
			Server.start();
			console.log(`
				================================================================
				GRPC Server is running on port: ${port}
				================================================================`);
			await connectDatabase();
			await connectProducer();
		});
})();

['unhandledRejection', 'uncaughtException'].forEach(type => {
	process.on(type, async (error: Error) => {
		try {
			console.log(`================================================================
				Process.on ${type}: ${error.message}
				================================================================`
			, error);
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
			console.log(`================================================================
				Process.on ${type}: ${error.message}
				================================================================`, error);
			process.exit(0);
		} finally {
			await disconnectProducer();
			console.log(`================================================================
				Kafka Producer disconnected: ${error.message}
				================================================================`);
			process.kill(process.pid, type);
		}
	});
});
