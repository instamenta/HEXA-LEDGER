import {ThreadsClient} from "../generated/grpc/typescript/threads_grpc_pb";
import PingPongBuilder from "../generated/grpc/builders/pingpong";
import {credentials} from "@grpc/grpc-js";
import {PingPongExtractor} from "../generated/grpc/extacters/extractor";
import * as zod from "../generated/grpc/validation/grpc.messages";

const client = new ThreadsClient(
  `localhost:${'50054'}`,
  credentials.createInsecure()
);


const send_message = () => {
  const request = new PingPongBuilder().withName('ThreadsClient').build();

  client.pingPong(request, (error, response) => {
    if (error) {
      console.log(error)
    } else {
      const _request = new PingPongExtractor(response).extract();
      const {name, timestamp} = zod.PingPongMessage.parse(_request);

      const start = new Date(timestamp).getTime();
      const diffMs = Date.now() - start;
      const sec = Math.floor(diffMs / 1000);
      const ms = (diffMs % 1000) / 1000;
      console.log({
        data: `[ Ping from "${name}" to "${'ThreadsClient'}" ]`,
        time: `[ Time taken: ${sec + ms.toFixed(5)} seconds ]`,
      });
    }
  });
};

const ping_pong_spammer = () => {
  const min = 3  /* <-- SECONDS */ * 1000;
  const max = 9 /* <-- SECONDS*/ * 1000;
  send_message();
  setTimeout(ping_pong_spammer, Math.random() * (max - min) + min);
};

//! Start sending ping-pong requests
ping_pong_spammer();
