import BaseUser from "../base/base.user";
import PromotedObjectBuilder from "../../generated/grpc/builders/promoted.object";
import DonationObjectBuilder from "../../generated/grpc/builders/donation.object";
import ThreadModelBuilder from "../../generated/grpc/builders/thread.model";
import {ThreadModel} from "../../generated/grpc/typescript/threads_pb";
import {IThreadSchema} from "../../types/types";
import {IP_build_DonationObject, IP_build_PromotedObject} from "../../types/grpc.types";
import {WithId} from "mongodb";


export default class ThreadBuilder extends BaseUser {

   constructor(props: WithId<IThreadSchema>) {
      super(props);
   }

   #build_PromotedObject({date, amount, promoter}: IP_build_PromotedObject
   ): PromotedObjectBuilder {
      return new PromotedObjectBuilder()
         .withDate(date)
         .withAmount(amount)
         .withPromoter(promoter)
   }

   #build_DonationObject({date, amount, donator}: IP_build_DonationObject
   ): DonationObjectBuilder {
      return new DonationObjectBuilder()
         .withDate(date)
         .withAmount(amount)
         .withDonator(donator)
   }

   #get_ProtoMessage(): ThreadModelBuilder {
      return new ThreadModelBuilder();
   }

   public build_GRPC(): ThreadModel {
      const m = this.#get_ProtoMessage();
      if (this.id) m.withId(this.id);
      if (this.name) m.withName(this.name);
      if (this.description) m.withDescription(this.description);
      if (this.content) m.withContent(this.content);
      if (this.created_at) m.withCreatedAt(this.created_at);
      if (this.updated_at) m.withUpdatedAt(this.updated_at);
      if (this.owner) m.withOwner(this.owner);
      if (this.deleted) m.withDeleted(this.deleted);
      if (this.likes_count) m.withLikesCount(this.likes_count);
      if (this.dislikes_count) m.withDislikesCount(this.dislikes_count);
      if (this.images) m.withImages(this.images);
      if (this.promoted) m.withPromoted(this.promoted.map(p => this.#build_PromotedObject(p)));
      if (this.donations) m.withDonations(this.donations.map(d => this.#build_DonationObject(d)));
      if (this.likes) m.withTags(this.likes);
      if (this.dislikes) m.withLikes(this.dislikes);
      if (this.tags) m.withDislikes(this.tags);
      return m.build();
   }

}