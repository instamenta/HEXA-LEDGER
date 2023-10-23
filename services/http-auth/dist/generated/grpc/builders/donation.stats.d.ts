import { DonationsStats } from "../typescript/threads_pb";
export default class DonationsStatsBuilder {
    private readonly message;
    constructor();
    withCount(count: number): this;
    withAmount(amount: number): this;
    build(): DonationsStats;
}
