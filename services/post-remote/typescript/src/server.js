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
const logger_1 = __importDefault(require("./utility/logger"));
const wrapper_1 = require("./service/wrapper");
const { UserServiceService } = require('./protos/generated/users_grpc_pb'), GRPC_PORT = process.env.GRPC_PORT || 50052;
(async function StartService() {
    const Server = new GRPC.Server();
    Server.addService(UserServiceService, {
        createPost: wrapper_1.createPost,
        updatePost: wrapper_1.updatePost,
        deletePost: wrapper_1.deletePost,
        createComment: wrapper_1.createComment,
        updateComment: wrapper_1.updateComment,
        deleteComment: wrapper_1.deleteComment,
        getPostById: wrapper_1.getPostById,
        getPosts: wrapper_1.getPosts,
        getPostComments: wrapper_1.getPostComments,
        upvotePost: wrapper_1.upvotePost,
        downvotePost: wrapper_1.downvotePost,
        upvoteComment: wrapper_1.upvoteComment,
        downvoteComment: wrapper_1.downvoteComment,
        getUserPosts: wrapper_1.getUserPosts
    });
    Server.bindAsync(`0.0.0.0:${GRPC_PORT}`, GRPC.ServerCredentials.createInsecure(), async (error, port) => {
        if (error) {
            logger_1.default['grpc_disconnect_log'](port, error);
            process.exit(1);
        }
        Server.start();
        logger_1.default['grpc_start_log'](port);
        await (0, mongodb_1.default)();
        await (0, producer_1.connectProducer)();
    });
})();
['unhandledRejection', 'uncaughtException'].forEach(type => {
    process.on(type, async (error) => {
        try {
            logger_1.default['process_disconnect_log'](type, error);
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
            logger_1.default['process_disconnect_log'](type, error);
            process.exit(0);
        }
        finally {
            await (0, producer_1.disconnectProducer)();
            logger_1.default['kafka_disconnect_log'](error);
            process.kill(process.pid, type);
        }
    });
});
