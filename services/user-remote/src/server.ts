'use strict';

import * as GRPC from '@grpc/grpc-js';
import connectDatabase from './mongodb';
import {login, register} from './services/auth-service';
import {
	getUsers,
	getAllUsers,
	getUserById,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser
} from './services/user-service';

const {UserServiceService} = require('./generated/users_grpc_pb');

(async function main() {
	const Server = new GRPC.Server();
	Server.addService(UserServiceService, {
		getUsers,
		getAllUsers,
		getUserFollowers,
		getUserFollowing,
		getUserById,
		login,
		register,
		followUser,
		unfollowUser,
	});

	Server.bindAsync('0.0.0.0:50051',
		GRPC.ServerCredentials.createInsecure(),
		async (error, port) => {
			if (error) {
				console.error('Failed to bind server on port:', port, error);
				process.exit(1);
			}
			console.log('GRPC Server is running on port:', port);
			Server.start();
			await connectDatabase();
		});
})();
