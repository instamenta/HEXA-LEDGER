"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth-routes"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_middleware_1 = __importDefault(require("./middlewares/error-middleware"));
const API_PORT = process.env.ROUTER_PORT || '5065';
const API = (0, express_1.default)();
API.use((0, cors_1.default)());
API.use((0, cookie_parser_1.default)());
API.use(express_1.default.json());
API.use('/auth', auth_routes_1.default);
API.use('/user', user_routes_1.default);
API.use(error_middleware_1.default);
(async function initializeService() {
    await API.listen(Number(API_PORT), () => console.log(`Server is running on port: ${API_PORT}`));
    API.on('error', (error) => console.log('API ran into Error:', error));
})().catch(error => console.log(error));
['unhandledRejection', 'uncaughtException'].forEach(type => {
    process.on(type, (error) => {
        try {
            console.error(`process.on ${type}`);
            console.error(error);
        }
        catch {
            process.exit(1);
        }
    });
});
['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
    process.once(type, (error) => {
        try {
            console.error(`process.on ${type}`, error);
            process.exit(0);
        }
        finally {
            process.kill(process.pid, type);
        }
    });
});
