"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLogMessage = exports.disconnectProducer = exports.connectProducer = void 0;
const kafkajs_1 = require("kafkajs");
const logger_1 = __importDefault(require("./utility/logger"));
const BROKER_URL = process.env.BROKER_URL || 'redpanda-0', BROKER_PORT = process.env.BROKER_PORT || '9092', SnappyCodec = require('kafkajs-snappy'), Redpanda = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] }), Producer = Redpanda.producer();
kafkajs_1.CompressionCodecs[kafkajs_1.CompressionTypes.Snappy] = SnappyCodec;
/**
 * Connects kafka producer
 */
async function connectProducer() {
    try {
        await Producer.connect();
        logger_1.default['kafka_start_log'](BROKER_URL, BROKER_PORT);
    }
    catch (error) {
        logger_1.default['kafka_error_log'](BROKER_URL, BROKER_PORT, error);
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
        messages: [{
                headers: { event: event },
                value: JSON.stringify({ message }),
            }]
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
