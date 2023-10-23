import { ThreadModel } from "../typescript/threads_pb";
import PromotedObjectBuilder from './promoted.object';
import DonationObjectBuilder from './donation.object';
export default class ThreadModelBuilder {
    private readonly message;
    constructor();
    build(): ThreadModel;
    withId(id: string): this;
    withName(name: string): this;
    withDescription(description: string): this;
    withContent(content: string): this;
    withImages(images: string[]): this;
    withCreatedAt(createdAt: Date): this;
    withUpdatedAt(updatedAt: Date): this;
    withOwner(owner: string): this;
    withDeleted(deleted: boolean): this;
    withPromoted(promoted: PromotedObjectBuilder[]): this;
    withDonations(donations: DonationObjectBuilder[]): this;
    withLikes(likes: string[]): this;
    withDislikes(dislikes: string[]): this;
    withTags(tags: string[]): this;
    withLikesCount(likesCount: number): this;
    withDislikesCount(dislikesCount: number): this;
}
