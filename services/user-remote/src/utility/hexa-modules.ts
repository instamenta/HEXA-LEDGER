/** @file Has all cool tools. */

import {dot} from '../index';

/**
 * @param CASES
 */
export function processOn(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.on(TYPE, (e: Error) => {
         try {
            console.error({e, msg: `${dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
         } catch {
            process.exit(1);
         }
      });
   });
}

/**
 * @param CASES
 */
export function processOnce(CASES: Array<string>): void {
   CASES.forEach((TYPE: string) => {
      process.once(TYPE, (e: Error) => {
         try {
            console.error({e, msg: `${dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}`});
            process.exit(0);
         } finally {
            process.kill(process.pid, TYPE);
         }
      });
   });
}
