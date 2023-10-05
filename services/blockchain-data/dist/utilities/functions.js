"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare_to_stringify = void 0;
const prepare_to_stringify = (d) => JSON.stringify(d, (k, v) => typeof v === 'bigint' ? v.toString() : v);
exports.prepare_to_stringify = prepare_to_stringify;
