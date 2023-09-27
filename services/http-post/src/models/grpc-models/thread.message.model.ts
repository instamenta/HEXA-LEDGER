import GRPC_I from "../../generated/grpc/types/threads_pb";
import * as I from "../../types/types";
import { IP_build_DonationObject, IP_build_PromotedObject} from "../../types/grpc.types";
import {WithId} from "mongodb";
import {BoolValue, StringValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import BaseThread from "../base/base.thread";

const proto = require('../../generated/grpc/javascript/threads_pb');

export default class ThreadMessageModel extends BaseThread {

   constructor(props: WithId<I.IThreadSchema>) {
      super(props);
   }

   #build_PromotedObject(
      {date, amount, promoter}: IP_build_PromotedObject
   ): GRPC_I.PromotedObject {
      return new proto.PromotedObject()
         .setDate(new StringValue().setValue(date.toISOString()))
         .setAmount(new UInt64Value().setValue(amount))
         .setPromoter(new StringValue().setValue(promoter));
   }

   #build_DonationObject(
      {date, amount, donator}: IP_build_DonationObject
   ): GRPC_I.DonationObject {
      return new proto.DonationObject()
         .setDate(new StringValue().setValue(date.toISOString()))
         .setAmount(new UInt64Value().setValue(amount))
         .setDonator(new StringValue().setValue(donator));
   }

   #get_ProtoMessage(): GRPC_I.ThreadModel {
      return new proto.ThreadModel();
   }

   public build_GRPC(): GRPC_I.ThreadModel {
      const m = this.#get_ProtoMessage();
      if (this.id) m.setId(new StringValue().setValue(this.id));
      if (this.name) m.setName(new StringValue().setValue(this.name));
      if (this.description) m.setDescription(new StringValue().setValue(this.description));
      if (this.content) m.setContent(new StringValue().setValue(this.content));
      if (this.created_at) m.setCreatedAt(new StringValue().setValue(this.created_at.toISOString()));
      if (this.updated_at) m.setUpdatedAt(new StringValue().setValue(this.updated_at.toISOString()));
      if (this.owner) m.setOwner(new StringValue().setValue(this.owner));
      if (this.deleted) m.setDeleted(new BoolValue().setValue(this.deleted));
      if (this.likes_count) m.setLikesCount(new UInt64Value().setValue(this.likes_count));
      if (this.dislikes_count) m.setDislikesCount(new UInt64Value().setValue(this.dislikes_count));

      if (this.images) m.setImagesList(this.images.map(i => new StringValue().setValue(i)));
      if (this.promoted) m.setPromotedList(this.promoted.map(p => this.#build_PromotedObject(p)));
      if (this.donations) m.setDonationsList(this.donations.map(d => this.#build_DonationObject(d)));
      if (this.likes) m.setTagsList(this.likes.map(l => new StringValue().setValue(l)));
      if (this.dislikes) m.setLikesList(this.dislikes.map(d => new StringValue().setValue(d)));
      if (this.tags) m.setDislikesList(this.tags.map(t => new StringValue().setValue(t)));
      return m;
   }

}