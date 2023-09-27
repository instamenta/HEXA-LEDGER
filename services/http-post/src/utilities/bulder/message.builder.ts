import GRPC_I from '../../generated/grpc/types/threads_pb';
import {
   BoolValue, StringValue, UInt64Value
} from "google-protobuf/google/protobuf/wrappers_pb";

const proto = require('../../generated/grpc/javascript/threads_pb.js')

export function build_Pagination(page: number, limit: number): GRPC_I.Pagination {
   return new proto.Pagination()
      .setLimit(new UInt64Value().setValue(limit))
      .setPage(new UInt64Value().setValue(page))
}

type I_build_ThreadModel = {
   id: string | null,
   name: string | null,
   description: string | null,
   content: string | null,
   images: string[] | null,
   created_at: Date | null,
   updated_at: Date | null,
   owner: string | null,
   deleted: boolean | null,
   promoted: string[] | null,
   donations: string[] | null,
   likes: string[] | null,
   dislikes: string[] | null,
   tags: string[] | null,
   likes_count: number | null,
   dislikes_count: number | null,
}

export function build_ThreadModel(
   {
      id = null, name = null,
      description = null, content = null,
      images = null,
      created_at = null, updated_at = null,
      owner = null,
      deleted = null,
      tags = null,
      promoted = null, donations = null,
      likes = null, dislikes = null,
      likes_count = null, dislikes_count = null,
   }: I_build_ThreadModel
): GRPC_I.ThreadModel {
   const m = new proto.ThreadModel();
   if (id) m.setId(new StringValue().setValue(id));
   if (name) m.setName(new StringValue().setValue(name));
   if (description) m.setDescription(new StringValue().setValue(description));
   if (content) m.setContent(new StringValue().setValue(content));
   if (images) m.setImagesList(images.map(i => new StringValue().setValue(i)));
   if (created_at) m.setCreatedAt(new StringValue().setValue(created_at.toISOString()));
   if (updated_at) m.setUpdatedAt(new StringValue().setValue(updated_at.toISOString()));
   if (owner) m.setOwner(new StringValue().setValue(owner));
   if (deleted) m.setDeleted(new BoolValue().setValue(deleted));
   if (promoted) m.setPromotedList(promoted.map(p => new StringValue().setValue(p)));
   if (donations) m.setDonationsList(donations.map(d => new StringValue().setValue(d)));
   if (likes) m.setTagsList(likes.map(l => new StringValue().setValue(l)));
   if (dislikes) m.setLikesList(dislikes.map(d => new StringValue().setValue(d)));
   if (tags) m.setDislikesList(tags.map(t => new StringValue().setValue(t)));
   if (likes_count) m.setLikesCount(new UInt64Value().setValue(likes_count));
   if (dislikes_count) m.setDislikesCount(new UInt64Value().setValue(dislikes_count));
   return m;
}

export function build_PromotedObject({date, amount: promoter}: {date: Date, amount: number, promoter: string}) {
   return new proto.PromotedObject()
      .setDate(new StringValue().setValue(date))
      .setAmount(new UInt64Value().setValue(amount))
      .setPromoter(new StringValue().setValue(promoter));
}
export function build_DonationObject({date, amount: donator}: {date: Date, amount: number, donator: string}) {
   return new proto.DonationObject()
      .setDate(new StringValue().setValue(date))
      .setAmount(new UInt64Value().setValue(amount))
      .setDonator(new StringValue().setValue(donator));
}
