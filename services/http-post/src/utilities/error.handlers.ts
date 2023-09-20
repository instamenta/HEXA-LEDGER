import {MongoError, MongoNetworkError} from 'mongodb';
import {Response} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import {ZodError} from 'zod';

export function HandleMongoError(error: unknown): void {
    if (error instanceof MongoError) {
        console.error('MongoError:', error);
        if (error.code === 11000 || error.code === 11001) {
            console.error('Duplicate key error:', error);
        } else if (error instanceof MongoNetworkError) {
            console.error('MongoNetworkError:', error);
        } else if (error.code === 9) {
            console.error('Failed to parse ObjectId:', error);
        } else {
            console.error('Unknown Mongo Error', error);
        }
    } else {
        console.error('Unknown error:', error);
    }
}

export function RespondMongoToError(error: MongoError, w: Response): void {
    if (error.code === 11000 || error.code === 11001) {
        w.json({'Duplicate key error': error})
            .status(StatusCode.CONFLICT).end();
    } else if (error instanceof MongoNetworkError) {
        w.json({'MongoNetworkError': error})
            .status(StatusCode.SERVICE_UNAVAILABLE).end();
    } else if (error.code === 9) {
        w.json({'Failed to parse ObjectId': error})
            .status(StatusCode.BAD_REQUEST).end();
    } else {
        w.json({'Unknown Mongo Error': error})
            .status(StatusCode.INTERNAL_SERVER_ERROR).end();
    }
}

export function RespondToZodError(error: ZodError, w: Response): void {
    console.log({'Invalid Data': error});
    w.json({'Invalid Data': error})
        .status(StatusCode.BAD_REQUEST).end();
}

export function RespondToError(error: unknown, w: Response): void {
    console.log({'Server ran into error': error});
    w.json({'Server ran into error': error})
        .status(StatusCode.INTERNAL_SERVER_ERROR).end();
}

export function RespondGeneralPurpose(
    error: Error | ZodError | MongoError | unknown,
    w: Response
): void {
    if (error instanceof ZodError) {
        RespondToZodError(error, w);
    } else if (error instanceof MongoError) {
        RespondMongoToError(error, w);
    } else {
        RespondToError(error, w);
    }
}
