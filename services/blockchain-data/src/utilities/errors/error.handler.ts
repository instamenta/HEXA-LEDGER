import StatusCode from '@instamenta/http-status-codes';
import {MongoError, MongoNetworkError} from 'mongodb';
import {Response} from 'express';
import {ZodError} from 'zod';

export const ZodIssueCode = {
   invalid_type: 'invalid_type',
   invalid_literal: 'invalid_literal',
   custom: 'custom',
   invalid_union: 'invalid_union',
   invalid_union_discriminator: 'invalid_union_discriminator',
   invalid_enum_value: 'invalid_enum_value',
   unrecognized_keys: 'unrecognized_keys',
   invalid_arguments: 'invalid_arguments',
   invalid_return_type: 'invalid_return_type',
   invalid_date: 'invalid_date',
   invalid_string: 'invalid_string',
   too_small: 'too_small',
   too_big: 'too_big',
   invalid_intersection_types: 'invalid_intersection_types',
   not_multiple_of: 'not_multiple_of',
   not_finite: 'not_finite',
} as const;

export function HandleMongoError(error: unknown): void {
   if (error instanceof MongoError) {
      console.error('🚫 MongoError:', error);
      switch (error.code) {
      case 11000:
      case 11001:
         console.error('🔑 Duplicate Key Error: This error occurs when you attempt to insert a document with a duplicate key in a unique index.', error);
         break;
      case 121:
         console.error('📋 Document Validation Error: MongoDB allows you to define validation rules on documents using JSON Schema. If a document fails to validate against its schema, you\'ll get this error.', error);
         break;
      case 13:
         console.error('🚷 Unauthorized: This error occurs when a user tries to perform an operation for which they do not have sufficient privileges. It\'s a permission-related error.', error);
         break;
      case 18:
         console.error('🔑 Authentication Failed: This error happens when the provided credentials are incorrect. It typically occurs during user authentication.', error);
         break;
      case 26:
         console.error('🔍 Namespace Not Found: If you reference a collection or database that doesn\'t exist, you\'ll get this error. It could also occur if you reference a collection using an incorrect name.', error);
         break;
      case 112:
         console.error('⚖️ Write Conflict: This error is related to write operations and occurs when multiple updates conflict with each other. It often happens in replica set environments.', error);
         break;
      case 43:
         console.error('🔍 Cursor Not Found: This error can occur if a client tries to fetch data from a cursor that has been closed or doesn\'t exist.', error);
         break;
      case 9001:
         console.error('🌐 Socket Exception: This is a network-related error. It can occur if there are issues with the network connection between the client and the MongoDB server.', error);
         break;
      case 50:
         console.error('⏳ Exceeded Time Limit: MongoDB has a maximum query execution time limit. If a query takes longer than this limit, you\'ll get this error.', error);
         break;
      case 17280:
         console.error('📄 Query Too Large: MongoDB has a maximum BSON document size (16MB). If a query or update operation generates a document that exceeds this size, you\'ll get this error.', error);
         break;
      case 9:
         console.error('❌ Failed To Parse: This error can occur if MongoDB fails to parse a query or command.', error);
         break;
      default:
         console.error('❓ Unknown Mongo Error', error);
         break;
      }
   } else if (error instanceof MongoNetworkError) {
      console.error('🌐 MongoNetworkError:', error);
   }
}

