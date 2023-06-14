const GRPC = require('@grpc/grpc-js')
	, protoLoader = require('@grpc/proto-loader')
	, packageDefinition = protoLoader.loadSync('./src/protos/users.proto', {
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	})
	, protoDescriptor = GRPC.loadPackageDefinition(packageDefinition)
	, userProto = protoDescriptor.user
	, userService = require('./services/userService')
	, GRPC_PORT = process.env.GRPC_PORT || 50051
;

(function main() {
	const SERVER = new GRPC.Server();
	SERVER.addService(userProto.UserService.service, {
		login: userService.login,
		register: userService.register,
	});

	SERVER.bindAsync(`0.0.0.0:50051`, GRPC.ServerCredentials.createInsecure(), (error, GRPC_PORT) => {
		if (error) {
			console.error(`Failed to bind server on PORT: 50051}: `, error);
			process.exit(1);
		}
		console.log(`GRPC Server is running on port: ${GRPC_PORT}`);
		SERVER.start();
	});
})();
