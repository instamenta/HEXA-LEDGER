/** @file User for console logging and sending kafka messages. */
// Import {sendLogMessage} from '../producer';

const DEBUG_CONSOLE = process.env.DEBUG_CONSOLE || false;

/**
 * Send Kafka messages & optionally console.logs.
 * @param type
 * @param message
 */
export function log(
   type = 'ERROR',
   message: string | object | any,
): void {
   switch (type.toUpperCase()) {
      case 'ERROR': {
         // Await sendLogMessage(message, 'ERROR');
         Console(message, 'ERROR', DEBUG_CONSOLE, '#');
         break;
      }
      case 'DEBUG': {
         // Await sendLogMessage(message, 'DEBUG');
         Console(message, 'DEBUG', DEBUG_CONSOLE, '%');
         break;
      }
      case 'COLLECT': {
         // Await sendLogMessage(message, 'COLLECT');
         Console(message, 'COLLECT', DEBUG_CONSOLE, '-');
         break;
      }
      case 'CRITICAL': {
         // Await sendLogMessage(message, 'CRITICAL');
         Console(message, 'CRITICAL', DEBUG_CONSOLE, '');
         break;
      }
      case 'INFO': {
         // Await sendLogMessage(message, 'INFO');
         Console(message, 'INFO', DEBUG_CONSOLE, '@');
         break;
      }
      default: {
         // Await sendLogMessage(message, type);
         Console(message, type, DEBUG_CONSOLE);
         break;
      }
   }
}

/**
 * Handles Console.logging in terminal.
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
   if (!status || status !== 'true' || Number.isNaN(length)) {
      return;
   }
   if (type.toLowerCase() === 'error') {
      console.log(symbol.repeat(length));
      console.error(`${type} :`, message);
      console.log(symbol.repeat(length));
      return;
   }
   if (symbol === '=' || symbol === '-' ) {
      console.log(symbol.repeat(length));
      console.log(`${type} :`, message);
      console.log(symbol.repeat(length));
      return;
   }
   if (type.toLowerCase() === 'debug' || type.toLowerCase() === 'info' ) {
      console.log(`${type} :`, message);
      return;
   }
   console.log(symbol.repeat(length*2));
   console.log(`${type} :`, message);
}

/**
 *
 */
export function mongo_start_log() {
   console.log(
      `✅ Connected to MongoDB ✅
================================================================`);
}

/**
 * @param MONGODB_URI
 * @param error
 */
export function mongo_desconnect_log(MONGODB_URI: string, error: Error) {
   console.error(
      `================================================================
❌ Error connecting to MongoDB ❌  
MONGODB's URI: ${MONGODB_URI} 
ERROR MESSAGE: ${error.message} 
================================================================
`, error);
}

/**
 * @param BROKER_URL
 * @param BROKER_PORT
 */
export function kafka_start_log(BROKER_URL: string, BROKER_PORT: string | number) {
   console.log(`✅ Producer connected: ${BROKER_URL}:${BROKER_PORT} ✅
================================================================`);
}

/**
 * @param error
 */
export function kafka_disconnect_log(error: Error) {
   console.error(
      `================================================================
❌ Kafka Producer disconnected: ${error.message} ❌
================================================================`,
      error);
}

/**
 * @param BROKER_URL
 * @param BROKER_PORT
 * @param error
 */
export function kafka_error_log(BROKER_URL: string, BROKER_PORT: string | number, error: Error | any) {
   console.error(
      `================================================================
❌ Producer disconnected: ${BROKER_URL}:${BROKER_PORT} ❌
================================================================
`, error);
}

/**
 * @param type
 * @param error
 */
export function process_disconnect_log(type: string, error: Error) {
   console.error(`================================================================
❌ Process.on ${type}: ${error.message} ❌
================================================================`
   , error);
}


/**
 * @param port
 */
export function grpc_start_log(port: string | number) {
   console.log(
      `================================================================
✅ GRPC Server is running on port: ${port} ✅
================================================================`);
}

/**
 * @param port
 * @param error
 */
export function grpc_disconnect_log(port: string | number, error: Error) {
   console.log(`================================================================
❌ GRPC Server ran into Error, Port: ${port} ❌
================================================================`, error);
}