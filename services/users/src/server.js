const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const userService = require('./services/userService');

const packageDefinition = protoLoader.loadSync('./src/protos/users.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.user;

function main() {
    const server = new grpc.Server();
    server.addService(userProto.UserService.service, {
        login: userService.login,
        register: userService.register,
    });

    const PORT = process.env.PORT || 50051;
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (ERROR, PORT) => {
        if (ERROR) {
            console.error(`Failed to bind server on PORT: ${PORT}: `, ERROR);
            process.exit(1);
        }
        console.log(`Server is running on port: ${PORT}`);
        server.start();
    });
}

main();
