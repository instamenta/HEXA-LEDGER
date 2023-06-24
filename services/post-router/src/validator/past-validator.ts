// import { body, ValidationChain } from 'express-validator';

// export const loginValidator: ValidationChain[] = [
// 	body('email')
// 		.notEmpty().withMessage('Email is required')
// 		.isEmail().withMessage('Invalid email')
// 		.isLength({ min: 6 }).withMessage('Email must be at least 6 characters long'),
//
// 	body('password')
// 		.notEmpty().withMessage('Password is required')
// 		.isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ];
//
// export const registerValidator: ValidationChain[] = [
// 	body('username')
// 		.notEmpty().withMessage('Username is required')
// 		.isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
//
// 	body('email')
// 		.notEmpty().withMessage('Email is required')
// 		.isEmail().withMessage('Invalid email')
// 		.isLength({ min: 6 }).withMessage('Email must be at least 6 characters long'),
//
// 	body('password')
// 		.notEmpty().withMessage('Password is required')
// 		.isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ];
``