"use strict";
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
const producer_1 = require("./producer");
const wrapper_1 = require("./services/wrapper");
const { UserServiceService } = require('./generated/users_grpc_pb');
(async function StartService() {
    const Server = new GRPC.Server();
    Server.addService(UserServiceService, {
        getUserById: wrapper_1.getUserById,
        login: wrapper_1.login, register: wrapper_1.register,
        getUsers: wrapper_1.getUsers, getAllUsers: wrapper_1.getAllUsers,
        followUser: wrapper_1.followUser, unfollowUser: wrapper_1.unfollowUser,
        getUserFollowers: wrapper_1.getUserFollowers, getUserFollowing: wrapper_1.getUserFollowing,
    });
    Server.bindAsync('0.0.0.0:50051', GRPC.ServerCredentials.createInsecure(), async (error, port) => {
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
        await (0, mongodb_1.default)();
        await (0, producer_1.connectProducer)();
    });
})();
['unhandledRejection', 'uncaughtException'].forEach(type => {
    process.on(type, async (error) => {
        try {
            console.log(`================================================================
				Process.on ${type}: ${error.message}
				================================================================`, error);
            await (0, producer_1.disconnectProducer)();
        }
        catch {
            console.log('Exit...');
            process.exit(1);
        }
    });
});
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
    process.once(type, async (error) => {
        try {
            console.log(`================================================================
				Process.on ${type}: ${error.message}
				================================================================`, error);
            process.exit(0);
        }
        finally {
            await (0, producer_1.disconnectProducer)();
            console.log(`================================================================
				Kafka Producer disconnected: ${error.message}
				================================================================`);
            process.kill(process.pid, type);
        }
    });
});
