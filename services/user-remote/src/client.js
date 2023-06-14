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
	, CLIENT = new userProto.UserService('localhost:50051', GRPC.credentials.createInsecure())
	, {User} = require('./generated/users_pb')
;

/* Perform login request */
const loginRequest = new User();
loginRequest.setEmail('test@example.com');
loginRequest.setPassword('password');

CLIENT.login(loginRequest, (error, response) => {
	if (error) {
		return console.error('Login error:', error);
	}
	console.log('Login response:', response);
});

const registerRequest = new User();
registerRequest.setEmail('test@example.com');
registerRequest.setUsername('John Doe');

CLIENT.register(registerRequest, (error, response) => {
	if (error) {
		return console.error('Register error:', error);
	}
	console.log('Register response:', response);
});
