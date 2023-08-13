/** @file Kafka wrappers. */
// Import {
//     Kafka, Producer as KafkaProducer,
//     CompressionTypes, CompressionCodecs
// } from 'kafkajs';
// Import Log from './utility/logger';
//
// Const BROKER_URL: string = process.env.BROKER_URL || 'redpanda-0'
//     , BROKER_PORT: string = process.env.BROKER_PORT || '9092'
//     , SnappyCodec = require('kafkajs-snappy')
//     , Redpanda: Kafka = new Kafka({brokers: ['redpanda-0:9092']})
//     , Producer: KafkaProducer = Redpanda.producer()
// ;
// CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;
//
// Export {connectProducer, disconnectProducer, sendLogMessage};
//
// /**
//  * Connects kafka producer.
//  */
// Async function connectProducer(): Promise<void> {
//     Try {
//         Await Producer.connect();
//         Log['kafka_start_log'](BROKER_URL, BROKER_PORT);
//     } catch (error) {
//         Log['kafka_error_log'](BROKER_URL, BROKER_PORT, error);
//     }
// }
//
// /**
//  * @param message
//  * @param event
//  * @returns
//  */
// Async function sendLogMessage(message: object | string, event = 'UNDEFINED'): Promise<void> {
//     Await Producer.send({
//         Topic: 'logger_topic',
//         Compression: CompressionTypes.Snappy,
//         Messages: [{
//             Headers: {event: event},
//             Value: JSON.stringify({message}),
//         }]
//     });
// }
//
// /**
//  * @returns
//  */
// Async function disconnectProducer(): Promise<void> {
//     Await Producer.disconnect()
//         .then(() => console.log('Disconnected producer'))
//         .catch((error: Error) => console.error('Kafka Producer Error:', error));
// }
//
