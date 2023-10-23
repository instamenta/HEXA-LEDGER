"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const threads_grpc_pb_1 = require("../generated/grpc/typescript/threads_grpc_pb");
const pingpong_1 = __importDefault(require("../generated/grpc/builders/pingpong"));
const grpc_js_1 = require("@grpc/grpc-js");
const extractor_1 = require("../generated/grpc/extacters/extractor");
const zod = __importStar(require("../generated/grpc/validation/grpc.messages"));
const client = new threads_grpc_pb_1.ThreadsClient(`localhost:${'50054'}`, grpc_js_1.credentials.createInsecure());
//* Start sending ping-pong requests
(function ping_pong_spammer() {
    const min = 3 /* <-- SECONDS */ * 1000, max = 9 /* <-- SECONDS*/ * 1000;
    play_ping_pong();
    setTimeout(ping_pong_spammer, Math.random() * (max - min) + min);
})();
//* Ping Pong Message Builder and Extractor
function play_ping_pong() {
    client.pingPong(new pingpong_1.default().withName('ThreadsClient').build(), (error, response) => {
        if (error)
            console.log(error);
        else {
            const _request = new extractor_1.PingPongExtractor(response).extract(), { name, timestamp } = zod.PingPongMessage.parse(_request), start = new Date(timestamp).getTime(), diffMs = Date.now() - start, sec = Math.floor(diffMs / 1000), ms = (diffMs % 1000) / 1000;
            console.log({
                data: `[ Ping from "${name}" to "${'ThreadsClient'}" ]`,
                time: `[ Time taken: ${sec + ms.toFixed(5)} seconds ]`,
            });
        }
    });
}
