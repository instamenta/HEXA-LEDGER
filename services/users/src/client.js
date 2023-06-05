const grpc = require('@grpc/grpc-js')
    , protoLoader = require('@grpc/proto-loader')
    , {User} = require('./generated/users_pb')
;
const packageDefinition = protoLoader.loadSync('./protos/users.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
})
    , protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
    , userProto = protoDescriptor.user
    , CLIENT = new userProto.UserService( 'localhost:50051', grpc.credentials.createInsecure() )
;

/* Perform login request */
const loginRequest = new User();
loginRequest.setEmail('test@example.com');
loginRequest.setPassword('password');

CLIENT.login(loginRequest, (error, response) => {
    if (error) {
        console.error('Login error:', error);
        return;
    }

    console.log('Login response:', response);
});

/* Perform register request */
const registerRequest = new User();
registerRequest.setEmail('test@example.com');
registerRequest.setNickname('John Doe');
registerRequest.setPassword('password');

CLIENT.register(registerRequest, (ERROR, response) => {
    if (ERROR) {
        console.error('Register error:', ERROR);
        return;
    }

    console.log('Register response:', response);
});
