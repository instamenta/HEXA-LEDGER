"use strict";
/** @file Start and initializes all services and the router. */
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
exports.dot = exports.prisma = void 0;
const Hexa = __importStar(require("./utility/hexa-module"));
const error_middleware_1 = __importDefault(require("./middleware/error-middleware"));
const client_1 = require("../prisma/prisma/client");
const dot_configurator_1 = __importDefault(require("dot_configurator"));
const vlogger_1 = require("@instamenta/vlogger");
const auth_middleware_1 = __importDefault(require("./middleware/auth-middleware"));
const auth_controller_1 = __importDefault(require("./controller/auth-controller"));
const chat_controller_1 = __importDefault(require("./controller/chat-controller"));
const auth_routes_1 = __importDefault(require("./routes/auth-routes"));
const chat_routes_1 = __importDefault(require("./routes/chat-routes"));
const auth_service_1 = __importDefault(require("./service/auth-service"));
const chat_service_1 = __importDefault(require("./service/chat-service"));
const token_tools_1 = __importDefault(require("./utility/token-tools"));
exports.prisma = new client_1.PrismaClient();
exports.dot = new dot_configurator_1.default(process.env);
(function initializeService() {
    const API = Hexa.getExpressAPI();
    const vlogger = vlogger_1.VLogger.getInstance(exports.dot.GET('DEBUG_LEVEL', true));
    const tokenTools = token_tools_1.default.getInstance(exports.dot);
    const authMiddleware = auth_middleware_1.default.getInstance(tokenTools);
    const authService = auth_service_1.default.getInstance(exports.prisma, tokenTools);
    const chatService = chat_service_1.default.getInstance(exports.prisma);
    const authController = auth_controller_1.default.getInstance({ vlogger, prisma: exports.prisma, authService });
    const chatController = chat_controller_1.default.getInstance({ vlogger, prisma: exports.prisma, chatService });
    const authRouter = auth_routes_1.default.getInstance(authController, authMiddleware).getRouter();
    const chatRouter = chat_routes_1.default.getInstance(chatController, authMiddleware).getRouter();
    API.use('/chat/auth', authRouter);
    API.use('/chat', chatRouter);
    API.use(error_middleware_1.default);
    API.listen(exports.dot.GET('ROUTER_PORT', 5065), () => console.log(`[${exports.dot.GET('SERVICE_NAME', 'Chat-Router-Service')}] is running on port: [${exports.dot.GET('ROUTER_PORT', 5075)}]`));
    API.on('error', (error) => console.log('API ran into Error:', error));
})();
Hexa.processOn(['unhandledRejection', 'uncaughtException']);
Hexa.processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
