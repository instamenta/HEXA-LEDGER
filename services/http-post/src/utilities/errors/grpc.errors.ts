import {ServerErrorResponse} from "@grpc/grpc-js";
import {Metadata} from "@grpc/grpc-js";

export const invalidArgumentError: ServerErrorResponse = {
   name: "InvalidArgument",
   code: 3, //? gRPC error code for "INVALID ARGUMENT"
   details: '',
   metadata: new Metadata(),
   message: "Invalid argument provided.",
};

export const deadlineExceededError: ServerErrorResponse = {
   name: "DeadlineExceeded",
   code: 4, //? gRPC error code for "DEADLINE EXCEEDED"
   details: '',
   metadata: new Metadata(),
   message: "Deadline for the operation exceeded.",
};

export const notFoundError: ServerErrorResponse = {
   name: "NotFound",
   code: 5, //? gRPC error code for "NOT FOUND"
   details: '',
   metadata: new Metadata(),
   message: "Resource not found.",
};

export const alreadyExistsError: ServerErrorResponse = {
   name: "AlreadyExists",
   code: 6, //? gRPC error code for "ALREADY EXISTS"
   details: '',
   metadata: new Metadata(),
   message: "Resource already exists.",
};

export const permissionDeniedError: ServerErrorResponse = {
   name: "PermissionDenied",
   code: 7, //? gRPC error code for "PERMISSION DENIED"
   details: '',
   metadata: new Metadata(),
   message: "Permission denied for the operation.",
};

export const internalError: ServerErrorResponse = {
   name: "Internal",
   code: 13, //? gRPC error code for "INTERNAL"
   details: 'Server ran into unexpected internal error.',
   metadata: new Metadata(),
   message: "Internal server error.",
};

export const unavailableError: ServerErrorResponse = {
   name: "Unavailable",
   code: 14, //? gRPC error code for "UNAVAILABLE"
   details: '',
   metadata: new Metadata(),
   message: "Service unavailable.",
};

export const dataLossError: ServerErrorResponse = {
   name: "DataLoss",
   code: 15, //? gRPC error code for "DATA LOSS"
   details: '',
   metadata: new Metadata(),
   message: "Data loss occurred.",
};

export const unauthenticatedError: ServerErrorResponse = {
   name: "Unauthenticated",
   code: 16, //? gRPC error code for "UNAUTHENTICATED"
   details: '',
   metadata: new Metadata(),
   message: "Request not authenticated.",
};

export const failedPreconditionError: ServerErrorResponse = {
   name: "FailedPrecondition",
   code: 9, //? gRPC error code for "FAILED PRECONDITION"
   details: '',
   metadata: new Metadata(),
   message: "Operation failed precondition check.",
};

const ERRORS = {
   INVALID_ARGUMENT: invalidArgumentError,
   DEADLINE_EXCEEDED: deadlineExceededError,
   NOT_FOUND: notFoundError,
   ALREADY_EXISTS: alreadyExistsError,
   PERMISSION_DENIED: permissionDeniedError,
   INTERNAL: internalError,
   UNAVAILABLE: unavailableError,
   DATA_LOSS: dataLossError,
   UNAUTHENTICATED: unauthenticatedError,
   FAILED_PRECONDITION: failedPreconditionError,
}

export default ERRORS