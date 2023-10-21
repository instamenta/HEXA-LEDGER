import {StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {PingPongMessage} from "../typescript/threads_pb";

export default class PingPongBuilder {
   private readonly message: PingPongMessage;

   constructor() {
      this.message = new PingPongMessage();
   }

   withName(name: string): this {
      this.message.setName(new StringValue().setValue(name));
      return this;
   }

   #withTimestamp(): this {
      this.message.setTimestamp(new UInt64Value().setValue(new Date().getTime()));
      return this;
   }

   build(): PingPongMessage {
      this.#withTimestamp();
      return this.message;
   }
}