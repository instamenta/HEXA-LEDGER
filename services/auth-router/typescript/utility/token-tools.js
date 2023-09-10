"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenTools {
    dot;
    vlog;
    secret;
    config;
    constructor(dot, vlogger) {
        this.dot = dot;
        this.vlog = vlogger.getVlog(this.constructor.name);
        this.config = this.dot.GET("TOKEN_CONFIG", { expiresIn: "60 days" });
        this.secret = this.dot.GET("TOKEN_SECRET", '8Zz5tw0IonM3XPZZFN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb');
    }
    static getInstance({ dot, vlogger }) {
        return new TokenTools(dot, vlogger);
    }
    generateToken(payload) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, this.secret, this.config, (e, token) => e ? reject(e) : resolve(token));
        });
    }
    decodeToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this.secret, (e, decoded) => e ? reject(e) : resolve(decoded));
        });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.default = TokenTools;
