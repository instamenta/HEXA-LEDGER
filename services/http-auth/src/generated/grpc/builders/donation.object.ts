import {StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {DonationObject} from "../typescript/threads_pb";

export default class DonationObjectBuilder {
   private readonly message: DonationObject;

   constructor() {
      this.message = new DonationObject();
   }

   withDate(date: Date): this {
      this.message.setDate(new StringValue().setValue(date.toISOString()));
      return this;
   }

   withAmount(amount: number): this {
      this.message.setAmount(new UInt64Value().setValue(amount));
      return this;
   }

   withDonator(donator: string): this {
      this.message.setDonator(new StringValue().setValue(donator));
      return this;
   }

   build(): DonationObject {
      return this.message;
   }
}
