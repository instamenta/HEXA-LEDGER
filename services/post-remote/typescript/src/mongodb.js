"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Connects to mongodbDatabase and makes it generally available. */
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./utility/logger"));
const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';
/** Connect to MongoDB. */
function connectDatabase() {
    const options = {
        dbName: 'user-router',
        retryWrites: true,
    };
    mongoose_1.default.connect(MONGODB_URI, options)
        .then(() => logger_1.default['mongo_start_log']())
        .catch((error) => logger_1.default['mongo_disconnect_log'](MONGODB_URI, error));
}
exports.default = connectDatabase;
