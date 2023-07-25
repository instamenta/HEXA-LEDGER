/** @file Creates and connect Kafka Producer. */

// Import {
// 	Kafka, Producer as KafkaProducer,
// 	CompressionTypes, CompressionCodecs
// } from 'kafkajs';
// Import Log from './utility/logger';
//
// Const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
// 	, BROKER_PORT: string = process.env.BROKER_PORT || '9092'
// 	, KAFKA_PRODUCER_TOPIC: string = process.env.KAFKA_PRODUCER_TOPIC || 'logger_topic'
// 	, SnappyCodec = require('kafkajs-snappy')
// 	// , Redpanda: Kafka = new Kafka({brokers: ['redpanda-0:9092']})
// 	// , Producer: KafkaProducer = Redpanda.producer()
// ;
// CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;
//
// // export {connectProducer, disconnectProducer, sendLogMessage};
//
// /** Connects kafka producer */
// Async function connectProducer(): Promise<void> {
// 	Try {
// 		// await Producer.connect();
// 		Log['kafka_start_log'](BROKER_URL, BROKER_PORT);
// 	} catch (error) {
// 		Log['kafka_error_log'](BROKER_URL, BROKER_PORT, error);
// 	}
// }
//
// /**
//  * @param message
//  * @param event
//  * @returns
//  */
// Async function sendLogMessage(message: object | string, event = 'UNDEFINED'): Promise<void> {
// 	Await Producer.send({
// 		Topic: KAFKA_PRODUCER_TOPIC,
// 		Compression: CompressionTypes.Snappy,
// 		Messages: [{
// 			Headers: {event: event},
// 			Value: JSON.stringify({message}),
// 		}]
// 	});
// }
//
// /** On Producer Disconnection */
// Async function disconnectProducer(): Promise<void> {
// 	Await Producer.disconnect()
// 		.then(() => console.log('Disconnected producer'))
// 		.catch((error: Error) => console.error('Kafka Producer Error:', error));
// }

