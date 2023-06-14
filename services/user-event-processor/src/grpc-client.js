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
    , GRPC_HOST = process.env.GRPC_HOST || 'localhost'
    , GRPC_PORT = process.env.GRPC_PORT || 50051
    , CLIENT = new userProto.UserService(`user-remote:50051`, GRPC.credentials.createInsecure())
    , {User} = require('./generated/users_pb')
;

/* Perform login request */
function loginUser(email) {
    const loginRequest = new User();
    loginRequest.setEmail(email);

    CLIENT.login(loginRequest, (error, response) => {
        if (error) {
            return console.error('Login error:', error);
        }
        console.log('Login response:', response);
    });
}

function registerUser(email, username) {
    const registerRequest = new User();
    registerRequest.setEmail(email);
    registerRequest.setUsername(username);

    CLIENT.register(registerRequest, (error, response) => {
        if (error) {
            return console.error('Register error:', error);
        }
        console.log('Register response:', response);
    });
}

module.exports = { registerUser, loginUser };