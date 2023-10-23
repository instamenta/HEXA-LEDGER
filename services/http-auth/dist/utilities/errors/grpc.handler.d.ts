import { ZodError } from 'zod';
import { ServerErrorResponse } from '@grpc/grpc-js';
export declare function handleZodError(error: ZodError): ServerErrorResponse;
