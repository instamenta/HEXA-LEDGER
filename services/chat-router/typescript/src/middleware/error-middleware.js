"use strict";
/** @file Error handling middleware. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
/**
 * @param e
 * @param req
 * @param res
 */
function errorMiddleware(e, req, res) {
    console.error('[Non-existing Uri:', req.url, '] Error:', e);
    res.status(http_status_codes_1.default.NOT_FOUND)
        .json({ error: `Path is not handled by service ${req.url}` })
        .end();
}
exports.default = errorMiddleware;
