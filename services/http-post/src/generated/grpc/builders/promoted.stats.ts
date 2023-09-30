import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {PromotedStats} from "../typescript/threads_pb";

export default class PromotedStatsBuilder {
   private readonly message: PromotedStats;

   constructor() {
      this.message = new PromotedStats();
   }

   withCount(count: number): this {
      this.message.setCount(new UInt64Value().setValue(count));
      return this;
   }

   withAmount(amount: number): this {
      this.message.setAmount(new UInt64Value().setValue(amount));
      return this;
   }

   build(): PromotedStats {
      return this.message;
   }
}