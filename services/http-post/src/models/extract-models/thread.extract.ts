import GRPC_I from "../../generated/grpc/types/threads_pb";
import * as I from "../../types/types";
import * as GI from "../../types/grpc.types";
import {EO_build_ThreadModel} from "../../types/grpc.types";

const proto = require('../../generated/grpc/javascript/threads_pb');

export default class ThreadExtract {
   private readonly id: string | null;
   private readonly name: string | null;
   private readonly description: string | null;
   private readonly content: string | null;
   private readonly created_at: Date | null;
   private readonly updated_at: Date | null;
   private readonly owner: string | null;
   private readonly deleted: boolean | null;
   private readonly likes_count: number | null;
   private readonly dislikes_count: number | null;
   private readonly images: string[];
   private readonly promoted: GI.EOPromotedObject[];
   private readonly donations: GI.EODonationObject[];
   private readonly likes: string[];
   private readonly dislikes: string[];
   private readonly tags: string[];

   constructor(m: GRPC_I.ThreadModel) {
      this.id = m.hasId() ? m.getId()!.getValue() : null
      this.name = m.hasName() ? m.getName()!.getValue() : null
      this.description = m.hasDescription() ? m.getDescription()!.getValue() : null
      this.content = m.hasContent() ? m.getContent()!.getValue() : null
      this.created_at = m.hasCreatedAt() ? new Date(m.getCreatedAt()!.getValue()) : null
      this.updated_at = m.hasUpdatedAt() ? new Date(m.getUpdatedAt()!.getValue()) : null
      this.owner = m.hasOwner() ? m.getOwner()!.getValue() : null
      this.deleted = m.hasDeleted() ? m.getDeleted()!.getValue() : null
      this.likes_count = m.hasLikesCount() ? m.getLikesCount()!.getValue() : null
      this.dislikes_count = m.hasDislikesCount() ? m.getDislikesCount()!.getValue() : null
      this.images = m.getImagesList().map(i => i.getValue())
      this.promoted = m.getPromotedList().map(p => this.#extract_PromotedObject(p))
      this.donations = m.getDonationsList().map(d => this.#extract_DonationObject(d))
      this.likes = m.getLikesList().map(l => l.getValue())
      this.dislikes = m.getDislikesList().map(di => di.getValue())
      this.tags = m.getTagsList().map(t => t.getValue())
   }


   #extract_PromotedObject(data: GRPC_I.PromotedObject): GI.EOPromotedObject {
      return {
         date: data.hasDate() ? new Date(data.getDate()!.getValue()) : null,
         amount: data.hasAmount() ? data.getAmount()!.getValue() : null,
         promoter: data.hasPromoter() ? data.getPromoter()!.getValue() : null,
      };
   }

   #extract_DonationObject(data: GRPC_I.DonationObject): GI.EODonationObject {
      return {
         date: data.hasDate() ? new Date(data.getDate()!.getValue()) : null,
         amount: data.hasAmount() ? data.getAmount()!.getValue() : null,
         donator: data.hasDonator() ? data.getDonator()!.getValue() : null,
      };
   }


   public get(): EO_build_ThreadModel {
      return {
         id: this.id ?? null,
         name: this.name ?? null,
         description: this.description ?? null,
         content: this.content ?? null,
         created_at: this.created_at ?? null,
         updated_at: this.updated_at ?? null,
         owner: this.owner ?? null,
         deleted: this.deleted ?? null,
         likes_count: this.likes_count ?? null,
         dislikes_count: this.dislikes_count ?? null,
         images: this.images,
         promoted: this.promoted ?? null,
         donations: this.donations ?? null,
         likes: this.likes ?? null,
         dislikes: this.dislikes ?? null,
         tags: this.tags ?? null,
      };
   }

}