'use strict';

const {Kafka} = require('kafkajs')
    , REDPANDA = new Kafka({brokers: ['redpanda-0:9092']})
    , PRODUCER = REDPANDA.producer()
;

/**
 *
 */
async function CONNECT_PRODUCER() {
    try {
        await PRODUCER.connect();
        return async (message) => {
            await PRODUCER.send({
                topic: 'user_events_topic',
                messages: [{value: JSON.stringify({message})}],
            });
            console.log('?')
        };
    } catch (error) {
        console.error('Error:', error);
    }
}

/**
 *
 */
async function DISCONNECT_PRODUCER() {
    try {
        await PRODUCER.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
}


module.exports = {CONNECT_PRODUCER, DISCONNECT_PRODUCER};