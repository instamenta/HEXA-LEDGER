"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Used for console logging and sending kafka messages. */
const producer_1 = require("../producer");
const base_enumerations_1 = require("./enumerations/base-enumerations");
const DEBUG_CONSOLE = process.env.DEBUG_CONSOLE || false, SERVICE_NAME = process.env.SERVICE_NAME || 'User-Remote-Service';
class Log {
    /**
     * Send kafka messages & optionally console log
     * ( on/off with env.DEBUG_CONSOLE ).
     * @param type
     * @param message
     */
    static async log(type = base_enumerations_1.LogAttr.DEFAULT, message) {
        switch (type.toUpperCase()) {
            case base_enumerations_1.LogAttr.ERROR: {
                await (0, producer_1.sendLogMessage)(message, base_enumerations_1.LogAttr.ERROR);
                this.Console(message, base_enumerations_1.LogAttr.ERROR, DEBUG_CONSOLE, '#');
                break;
            }
            case base_enumerations_1.LogAttr.DEBUG: {
                await (0, producer_1.sendLogMessage)(message, base_enumerations_1.LogAttr.DEBUG);
                this.Console(message, base_enumerations_1.LogAttr.DEBUG, DEBUG_CONSOLE, '%');
                break;
            }
            case base_enumerations_1.LogAttr.COLLECT: {
                await (0, producer_1.sendLogMessage)(message, base_enumerations_1.LogAttr.COLLECT);
                this.Console(message, base_enumerations_1.LogAttr.COLLECT, DEBUG_CONSOLE, '-');
                break;
            }
            case base_enumerations_1.LogAttr.CRITICAL: {
                await (0, producer_1.sendLogMessage)(message, base_enumerations_1.LogAttr.CRITICAL);
                this.Console(message, base_enumerations_1.LogAttr.CRITICAL, DEBUG_CONSOLE, '');
                break;
            }
            case base_enumerations_1.LogAttr.INFO: {
                await (0, producer_1.sendLogMessage)(message, base_enumerations_1.LogAttr.INFO);
                this.Console(message, base_enumerations_1.LogAttr.INFO, DEBUG_CONSOLE, '@');
                break;
            }
            default: {
                await (0, producer_1.sendLogMessage)(message, type);
                this.Console(message, type, DEBUG_CONSOLE);
                break;
            }
        }
    }
    /**
     * Handles console logging in terminal
     * if DEBUG_CONSOLE == true.
     * @param message
     * @param type
     * @param status
     * @param symbol
     * @param length
     */
    static Console(message, type, status, symbol = '=', length = 30) {
        if (!status || status !== 'true' || Number.isNaN(length)) {
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
     * Console.logger.
     */
    static mongo_start_log() {
        console.log(`✅ ${SERVICE_NAME} Connected to MongoDB ✅
================================================================`);
    }
    /**
     * Console.logger.
     * @param MONGODB_URI
     * @param error
     */
    static mongo_disconnect_log(MONGODB_URI, error) {
        console.error(`================================================================
❌ Error connecting to MongoDB ❌ ${SERVICE_NAME} 
MONGODB's URI: ${MONGODB_URI} 
ERROR MESSAGE: ${error.message} 
================================================================
`, error);
    }
    /**
     * Console.logger.
     * @param BROKER_URL
     * @param BROKER_PORT
     */
    static kafka_start_log(BROKER_URL, BROKER_PORT) {
        console.log(`✅ ${SERVICE_NAME} Producer connected: ${BROKER_URL}:${BROKER_PORT} ✅
================================================================`);
    }
    /**
     * Console.logger.
     * @param error
     */
    static kafka_disconnect_log(error) {
        console.error(`================================================================
❌ ${SERVICE_NAME} Kafka Producer disconnected: ${error.message} ❌
================================================================
`, error);
    }
    /**
     * Console.logger.
     * @param BROKER_URL
     * @param BROKER_PORT
     * @param error
     */
    static kafka_error_log(BROKER_URL, BROKER_PORT, error) {
        console.error(`================================================================
❌ ${SERVICE_NAME} Producer disconnected: ${BROKER_URL}:${BROKER_PORT} ❌
================================================================
`, error);
    }
    /**
     * Console.logger.
     * @param type
     * @param error
     */
    static process_disconnect_log(type, error) {
        console.error(`================================================================
❌ ${SERVICE_NAME} Process.on ${type}: ${error.message} ❌
================================================================
`, error);
    }
    /**
     * Console.logger.
     * @param port
     */
    static grpc_start_log(port) {
        console.log(`================================================================
✅ ${SERVICE_NAME}'s GRPC Server is running on port: ${port} ✅
================================================================`);
    }
    /**
     * Console.logger.
     * @param port
     * @param error
     */
    static grpc_disconnect_log(port, error) {
        console.log(`================================================================
❌ ${SERVICE_NAME}'s GRPC Server ran into Error, Port: ${port} ❌
================================================================
`, error);
    }
}
exports.default = Log;
