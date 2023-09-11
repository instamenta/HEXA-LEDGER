"use strict";
/** @file Has all cool tools. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOnce = exports.processOn = void 0;
const server_1 = require("../server");
/**
 * @param CASES
 */
function processOn(CASES) {
    CASES.forEach((TYPE) => {
        process.on(TYPE, (e) => {
            try {
                console.error({ e, msg: `${server_1.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}` });
            }
            catch {
                process.exit(1);
            }
        });
    });
}
exports.processOn = processOn;
/**
 * @param CASES
 */
function processOnce(CASES) {
    CASES.forEach((TYPE) => {
        process.once(TYPE, (e) => {
            try {
                console.error({ e, msg: `${server_1.dot.GET('SERVICE_NAME', 'Post-Router-Service')} - process.on ${TYPE}` });
                process.exit(0);
            }
            finally {
                process.kill(process.pid, TYPE);
            }
        });
    });
}
exports.processOnce = processOnce;
