'use strict';

import * as GRPC from '@grpc/grpc-js';
import { UserServiceService } from './generated/users_grpc_pb';
import connectDatabase from './mongodb';
import { login, register } from './services/auth-service';

(async function main() {
	const Server = new GRPC.Server();
	Server.addService(UserServiceService, {
		login,
		register,
	});

	Server.bindAsync('0.0.0.0:50051', GRPC.ServerCredentials.createInsecure(), async (error, boundPort) => {
		if (error) {
			console.error('Failed to bind server on PORT:', boundPort, error);
			process.exit(1);
		}
		console.log('GRPC Server is running on port:', boundPort);
		Server.start();
		await connectDatabase();
	});
})();
