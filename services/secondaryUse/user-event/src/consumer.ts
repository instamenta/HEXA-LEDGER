import {Kafka, Consumer, CompressionCodecs, CompressionTypes} from 'kafkajs';
import {v4 as generateV4 } from 'uuid';

const SnappyCodec = require('kafkajs-snappy')
	, BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
	, BROKER_PORT = process.env.BROKER_PORT || 9092
	, REDPANDA: Kafka = new Kafka({brokers: ['redpanda-0:9092']})
	, CONSUMER: Consumer = REDPANDA.consumer({groupId: generateV4()})
;

export {connectConsumer, disconnectConsumer};
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

/**
 * Handles on each messages and connects to Broker
 */
async function connectConsumer() {
	try {
		await CONSUMER.connect();
		await CONSUMER.subscribe({topic: 'logger_topic'});
		await CONSUMER.run({
			eachMessage: async (
				{topic, partition, message}: IKafkaMessagePayload
			): Promise<void> => {
				const event = message.headers?.event.toString()
					, m = JSON.parse((message.value).toString())
                ;
				console.log(event, m);
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
}

interface IKafkaMessagePayload {
    topic: string,
    partition: number,
    message: object | string | any
}

/**
 * @returns
 */
async function disconnectConsumer() {
	try {
		await CONSUMER.disconnect();
	} catch (error) {
		console.error('Error:', error);
	}
}


