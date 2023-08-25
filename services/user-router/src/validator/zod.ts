/** @file Used for validating post routes. */

import {z, AnyZodObject} from 'zod';
import {Request} from 'express';

/**
 * @param schema
 * @param req
 * @returns
 */
export function zParse<T extends AnyZodObject>(
   schema: T,
   req: Request,
): Promise<z.infer<T>> {
   return schema.parseAsync(req);
}