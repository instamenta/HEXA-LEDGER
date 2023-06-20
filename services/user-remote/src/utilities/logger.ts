import {sendLogMessage} from '../producer';

/**
 *
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
		break;
	}
	case 'DEBUG': {
		await sendLogMessage(message, 'DEBUG');
		break;
	}
	case 'COLLECT': {
		await sendLogMessage(message, 'COLLECT');
		break;
	}
	case 'CRITICAL': {
		await sendLogMessage(message, 'CRITICAL');
		break;
	}
	case 'INFO': {
		await sendLogMessage(message, 'INFO');
		break;
	}
	default: {
		await sendLogMessage(message, type);
		break;
	}
	}
}