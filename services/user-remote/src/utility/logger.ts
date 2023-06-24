import {sendLogMessage} from '../producer';

const DEBUG_CONSOLE = process.env.DEBUG_CONSOLE || false
	, SERVICE_NAME = process.env.SERVICE_NAME || 'User-Remote-Service'
;

/**
 * Send Kafka messages & optionally console.logs
 * ( on/off with env.DEBUG_CONSOLE
 * @param type
 * @param message
 */
export async function log(
	type = 'ERROR',
	message: string | object | any,
): Promise<void> {
	switch (type.toUpperCase()) {
	case 'ERROR': {
		await sendLogMessage(message, 'ERROR');
		Console(message, 'ERROR', DEBUG_CONSOLE, '#');
		break;
	}
	case 'DEBUG': {
		await sendLogMessage(message, 'DEBUG');
		Console(message, 'DEBUG', DEBUG_CONSOLE, '%');
		break;
	}
	case 'COLLECT': {
		await sendLogMessage(message, 'COLLECT');
		Console(message, 'COLLECT', DEBUG_CONSOLE, '-');
		break;
	}
	case 'CRITICAL': {
		await sendLogMessage(message, 'CRITICAL');
		Console(message, 'CRITICAL', DEBUG_CONSOLE, '');
		break;
	}
	case 'INFO': {
		await sendLogMessage(message, 'INFO');
		Console(message, 'INFO', DEBUG_CONSOLE, '@');
		break;
	}
	default: {
		await sendLogMessage(message, type);
		Console(message, type, DEBUG_CONSOLE);
		break;
	}
	}
}

/**
 * Handles Console.logging in terminal
 * if DEBUG_CONSOLE == true
 * @param message
 * @param type
 * @param status
 * @param symbol
 * @param length
 */
function Console(
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
export function mongo_start_log() {
	console.log(
		`✅ ${SERVICE_NAME} Connected to MongoDB ✅
================================================================`);
}

/**
 * Console.logger
 * @param MONGODB_URI
 * @param error
 */
export function mongo_desconnect_log(MONGODB_URI: string, error: Error) {
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
export function kafka_start_log(BROKER_URL: string, BROKER_PORT: string | number) {
	console.log(`✅ ${SERVICE_NAME} Producer connected: ${BROKER_URL}:${BROKER_PORT} ✅
================================================================`);
}

/**
 * Console.logger
 * @param error
 */
export function kafka_disconnect_log(error: Error) {
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
export function kafka_error_log(BROKER_URL: string, BROKER_PORT: string | number, error: Error | any) {
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
export function process_disconnect_log(type: string, error: Error) {
	console.error(`================================================================
❌ ${SERVICE_NAME} Process.on ${type}: ${error.message} ❌
================================================================
`, error);
}


/**
 * Console.logger
 * @param port
 */
export function grpc_start_log(port: string | number) {
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
export function grpc_disconnect_log(port: string | number, error: Error) {
	console.log(`================================================================
❌ ${SERVICE_NAME}'s GRPC Server ran into Error, Port: ${port} ❌
================================================================
`, error);
}