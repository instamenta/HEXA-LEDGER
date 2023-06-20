"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const producer_1 = require("../producer");
/**
 *
 * @param type
 * @param message
 */
async function log(type = 'ERROR', message) {
    switch (type.toUpperCase()) {
        case 'ERROR': {
            await (0, producer_1.sendLogMessage)(message, 'ERROR');
            break;
        }
        case 'DEBUG': {
            await (0, producer_1.sendLogMessage)(message, 'DEBUG');
            break;
        }
        case 'COLLECT': {
            await (0, producer_1.sendLogMessage)(message, 'COLLECT');
            break;
        }
        case 'CRITICAL': {
            await (0, producer_1.sendLogMessage)(message, 'CRITICAL');
            break;
        }
        case 'INFO': {
            await (0, producer_1.sendLogMessage)(message, 'INFO');
            break;
        }
        default: {
            await (0, producer_1.sendLogMessage)(message, type);
            break;
        }
    }
}
exports.log = log;
