import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {DonationsStats} from "../types/threads_pb";

export default class DonationsStatsBuilder {
   private readonly message: DonationsStats;

   constructor() {
      this.message = new DonationsStats();
   }

   withCount(count: number): this {
      this.message.setCount(new UInt64Value().setValue(count));
      return this;
   }

   withAmount(amount: number): this {
      this.message.setAmount(new UInt64Value().setValue(amount));
      return this;
   }

   build(): DonationsStats {
      return this.message;
   }
}