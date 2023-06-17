'use strict';

const GRPC = require('@grpc/grpc-js')
	, { UserServiceService } = require('./generated/users_grpc_pb')
	, connectDatabase = require('./mongodb')
	, {login, register} = require('./services/userService')
;

(async function main() {
	const SERVER = new GRPC.Server();
	SERVER.addService(UserServiceService, {
		login,
		register
	});

	SERVER.bindAsync('0.0.0.0:50051', GRPC.ServerCredentials.createInsecure(), async (error, boundPort) => {
		if (error) {
			console.error('Failed to bind server on PORT:',boundPort,  error);
			process.exit(1);
		}
		console.log('GRPC Server is running on port:', boundPort);
		SERVER.start();
		await connectDatabase();
	});
})();
