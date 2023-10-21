import {WalletWithAuthRequest} from "../typescript/threads_pb";
import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";

export default class WalletWithAuthRequestBuilder {
   private readonly message: WalletWithAuthRequest;

   constructor() {
      this.message = new WalletWithAuthRequest();
   }

   withWallet(wallet: string): this {
      this.message.setWallet(new StringValue().setValue(wallet));
      return this;
   }

   withId(id: string): this {
      this.message.setId(new StringValue().setValue(id));
      return this;
   }

   build(): WalletWithAuthRequest {
      return this.message;
   }
}