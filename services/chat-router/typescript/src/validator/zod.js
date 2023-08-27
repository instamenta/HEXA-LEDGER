"use strict";
/** @file Used for validating post routes. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.zParse = void 0;
/**
 * @param schema
 * @param req
 * @returns
 */
function zParse(schema, req) {
    return schema.parseAsync(req);
}
exports.zParse = zParse;
