"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLogMessage = exports.disconnectProducer = exports.connectProducer = void 0;
const kafkajs_1 = require("kafkajs");
const logger_1 = require("./utility/logger");
const BROKER_URL = process.env.BROKER_URL || 'redpanda-0', BROKER_PORT = process.env.BROKER_PORT || '9092', SnappyCodec = require('kafkajs-snappy'), Redpanda = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] }), Producer = Redpanda.producer();
kafkajs_1.CompressionCodecs[kafkajs_1.CompressionTypes.Snappy] = SnappyCodec;
/**
 * Connects kafka producer
 */
async function connectProducer() {
    try {
        await Producer.connect();
        (0, logger_1.kafka_start_log)(BROKER_URL, BROKER_PORT);
    }
    catch (error) {
        (0, logger_1.kafka_error_log)(BROKER_URL, BROKER_PORT, error);
    }
}
exports.connectProducer = connectProducer;
/**
 * @param message
 * @param event
 * @returns
 */
async function sendLogMessage(message, event = 'UNDEFINED') {
    await Producer.send({
        topic: 'logger_topic',
        compression: kafkajs_1.CompressionTypes.Snappy,
        messages: [
            {
                headers: { event: event },
                value: JSON.stringify({ message }),
            },
        ],
    });
}
exports.sendLogMessage = sendLogMessage;
/**
 * @returns
 */
async function disconnectProducer() {
    await Producer.disconnect()
        .then(() => console.log('Disconnected producer'))
        .catch((error) => console.error('Kafka Producer Error:', error));
}
exports.disconnectProducer = disconnectProducer;
