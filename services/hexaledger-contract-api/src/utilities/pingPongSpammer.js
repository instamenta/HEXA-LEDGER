import {ThreadsClient} from "../generated/grpc/typescript/threads_grpc_pb";
import PingPongBuilder from "../generated/grpc/builders/pingpong";
import {credentials} from "@grpc/grpc-js";
import {PingPongExtractor} from "../generated/grpc/extacters/extractor";
import * as zod from "../generated/grpc/validation/grpc.messages";

const client = new ThreadsClient(`localhost:${'50054'}`, credentials.createInsecure());

//* Start sending ping-pong requests
(function ping_pong_spammer() {
    const min = 3  /* <-- SECONDS */ * 1000
        , max = 9 /* <-- SECONDS */ * 1000;
    play_ping_pong();
    setTimeout(ping_pong_spammer, Math.random() * (max - min) + min);
})();

//* Ping Pong Message Builder and Extractor
function play_ping_pong() {
    client.pingPong(new PingPongBuilder().withName('ThreadsClient').build(), (error, response) => {
        if (error) console.log(error)
        else {
            const _request = new PingPongExtractor(response).extract()
                , {name, timestamp} = zod.PingPongMessage.parse(_request)
                , start = new Date(timestamp).getTime()
                , diffMs = Date.now() - start
                , sec = Math.floor(diffMs / 1000)
                , ms = (diffMs % 1000) / 1000;
            console.log({
                data: `[ Ping from "${name}" to "${'ThreadsClient'}" ]`,
                time: `[ Time taken: ${sec + ms.toFixed(5)} seconds ]`,
            });
        }
    });
}