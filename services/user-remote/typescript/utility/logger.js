"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpc_disconnect_log = exports.grpc_start_log = exports.process_disconnect_log = exports.kafka_error_log = exports.kafka_disconnect_log = exports.kafka_start_log = exports.mongo_desconnect_log = exports.mongo_start_log = exports.log = void 0;
const producer_1 = require("../producer");
const DEBUG_CONSOLE = process.env.DEBUG_CONSOLE || false, SERVICE_NAME = process.env.SERVICE_NAME || 'User-Remote-Service';
/**
 * Send Kafka messages & optionally console.logs
 * ( on/off with env.DEBUG_CONSOLE
 * @param type
 * @param message
 */
async function log(type = 'ERROR', message) {
    switch (type.toUpperCase()) {
        case 'ERROR': {
            await (0, producer_1.sendLogMessage)(message, 'ERROR');
            Console(message, 'ERROR', DEBUG_CONSOLE, '#');
            break;
        }
        case 'DEBUG': {
            await (0, producer_1.sendLogMessage)(message, 'DEBUG');
            Console(message, 'DEBUG', DEBUG_CONSOLE, '%');
            break;
        }
        case 'COLLECT': {
            await (0, producer_1.sendLogMessage)(message, 'COLLECT');
            Console(message, 'COLLECT', DEBUG_CONSOLE, '-');
            break;
        }
        case 'CRITICAL': {
            await (0, producer_1.sendLogMessage)(message, 'CRITICAL');
            Console(message, 'CRITICAL', DEBUG_CONSOLE, '');
            break;
        }
        case 'INFO': {
            await (0, producer_1.sendLogMessage)(message, 'INFO');
            Console(message, 'INFO', DEBUG_CONSOLE, '@');
            break;
        }
        default: {
            await (0, producer_1.sendLogMessage)(message, type);
            Console(message, type, DEBUG_CONSOLE);
            break;
        }
    }
}
exports.log = log;
/**
 * Handles Console.logging in terminal
 * if DEBUG_CONSOLE == true
 * @param message
 * @param type
 * @param status
 * @param symbol
 * @param length
 */
function Console(message, type, status, symbol = '=', length = 30) {
    if (!status || status != 'true' || Number.isNaN(length)) {
        return;
    }
    if (type.toLowerCase() === 'error') {
        console.log(symbol.repeat(length));
        console.error(`❌ ${type} :`, message);
        console.log(symbol.repeat(length));
        return;
    }
    if (symbol === '=' || symbol === '-') {
        console.log(symbol.repeat(length));
        console.log(`${type} :`, message);
        console.log(symbol.repeat(length));
        return;
    }
    if (type.toLowerCase() === 'debug' || type.toLowerCase() === 'info') {
        console.log(`${type} :`, message);
        return;
    }
    console.log(symbol.repeat(length * 2));
    console.log(`${type} :`, message);
}
/**
 * Console.logger
 */
function mongo_start_log() {
    console.log(`✅ ${SERVICE_NAME} Connected to MongoDB ✅
================================================================`);
}
exports.mongo_start_log = mongo_start_log;
/**
 * Console.logger
 * @param MONGODB_URI
 * @param error
 */
function mongo_desconnect_log(MONGODB_URI, error) {
    console.error(`================================================================
❌ Error connecting to MongoDB ❌ ${SERVICE_NAME} 
MONGODB's URI: ${MONGODB_URI} 
ERROR MESSAGE: ${error.message} 
================================================================
`, error);
}
exports.mongo_desconnect_log = mongo_desconnect_log;
/**
 * Console.logger
 * @param BROKER_URL
 * @param BROKER_PORT
 */
function kafka_start_log(BROKER_URL, BROKER_PORT) {
    console.log(`✅ ${SERVICE_NAME} Producer connected: ${BROKER_URL}:${BROKER_PORT} ✅
================================================================`);
}
exports.kafka_start_log = kafka_start_log;
/**
 * Console.logger
 * @param error
 */
function kafka_disconnect_log(error) {
    console.error(`================================================================
❌ ${SERVICE_NAME} Kafka Producer disconnected: ${error.message} ❌
================================================================
`, error);
}
exports.kafka_disconnect_log = kafka_disconnect_log;
/**
 * Console.logger
 * @param BROKER_URL
 * @param BROKER_PORT
 * @param error
 */
function kafka_error_log(BROKER_URL, BROKER_PORT, error) {
    console.error(`================================================================
❌ ${SERVICE_NAME} Producer disconnected: ${BROKER_URL}:${BROKER_PORT} ❌
================================================================
`, error);
}
exports.kafka_error_log = kafka_error_log;
/**
 * Console.logger
 * @param type
 * @param error
 */
function process_disconnect_log(type, error) {
    console.error(`================================================================
❌ ${SERVICE_NAME} Process.on ${type}: ${error.message} ❌
================================================================
`, error);
}
exports.process_disconnect_log = process_disconnect_log;
/**
 * Console.logger
 * @param port
 */
function grpc_start_log(port) {
    console.log(`================================================================
✅ ${SERVICE_NAME}'s GRPC Server is running on port: ${port} ✅
================================================================`);
}
exports.grpc_start_log = grpc_start_log;
/**
 * Console.logger
 * @param port
 * @param error
 */
function grpc_disconnect_log(port, error) {
    console.log(`================================================================
❌ ${SERVICE_NAME}'s GRPC Server ran into Error, Port: ${port} ❌
================================================================
`, error);
}
exports.grpc_disconnect_log = grpc_disconnect_log;
