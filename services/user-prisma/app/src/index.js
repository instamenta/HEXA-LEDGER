"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import AUTH_ROUTER from './routes/authRoutes';
// import USER_ROUTER from './routes/userRoutes';
// import PROFILE_ROUTER from './routes/profileRoutes';
// import ERROR_MIDDLEWARE from './middleware/middleware';
const client_1 = require("@prisma/client");
const ROUTER_PORT = process.env.ROUTER_PORT || '5045';
const SERVICE_NAME = process.env.SERVICE_NAME || 'user-prisma';
const API = (0, express_1.default)();
API.use((0, cors_1.default)());
API.use((0, cookie_parser_1.default)());
API.use(express_1.default.json());
// API.use('/auth', AUTH_ROUTER);
// API.use('/user', USER_ROUTER);
// API.use('/profile', PROFILE_ROUTER);
// API.use(ERROR_MIDDLEWARE);
(function INITIALIZE_SERVICE() {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        prisma.$queryRaw `ALTER TABLE "_Followers" DROP CONSTRAINT "fk_user_followers";`;
        return;
        yield API.listen(Number(ROUTER_PORT), () => {
            console.log(`${SERVICE_NAME}  is running on port: ${ROUTER_PORT}`);
        });
        API.on('error', (error) => {
            console.log(`${SERVICE_NAME}:${ROUTER_PORT} ran into Error:`, error);
        });
    });
})().catch(error => console.log(error));
['unhandledRejection', 'uncaughtException'].forEach(type => {
    process.on(type, (error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`);
            console.error(error);
        }
        catch (_a) {
            process.exit(1);
        }
    });
});
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
    process.once(type, (error) => {
        try {
            console.error(`${SERVICE_NAME} - process.on ${type}`, error);
            process.exit(0);
        }
        finally {
            process.kill(process.pid, type);
        }
    });
});
