import {sendLogMessage} from '../producer';
import {IError} from './types/base-types';

const DEBUG_CONSOLE = process.env.DEBUG_CONSOLE || false
	, SERVICE_NAME = process.env.SERVICE_NAME || 'User-Remote-Service'
;

class Log {
	/**
	 * Send kafka messages & optionally console log
	 * ( on/off with env.DEBUG_CONSOLE )
	 * @param type
	 * @param message
	 */
	public static async log(
		type = 'ERROR',
		message: string | object | any,
	): Promise<void> {
		switch (type.toUpperCase()) {
		case 'ERROR': {
			await sendLogMessage(message, 'ERROR');
			this.Console(message, 'ERROR', DEBUG_CONSOLE, '#');
			break;
		}
		case 'DEBUG': {
			await sendLogMessage(message, 'DEBUG');
			this.Console(message, 'DEBUG', DEBUG_CONSOLE, '%');
			break;
		}
		case 'COLLECT': {
			await sendLogMessage(message, 'COLLECT');
			this.Console(message, 'COLLECT', DEBUG_CONSOLE, '-');
			break;
		}
		case 'CRITICAL': {
			await sendLogMessage(message, 'CRITICAL');
			this.Console(message, 'CRITICAL', DEBUG_CONSOLE, '');
			break;
		}
		case 'INFO': {
			await sendLogMessage(message, 'INFO');
			this.Console(message, 'INFO', DEBUG_CONSOLE, '@');
			break;
		}
		default: {
			await sendLogMessage(message, type);
			this.Console(message, type, DEBUG_CONSOLE);
			break;
		}
		}
	}

	/**
	 * Handles console logging in terminal
	 * if DEBUG_CONSOLE == true
	 * @param message
	 * @param type
	 * @param status
	 * @param symbol
	 * @param length
	 */
	private static Console(
		message: string | object,
		type: string,
		status: boolean | string,
		symbol = '=',
		length = 30
	) {
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
	public static mongo_start_log() {
		console.log(
			`✅ ${SERVICE_NAME} Connected to MongoDB ✅
================================================================`);
	}

	/**
	 * Console.logger
	 * @param MONGODB_URI
	 * @param error
	 */
	public static mongo_disconnect_log(MONGODB_URI: string, error: Error) {
		console.error(
			`================================================================
❌ Error connecting to MongoDB ❌ ${SERVICE_NAME} 
MONGODB's URI: ${MONGODB_URI} 
ERROR MESSAGE: ${error.message} 
================================================================
`, error);
	}

	/**
	 * Console.logger
	 * @param BROKER_URL
	 * @param BROKER_PORT
	 */
	public static kafka_start_log(BROKER_URL: string, BROKER_PORT: string | number) {
		console.log(`✅ ${SERVICE_NAME} Producer connected: ${BROKER_URL}:${BROKER_PORT} ✅
================================================================`);
	}

	/**
	 * Console.logger
	 * @param error
	 */
	public static kafka_disconnect_log(error: Error) {
		console.error(
			`================================================================
❌ ${SERVICE_NAME} Kafka Producer disconnected: ${error.message} ❌
================================================================
`, error);
	}

	/**
	 * Console.logger
	 * @param BROKER_URL
	 * @param BROKER_PORT
	 * @param error
	 */
	public static kafka_error_log(BROKER_URL: string, BROKER_PORT: string | number, error: IError) {
		console.error(
			`================================================================
❌ ${SERVICE_NAME} Producer disconnected: ${BROKER_URL}:${BROKER_PORT} ❌
================================================================
`, error);
	}

	/**
	 * Console.logger
	 * @param type
	 * @param error
	 */
	public static process_disconnect_log(type: string, error: Error) {
		console.error(`================================================================
❌ ${SERVICE_NAME} Process.on ${type}: ${error.message} ❌
================================================================
`, error);
	}


	/**
	 * Console.logger
	 * @param port
	 */
	public static grpc_start_log(port: string | number) {
		console.log(
			`================================================================
✅ ${SERVICE_NAME}'s GRPC Server is running on port: ${port} ✅
================================================================`);
	}

	/**
	 * Console.logger
	 * @param port
	 * @param error
	 */
	public static grpc_disconnect_log(port: string | number, error: Error) {
		console.log(`================================================================
❌ ${SERVICE_NAME}'s GRPC Server ran into Error, Port: ${port} ❌
================================================================
`, error);
	}
}

export default Log;