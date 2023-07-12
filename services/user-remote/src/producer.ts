import {Kafka, Producer as KafkaProducer, CompressionTypes, CompressionCodecs} from 'kafkajs';
import Log from './utility/logger';

const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
	, BROKER_PORT: string = process.env.BROKER_PORT || '9092'
	, KAFKA_PRODUCER_TOPIC: string = process.env.KAFKA_PRODUCER_TOPIC || 'logger_topic'
	, SnappyCodec = require('kafkajs-snappy')
	, Redpanda: Kafka = new Kafka({brokers: ['redpanda-0:9092']})
	, Producer: KafkaProducer = Redpanda.producer()
;
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

export {connectProducer, disconnectProducer, sendLogMessage};

/** Connects kafka producer */
async function connectProducer(): Promise<void> {
	try {
		await Producer.connect();
		Log['kafka_start_log'](BROKER_URL, BROKER_PORT);
	} catch (error) {
		Log['kafka_error_log'](BROKER_URL, BROKER_PORT, error);
	}
}

/**
 * @param message
 * @param event
 * @returns
 */
async function sendLogMessage(message: object | string, event = 'UNDEFINED'): Promise<void> {
	await Producer.send({
		topic: KAFKA_PRODUCER_TOPIC,
		compression: CompressionTypes.Snappy,
		messages: [
			{
				headers: {event: event},
				value: JSON.stringify({message}),
			}
		]
	});
}

/** On Producer Disconnection */
async function disconnectProducer(): Promise<void> {
	await Producer.disconnect()
		.then(() => console.log('Disconnected producer'))
		.catch((error: Error) => console.error('Kafka Producer Error:', error));
}

