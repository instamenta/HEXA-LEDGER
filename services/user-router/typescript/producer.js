"use strict";
// import {Kafka, Producer as KafkaProducer, CompressionTypes, CompressionCodecs} from 'kafkajs';
// import {kafka_error_log, kafka_start_log} from './utility/logger';
//
// const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
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
// async function connectProducer(): Promise<void> {
// 	try {
// 		await Producer.connect();
// 		kafka_start_log(BROKER_URL, BROKER_PORT);
// 	} catch (error) {
// 		kafka_error_log(BROKER_URL, BROKER_PORT, error);
// 	}
// }
//
// /**
//  * @param message
//  * @param event
//  * @returns
//  */
// async function sendLogMessage(message: object | string, event = 'UNDEFINED'): Promise<void> {
// 	await Producer.send({
// 		topic: 'logger_topic',
// 		compression: CompressionTypes.Snappy,
// 		messages: [
// 			{
// 				headers: {event: event},
// 				value: JSON.stringify({message}),
// 			},
// 		],
// 	});
// }
//
// /**
//  * @returns
//  */
// async function disconnectProducer(): Promise<void> {
// 	await Producer.disconnect()
// 		.then(() => console.log('Disconnected producer'))
// 		.catch((error: Error) => console.error('Kafka Producer Error:', error));
// }
//
