import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";
import {IdRequest} from "../types/threads_pb";

export default class IdRequestBuilder {
   private readonly message: IdRequest;

   constructor() {
      this.message = new IdRequest();
   }

   withId(id: string): this {
      this.message.setId(new StringValue().setValue(id));
      return this;
   }

   build(): IdRequest {
      return this.message;
   }
}