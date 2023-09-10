"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
function errorMiddleware(error, req, res, next) {
    console.log('==================================');
    console.error('[Request URI]: [', req.url, ']\n', error.stack);
    res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Service Error' })
        .end();
}
exports.default = errorMiddleware;
