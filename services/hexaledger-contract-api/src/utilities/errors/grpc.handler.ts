import {ZodError, ZodIssue} from 'zod';
import {Metadata, ServerErrorResponse} from '@grpc/grpc-js';
import ERRORS from './grpc.errors';

export function handleZodError(error: ZodError): ServerErrorResponse {
   const _error = ERRORS.INVALID_ARGUMENT;
   const _metadata = new Metadata();
   error.errors.forEach((e: ZodIssue, i: number) => {
      _metadata.set(`error_${i}`, e.message);
   });
   _error.metadata = _metadata;
   _error.details = error.errors.map((e) => e.message).join(', ');
   return _error;
}

