"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dot = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const hexa_modules_1 = require("./utility/hexa-modules");
const vlogger_1 = require("@instamenta/vlogger");
const dot_configurator_1 = __importDefault(require("dot_configurator"));
const auth_service_1 = __importDefault(require("./service/auth-service"));
const mongodb_1 = require("mongodb");
const token_tools_1 = __importDefault(require("./utility/token-tools"));
const { AuthServiceService } = require('./protos/generated/auth_grpc_pb');
exports.dot = new dot_configurator_1.default(process.env);
(function StartService() {
    const vlogger = vlogger_1.VLogger.getInstance(exports.dot.GET('DEBUG_LEVEL', true));
    const grpc_server = new grpc_js_1.Server();
    const tokenTools = token_tools_1.default.getInstance({ dot: exports.dot, vlogger });
    const mongoClient = new mongodb_1.MongoClient(process.env['MONGODB_URI'] || 'NO URI');
    const db = mongoClient.db(exports.dot.GET('DB_NAME', 'hexa-ledger'), { retryWrites: true });
    const authService = auth_service_1.default.getInstance({ vlogger, db, tokenTools });
    grpc_server.addService(AuthServiceService, {
        auth: authService.auth.bind(authService),
        update: authService.update.bind(authService),
        getUser: authService.getUser.bind(authService),
        getUsers: authService.getUsers.bind(authService),
    });
    grpc_server.bindAsync(`0.0.0.0:${exports.dot.GET('GRPC_PORT', 50053)}`, grpc_js_1.ServerCredentials.createInsecure(), (e, port) => {
        if (e)
            process.exit(1);
        console.log('Service running on port', port);
        grpc_server.start();
    });
})();
(0, hexa_modules_1.processOn)(['unhandledRejection', 'uncaughtException']);
(0, hexa_modules_1.processOnce)(['SIGTERM', 'SIGINT', 'SIGUSR2']);
