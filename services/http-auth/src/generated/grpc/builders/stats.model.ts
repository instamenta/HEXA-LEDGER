import {StatsModel} from "../typescript/threads_pb";
import {Int64Value, StringValue} from "google-protobuf/google/protobuf/wrappers_pb";
import PromotedStatsBuilder from "./promoted.stats";
import DonationsStatsBuilder from "./donation.stats";

export default class StatsModelBuilder {
   private readonly message: StatsModel;

   constructor() {
      this.message = new StatsModel();
   }

   withId(id: string): this {
      this.message.setId(new StringValue().setValue(id));
      return this;
   }

   withName(name: string): this {
      this.message.setName(new StringValue().setValue(name));
      return this;
   }

   withPromoted(promoted: PromotedStatsBuilder): this {
      this.message.setPromoted(promoted.build());
      return this;
   }

   withDonations(donations: DonationsStatsBuilder): this {
      this.message.setDonations(donations.build());
      return this;
   }

   withLikesCount(likesCount: number): this {
      this.message.setLikesCount(new Int64Value().setValue(likesCount));
      return this;
   }

   withDislikesCount(dislikesCount: number): this {
      this.message.setDislikesCount(new Int64Value().setValue(dislikesCount));
      return this;
   }

   build():StatsModel {
      return this.message;
   }
}