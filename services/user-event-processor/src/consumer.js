'use strict';

const {Kafka} = require('kafkajs')
    , {v4} = require('uuid')
    , BROKER_URL = process.env.BROKER_URL || 'redpanda-0'
    , BROKER_PORT = process.env.BROKER_PORT || 9092
    , REDPANDA = new Kafka({brokers: [`redpanda-0:9092`]})
    , CONSUMER = REDPANDA.consumer({groupId: v4()})
    // , CLIENT = require('./grpc-client')
    // , { loginUser, registerUser} = require('./grpc-client')
;


/**
 * @returns {Promise<void>}
 */
async function connectConsumer() {
    try {
        await CONSUMER.connect();
        await CONSUMER.subscribe({topic: 'logger_topic'});
        await CONSUMER.run({
            eachMessage: async ({topic, partition, message}) => {
                const event = message.headers?.event.toString()
                const messageValue = JSON.parse(
                    (message.value).toString()
                );
                console.log(event)
                console.log(messageValue);
            }
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

/**
 * @returns {Promise<void>}
 */
async function disconnectConsumer() {
    try {
        await CONSUMER.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {connectConsumer, disconnectConsumer};