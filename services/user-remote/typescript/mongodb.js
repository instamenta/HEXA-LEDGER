"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("./utilities/logger");
const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';
/**
 */
function connectDatabase() {
    const options = {
        dbName: 'user-router',
        retryWrites: true,
    };
    mongoose_1.default.connect(MONGODB_URI, options)
        .then(() => (0, logger_1.mongo_start_log)())
        .catch((error) => (0, logger_1.mongo_desconnect_log)(MONGODB_URI, error));
}
exports.default = connectDatabase;
