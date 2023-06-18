import { Kafka, Producer as KafkaProducer } from 'kafkajs';

const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0';
const BROKER_PORT: string = process.env.BROKER_PORT || '9092';

const Redpanda: Kafka = new Kafka({ brokers: ['redpanda-0:9092'] });
const Producer: KafkaProducer = Redpanda.producer();

/**
 * @returns
 */
async function connectProducer(): Promise<void> {
	try {
		await Producer.connect();
		console.log(`Producer connected: ${BROKER_URL}:${BROKER_PORT}`);
	} catch (error) {
		console.error('Error:', error);
	}
}

/**
 * @param message
 * @param event
 * @returns
 */
async function sendMessage(message: object, event = 'default'): Promise<void> {
	await Producer.send({
		topic: 'user_events_topic',
		// compression: CompressionTypes.GZIP,
		messages: [
			{
				headers: { event: event },
				value: JSON.stringify({ message }),
			},
		],
	});
}

/**
 * @returns
 */
async function disconnectProducer(): Promise<void> {
	await Producer.disconnect()
		.then(() => console.log('Disconnected producer'))
		.catch((error: Error) => console.error('Error:', error));
}

export { connectProducer, disconnectProducer, sendMessage };
