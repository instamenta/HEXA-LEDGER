const USER_MODEL = require('../model/user-model')
    , BCRYPT = require('bcrypt')
    , {GENERATE_TOKEN} = require('../utilities/token-tools')
    , {Request, Response} = require('express')
;
const {CONNECT_PRODUCER} = require('../producer');

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function register(request, response) {
    try {
        const {username, email, password} = request.body;

        const SEND_MESSAGE = await CONNECT_PRODUCER();
        await SEND_MESSAGE({username, email, password});

        const USER = await USER_MODEL.create({
            username,
            email,
            password,
        });
        if (USER) {
            response.status(200).json({
                _id: USER._id,
                username: USER.username,
                email: USER.email,
                token: await GENERATE_TOKEN(USER),
            }).end();
        } else {
            response.status(400).end(JSON.stringify({
                message: 'Invalid credentials'
            }));
        }
    } catch (error) {
        response.status(400).end(JSON.stringify({
            message: 'Invalid credentials',
            err: error?.message
        }));
    }
}

/**
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function login(request, response) {

    const {username, password} = request.body;

    const SEND_MESSAGE = await CONNECT_PRODUCER();
    await SEND_MESSAGE({username, password});

    const USER = await USER_MODEL.findOne({username});

    if (!USER || !password || !username) {
        return response.status(400).end(JSON.stringify({
            message: 'Invalid username or password'
        }));
    }

    if (await BCRYPT.compare(password, USER.password)) {
        const TOKEN = await GENERATE_TOKEN(USER);
        response.cookie('accessToken', TOKEN, {httpOnly: true});

        response.status(200).json({
            _id: USER._id,
            username: USER.username,
            email: USER.email,
            token: TOKEN,
        }).end();
    } else {
        response.status(400).end(JSON.stringify({
            message: 'Invalid username or password'
        }));
    }
}

module.exports = {login, register};
