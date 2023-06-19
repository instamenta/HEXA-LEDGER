'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GRPC = __importStar(require("@grpc/grpc-js"));
const mongodb_1 = __importDefault(require("./mongodb"));
const auth_service_1 = require("./services/auth-service");
const user_service_1 = require("./services/user-service");
const { UserServiceService } = require('./generated/users_grpc_pb');
(async function main() {
    const Server = new GRPC.Server();
    Server.addService(UserServiceService, {
        // @ts-ignore
        getUsers: user_service_1.getUsers,
        // @ts-ignore
        getAllUsers: user_service_1.getAllUsers,
        // @ts-ignore
        getUserFollowers: user_service_1.getUserFollowers,
        // @ts-ignore
        getUserFollowing: user_service_1.getUserFollowing,
        getUserById: user_service_1.getUserById,
        login: auth_service_1.login,
        register: auth_service_1.register,
        followUser: user_service_1.followUser,
        unfollowUser: user_service_1.unfollowUser,
    });
    Server.bindAsync('0.0.0.0:50051', GRPC.ServerCredentials.createInsecure(), async (error, boundPort) => {
        if (error) {
            console.error('Failed to bind server on PORT:', boundPort, error);
            process.exit(1);
        }
        console.log('GRPC Server is running on port:', boundPort);
        Server.start();
        await (0, mongodb_1.default)();
    });
})();