export function RespondMongoToError(error: MongoError | unknown, res: Response): void {
   if (error instanceof MongoError) {
      const errorResponse = {
         error: 'Mongo Error',
         details: '',
      };

      console.error('🚫 Mongo Error:', error);

      switch (error.code) {
      case 11000:
      case 11001:
         errorResponse.details = 'Duplicate Key Error: This error occurs when you attempt to insert a document with a duplicate key in a unique index.';
         break;
      case 121:
         errorResponse.details = 'Document Validation Error: MongoDB allows you to define validation rules on documents using JSON Schema. If a document fails to validate against its schema, you\'ll get this error.';
         break;
      case 13:
         errorResponse.details = 'Unauthorized: This error occurs when a user tries to perform an operation for which they do not have sufficient privileges. It\'s a permission-related error.';
         break;
      case 18:
         errorResponse.details = 'Authentication Failed: This error happens when the provided credentials are incorrect. It typically occurs during user authentication.';
         break;
      case 26:
         errorResponse.details = 'Namespace Not Found: If you reference a collection or database that doesn\'t exist, you\'ll get this error. It could also occur if you reference a collection using an incorrect name.';
         break;
      case 112:
         errorResponse.details = 'Write Conflict: This error is related to write operations and occurs when multiple updates conflict with each other. It often happens in replica set environments.';
         break;
      case 43:
         errorResponse.details = 'Cursor Not Found: This error can occur if a client tries to fetch data from a cursor that has been closed or doesn\'t exist.';
         break;
      case 9001:
         errorResponse.details = 'Socket Exception: This is a network-related error. It can occur if there are issues with the network connection between the client and the MongoDB server.';
         break;
      case 50:
         errorResponse.details = 'Exceeded Time Limit: MongoDB has a maximum query execution time limit. If a query takes longer than this limit, you\'ll get this error.';
         break;
      case 17280:
         errorResponse.details = 'Query Too Large: MongoDB has a maximum BSON document size (16MB). If a query or update operation generates a document that exceeds this size, you\'ll get this error.';
         break;
      case 9:
         errorResponse.details = 'Failed To Parse: This error can occur if MongoDB fails to parse a query or command.';
         break;
      default:
         errorResponse.details = 'Unknown Mongo Error';
         break;
      }

      res.status(500).json(errorResponse);
   } else if (error instanceof MongoNetworkError) {
      console.error('🌐 MongoNetworkError:', error);
      res.status(500).json({error: 'Mongo Network Error'});
   }
}

export function RespondToError(error: unknown, w: Response): void {
   console.log({'Server ran into error': error});
   w.json({'Server ran into error': error})
      .status(StatusCode.INTERNAL_SERVER_ERROR).end();
}

export function RespondGeneralPurpose(error: Error | ZodError | MongoError | unknown, w: Response): void {
   console.log(error);
   if (error instanceof ZodError) {
      RespondToZodError(error, w);
   } else if (error instanceof MongoError) {
      RespondMongoToError(error, w);
   } else {
      RespondToError(error, w);
   }
}

export function RespondToZodError(error: unknown, res: Response): void {
   if (error instanceof ZodError) {
      console.error('❌ Zod Validation Error:', error.message);

      const errorResponse: Record<string, string[]> = {
         details: [],
      };

      error.errors.forEach((validationError) => {
         switch (validationError.code) {
         case ZodIssueCode.invalid_type:
            errorResponse.details.push('❗ Invalid data type.');
            break;
         case ZodIssueCode.invalid_literal:
            errorResponse.details.push('❗ Invalid literal value.');
            break;
         case ZodIssueCode.custom:
            errorResponse.details.push('❗ Custom validation error.');
            break;
         case ZodIssueCode.invalid_union:
            errorResponse.details.push('❗ Invalid union type.');
            break;
         case ZodIssueCode.invalid_union_discriminator:
            errorResponse.details.push('❗ Invalid union discriminator.');
            break;
         case ZodIssueCode.invalid_enum_value:
            errorResponse.details.push('❗ Invalid enum value.');
            break;
         case ZodIssueCode.unrecognized_keys:
            errorResponse.details.push('❗ Unrecognized keys in the data.');
            break;
         case ZodIssueCode.invalid_arguments:
            errorResponse.details.push('❗ Invalid function arguments.');
            break;
         case ZodIssueCode.invalid_return_type:
            errorResponse.details.push('❗ Invalid function return type.');
            break;
         case ZodIssueCode.invalid_date:
            errorResponse.details.push('❗ Invalid date format.');
            break;
         case ZodIssueCode.invalid_string:
            errorResponse.details.push('❗ Invalid string format.');
            break;
         case ZodIssueCode.too_small:
            errorResponse.details.push('❗ Value is too small.');
            break;
         case ZodIssueCode.too_big:
            errorResponse.details.push('❗ Value is too big.');
            break;
         case ZodIssueCode.invalid_intersection_types:
            errorResponse.details.push('❗ Invalid intersection types.');
            break;
         case ZodIssueCode.not_multiple_of:
            errorResponse.details.push('❗ Value is not a multiple of.');
            break;
         case ZodIssueCode.not_finite:
            errorResponse.details.push('❗ Value is not finite.');
            break;
         default:
            errorResponse.details.push('❗ Validation error.');
            break;
         }
      });
      res.status(400).json(errorResponse);
   }
}