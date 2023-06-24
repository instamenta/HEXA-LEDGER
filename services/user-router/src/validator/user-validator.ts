import {query, ValidationChain} from 'express-validator';

export const pageLimit: ValidationChain[] = [
	query('page')
		.isInt({min: 1}).withMessage('Page must be positive number')
		.toInt().optional(),

	query('limit')
		.isInt({min: 1}).withMessage('Limit must be positive number')
		.toInt().optional(),
];


export const pageLimitFilter: ValidationChain[] = [
	query('page')
		.isInt({min: 1}).withMessage('Page must be positive number')
		.toInt().optional(),

	query('limit')
		.isInt({min: 1}).withMessage('Limit must be positive number')
		.toInt().optional(),

	query('filter')
		.optional(),
];
