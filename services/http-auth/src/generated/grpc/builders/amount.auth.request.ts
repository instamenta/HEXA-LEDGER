import {AmountWithAuthRequest} from "../typescript/threads_pb";
import {StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";

export default class AmountWithAuthRequestBuilder {
   private readonly message: AmountWithAuthRequest;

   constructor() {
      this.message = new AmountWithAuthRequest();
   }

   withAuth(auth: string): this {
      this.message.setAuth(new StringValue().setValue(auth));
      return this;
   }

   withAmount(amount: number): this {
      this.message.setAmount(new UInt64Value().setValue(amount));
      return this;
   }

   withThreadId(threadId: string): this {
      this.message.setThreadId(new StringValue().setValue(threadId));
      return this;
   }

   build(): AmountWithAuthRequest {
      return this.message;
   }
}
