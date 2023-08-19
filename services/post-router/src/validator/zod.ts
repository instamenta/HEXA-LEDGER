/** @file Used for validating post routes. */

import {z, AnyZodObject} from 'zod';
import {Request} from 'express';

/**
 * @param schema
 * @param req
 * @returns
 */
export async function zParse<T extends AnyZodObject>(
   schema: T,
   req: Request,
): Promise<z.infer<T>> {
   return await schema.parseAsync(req)
      .catch((e) => {
         console.log(e);
         throw new TypeError(e);
      });
}
