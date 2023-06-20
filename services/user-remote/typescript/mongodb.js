"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';
/**
 *
 */
function connectDatabase() {
    const options = {
        dbName: 'user-router',
        retryWrites: true,
    };
    mongoose_1.default.connect(MONGODB_URI, options)
        .then(() => console.log(`Connected to MongoDB
		=================================================`))
        .catch((error) => {
        console.error(`=================================================
            Error connecting to MongoDB ~  
            MONGODB's URI: ${MONGODB_URI} 
            ERROR MESSAGE: ${error.message} 
            =====================ERROR======================='
            `, error);
    });
}
exports.default = connectDatabase;
