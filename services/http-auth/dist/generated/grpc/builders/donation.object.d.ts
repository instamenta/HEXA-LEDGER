import { DonationObject } from "../typescript/threads_pb";
export default class DonationObjectBuilder {
    private readonly message;
    constructor();
    withDate(date: Date): this;
    withAmount(amount: number): this;
    withDonator(donator: string): this;
    build(): DonationObject;
}
