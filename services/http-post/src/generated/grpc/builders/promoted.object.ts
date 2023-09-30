import {StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {PromotedObject} from "../typescript/threads_pb";

export default class PromotedObjectBuilder {
   private readonly message: PromotedObject;

   constructor() {
      this.message = new PromotedObject();
   }

   withDate(date: Date): this {
      this.message.setDate(new StringValue().setValue(date.toISOString()));
      return this;
   }

   withAmount(amount: number): this {
      this.message.setAmount(new UInt64Value().setValue(amount));
      return this;
   }

   withPromoter(promoter: string): this {
      this.message.setPromoter(new StringValue().setValue(promoter));
      return this;
   }

   build(): PromotedObject {
      return this.message;
   }
}
