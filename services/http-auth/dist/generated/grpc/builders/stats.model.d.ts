import { StatsModel } from "../typescript/threads_pb";
import PromotedStatsBuilder from "./promoted.stats";
import DonationsStatsBuilder from "./donation.stats";
export default class StatsModelBuilder {
    private readonly message;
    constructor();
    withId(id: string): this;
    withName(name: string): this;
    withPromoted(promoted: PromotedStatsBuilder): this;
    withDonations(donations: DonationsStatsBuilder): this;
    withLikesCount(likesCount: number): this;
    withDislikesCount(dislikesCount: number): this;
    build(): StatsModel;
}
