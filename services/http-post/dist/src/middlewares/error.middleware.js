"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._404Handler = exports._errorHandler = void 0;
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
/* eslint-disable @typescript-eslint/no-unused-vars */
function _errorHandler(e, r, w, n) {
    console.error('Error:', e);
    w.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
        .json({ error: 'Internal Server Error!' })
        .end();
}
exports._errorHandler = _errorHandler;
function _404Handler(r, w, n) {
    console.log(r.url);
    w.status(http_status_codes_1.default.NOT_FOUND)
        .json({ error: 'Not Found' })
        .end();
}
exports._404Handler = _404Handler;
