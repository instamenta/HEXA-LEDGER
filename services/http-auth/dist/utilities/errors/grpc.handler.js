"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const grpc_errors_1 = __importDefault(require("./grpc.errors"));
function handleZodError(error) {
    const _error = grpc_errors_1.default.INVALID_ARGUMENT;
    const _metadata = new grpc_js_1.Metadata();
    error.errors.forEach((e, i) => {
        _metadata.set(`error_${i}`, e.message);
    });
    _error.metadata = _metadata;
    _error.details = error.errors.map((e) => e.message).join(', ');
    return _error;
}
exports.handleZodError = handleZodError;
