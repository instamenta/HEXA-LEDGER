import {ThreadModel} from "../types/threads_pb";
import {BoolValue, StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import PromotedObjectBuilder from './promoted.object'
import DonationObjectBuilder from './donation.object'

export default class ThreadModelBuilder {
   private readonly message: ThreadModel;

   constructor() {
      this.message = new ThreadModel();
   }

   build(): ThreadModel {
      return this.message;
   }

   withId(id: string): this {
      this.message.setId(new StringValue().setValue(id));
      return this;
   }

   withName(name: string): this {
      this.message.setName(new StringValue().setValue(name));
      return this;
   }

   withDescription(description: string): this {
      this.message.setDescription(new StringValue().setValue(description));
      return this;
   }

   withContent(content: string): this {
      this.message.setContent(new StringValue().setValue(content));
      return this;
   }

   withImages(images: string[]): this {
      this.message.setImagesList(images.map((image) => new StringValue().setValue(image)));
      return this;
   }

   withCreatedAt(createdAt: Date): this {
      this.message.setCreatedAt(new StringValue().setValue(createdAt.toISOString()));
      return this;
   }

   withUpdatedAt(updatedAt: Date): this {
      this.message.setUpdatedAt(new StringValue().setValue(updatedAt.toISOString()));
      return this;
   }

   withOwner(owner: string): this {
      this.message.setOwner(new StringValue().setValue(owner));
      return this;
   }

   withDeleted(deleted: boolean): this {
      this.message.setDeleted(new BoolValue().setValue(deleted));
      return this;
   }

   withPromoted(promoted: PromotedObjectBuilder[]): this {
      this.message.setPromotedList(promoted.map((p) => p.build()));
      return this;
   }

   withDonations(donations: DonationObjectBuilder[]): this {
      this.message.setDonationsList(donations.map((d) => d.build()));
      return this;
   }

   withLikes(likes: string[]): this {
      this.message.setLikesList(likes.map((like) => new StringValue().setValue(like)));
      return this;
   }

   withDislikes(dislikes: string[]): this {
      this.message.setDislikesList(dislikes.map((dislike) => new StringValue().setValue(dislike)));
      return this;
   }

   withTags(tags: string[]): this {
      this.message.setTagsList(tags.map((tag) => new StringValue().setValue(tag)));
      return this;
   }

   withLikesCount(likesCount: number): this {
      this.message.setLikesCount(new UInt64Value().setValue(likesCount));
      return this;
   }

   withDislikesCount(dislikesCount: number): this {
      this.message.setDislikesCount(new UInt64Value().setValue(dislikesCount));
      return this;
   }
}
