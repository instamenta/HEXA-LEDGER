"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failedPreconditionError = exports.unauthenticatedError = exports.dataLossError = exports.unavailableError = exports.internalError = exports.permissionDeniedError = exports.alreadyExistsError = exports.notFoundError = exports.deadlineExceededError = exports.invalidArgumentError = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
exports.invalidArgumentError = {
    name: 'InvalidArgument',
    code: 3,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Invalid argument provided.',
};
exports.deadlineExceededError = {
    name: 'DeadlineExceeded',
    code: 4,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Deadline for the operation exceeded.',
};
exports.notFoundError = {
    name: 'NotFound',
    code: 5,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Resource not found.',
};
exports.alreadyExistsError = {
    name: 'AlreadyExists',
    code: 6,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Resource already exists.',
};
exports.permissionDeniedError = {
    name: 'PermissionDenied',
    code: 7,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Permission denied for the operation.',
};
exports.internalError = {
    name: 'Internal',
    code: 13,
    details: 'Server ran into unexpected internal error.',
    metadata: new grpc_js_1.Metadata(),
    message: 'Internal server error.',
};
exports.unavailableError = {
    name: 'Unavailable',
    code: 14,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Service unavailable.',
};
exports.dataLossError = {
    name: 'DataLoss',
    code: 15,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Data loss occurred.',
};
exports.unauthenticatedError = {
    name: 'Unauthenticated',
    code: 16,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Request not authenticated.',
};
exports.failedPreconditionError = {
    name: 'FailedPrecondition',
    code: 9,
    details: '',
    metadata: new grpc_js_1.Metadata(),
    message: 'Operation failed precondition check.',
};
const ERRORS = {
    INVALID_ARGUMENT: exports.invalidArgumentError,
    DEADLINE_EXCEEDED: exports.deadlineExceededError,
    NOT_FOUND: exports.notFoundError,
    ALREADY_EXISTS: exports.alreadyExistsError,
    PERMISSION_DENIED: exports.permissionDeniedError,
    INTERNAL: exports.internalError,
    UNAVAILABLE: exports.unavailableError,
    DATA_LOSS: exports.dataLossError,
    UNAUTHENTICATED: exports.unauthenticatedError,
    FAILED_PRECONDITION: exports.failedPreconditionError,
};
exports.default = ERRORS;
