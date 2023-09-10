"use strict";
/** @file Controller used for handling auth related requests. */
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    vlog;
    client;
    constructor(vloggger, client) {
        this.vlog = vloggger.getVlog(this.constructor.name);
        this.client = client;
    }
    static getInstance(vloggger, client) {
        return new AuthController(vloggger, client);
    }
    async authenticate(req, res) {
        // const { username, picture, address } = ;
        console.log("Received data:", req.body);
        res.sendStatus(200);
    }
    async update(req, res) {
        // const { username, picture, address } = ;
        console.log("Received data:", req.body);
        res.sendStatus(200);
    }
}
exports.default = AuthController;
