"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespondGeneralPurpose = exports.RespondToError = exports.RespondToZodError = exports.RespondMongoToError = exports.HandleMongoError = void 0;
const mongodb_1 = require("mongodb");
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod_1 = require("zod");
function HandleMongoError(error) {
    if (error instanceof mongodb_1.MongoError) {
        console.error('MongoError:', error);
        if (error.code === 11000 || error.code === 11001) {
            console.error('Duplicate key error:', error);
        }
        else if (error instanceof mongodb_1.MongoNetworkError) {
            console.error('MongoNetworkError:', error);
        }
        else if (error.code === 9) {
            console.error('Failed to parse ObjectId:', error);
        }
        else {
            console.error('Unknown Mongo Error', error);
        }
    }
    else {
        console.error('Unknown error:', error);
    }
}
exports.HandleMongoError = HandleMongoError;
function RespondMongoToError(error, w) {
    if (error.code === 11000 || error.code === 11001) {
        w.json({ 'Duplicate key error': error })
            .status(http_status_codes_1.default.CONFLICT).end();
    }
    else if (error instanceof mongodb_1.MongoNetworkError) {
        w.json({ 'MongoNetworkError': error })
            .status(http_status_codes_1.default.SERVICE_UNAVAILABLE).end();
    }
    else if (error.code === 9) {
        w.json({ 'Failed to parse ObjectId': error })
            .status(http_status_codes_1.default.I_AM_A_TEAPOT).end();
    }
    else {
        w.json({ 'Unknown Mongo Error': error })
            .status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).end();
    }
}
exports.RespondMongoToError = RespondMongoToError;
function RespondToZodError(error, w) {
    console.log({ 'Invalid Data': error });
    w.json({ 'Invalid Data': error })
        .status(http_status_codes_1.default.I_AM_A_TEAPOT).end();
}
exports.RespondToZodError = RespondToZodError;
function RespondToError(error, w) {
    console.log({ 'Server ran into error': error });
    w.json({ 'Server ran into error': error })
        .status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).end();
}
exports.RespondToError = RespondToError;
function RespondGeneralPurpose(error, w) {
    console.log(error);
    if (error instanceof zod_1.ZodError) {
        RespondToZodError(error, w);
    }
    else if (error instanceof mongodb_1.MongoError) {
        RespondMongoToError(error, w);
    }
    else {
        RespondToError(error, w);
    }
}
exports.RespondGeneralPurpose = RespondGeneralPurpose;
