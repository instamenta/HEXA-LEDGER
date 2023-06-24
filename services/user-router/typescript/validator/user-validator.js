"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageLimitFilter = exports.pageLimit = void 0;
const express_validator_1 = require("express-validator");
exports.pageLimit = [
    (0, express_validator_1.query)('page')
        .isInt({ min: 1 }).withMessage('Page must be positive number')
        .toInt().optional(),
    (0, express_validator_1.query)('limit')
        .isInt({ min: 1 }).withMessage('Limit must be positive number')
        .toInt().optional(),
];
exports.pageLimitFilter = [
    (0, express_validator_1.query)('page')
        .isInt({ min: 1 }).withMessage('Page must be positive number')
        .toInt().optional(),
    (0, express_validator_1.query)('limit')
        .isInt({ min: 1 }).withMessage('Limit must be positive number')
        .toInt().optional(),
    (0, express_validator_1.query)('filter')
        .optional(),
];
