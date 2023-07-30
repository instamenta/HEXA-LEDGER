/** @file Kafka producer wrapper.  */
// Import {Kafka, Producer as KafkaProducer, CompressionTypes, CompressionCodecs} from 'kafkajs';
// Import {kafka_error_log, kafka_start_log} from './utility/logger';
//
// Const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
// 	, BROKER_PORT: string = process.env.BROKER_PORT || '9092'
// 	, SnappyCodec = require('kafkajs-snappy')
// 	// , Redpanda: Kafka = new Kafka({brokers: ['redpanda-0:9092']})
// 	// , Producer: KafkaProducer = Redpanda.producer()
// ;
// CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;
//
// // export {connectProducer, disconnectProducer, sendLogMessage};
//
// /**
//  * Connects kafka producer
//  */
// Async function connectProducer(): Promise<void> {
// 	Try {
// 		Await Producer.connect();
// 		Kafka_start_log(BROKER_URL, BROKER_PORT);
// 	} catch (error) {
// 		Kafka_error_log(BROKER_URL, BROKER_PORT, error);
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
// 		Topic: 'logger_topic',
// 		Compression: CompressionTypes.Snappy,
// 		Messages: [
// 			{
// 				Headers: {event: event},
// 				Value: JSON.stringify({message}),
// 			},
// 		],
// 	});
// }
//
// /**
//  * @returns
//  */
// Async function disconnectProducer(): Promise<void> {
// 	Await Producer.disconnect()
// 		.then(() => console.log('Disconnected producer'))
// 		.catch((error: Error) => console.error('Kafka Producer Error:', error));
// }
//
