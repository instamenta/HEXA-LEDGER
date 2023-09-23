import {WithId} from 'mongodb';
import * as I from '../types/types';
import BaseThreadModel from './base.thread.model';
import {SOThreadsModel} from '../types/types';

export default class ThreadModel extends BaseThreadModel {

   constructor(props: WithId<I.IThreadSchema>) {
      super(props);
   }

   get id(): string {
      return this._id?.toString();
   }

   get name(): string {
      return this.n?.toString();
   }

   get description(): string {
      return this.des?.toString();
   }

   get content(): string {
      return this.c?.toString();
   }

   get images(): string[] {
      return this.i ? this.i.map(img => img.toString()) : [];
   }

   get created_at(): Date {
      return new Date(this.ca * 1000);
   }

   get updated_at(): Date {
      return new Date(this.up * 1000);
   }

   get owner(): string {
      return '0x' + this.o?.toString('hex');
   }

   get deleted(): boolean {
      return this.del;
   }

   get promoted(): I.OPromotedObject[] {
      return this.p ? this.p.map(({promoter, date, amount}) => {
         return {
            promoter: '0x' + promoter.toString('hex'),
            date: new Date(date * 1000),
            amount
         };
      }) : [];
   }

   get donations(): I.ODonationObject[] {
      return this.do ? this.do.map(({donator, amount, date}) => {
         return {
            donator: '0x' + donator.toString('hex'),
            date: new Date(date * 1000),
            amount,
         };
      }) : [];
   }

   get likes(): string[] {
      return this.li ? this.li.map(like => '0x' + like.toString('hex')) : [];
   }

   get dislikes(): string[] {
      return this.di ? this.di.map(dislike => '0x' + dislike.toString('hex')) : [];
   }

   get tags(): string[] {
      return this.t ? this.t.map(tag => tag.toString()) : [];
   }

   public get(): Omit<I.OThreadsModel, 'deleted'> {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         content: this.content,
         images: this.images,
         created_at: this.created_at,
         updated_at: this.updated_at,
         owner: this.owner,
         promoted: this.promoted,
         donations: this.donations,
         likes: this.likes,
         dislikes: this.dislikes,
         tags: this.tags,
      };
   }

   public getStatic(): SOThreadsModel {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         content: this.content,
         owner: this.owner,
         image: this.images[0],
         created_at: this.created_at.toISOString(),
         updated_at: this.updated_at.toISOString(),
         likes_count: this.likes.length,
         dislikes_count: this.dislikes.length,
      };
   }

   public getProjected(): I.PThreadsModel {
      const model = {} as I.PThreadsModel;
      if (this.id) model.id = this.id;
      if (this.name) model.name = this.name;
      if (this.description) model.description = this.description;
      if (this.content) model.content = this.content;
      if (this.images) model.images = this.images;
      if (this.created_at) model.created_at = this.created_at.toISOString();
      if (this.updated_at) model.updated_at = this.updated_at.toISOString();
      if (this.owner) model.owner = this.owner;
      this.likes ? model.likes = this.likes : [];
      this.dislikes ? model.dislikes = this.dislikes : [];
      this.tags ? model.tags = this.tags : [];
      if (this.promoted) model.promoted = this.promoted.map(p => {
         return {promoter: p.promoter, date: p.date.toISOString(), amount: p.amount}
      });
      if (this.donations) model.donations = this.donations.map(d => {
         return {donator: d.donator, date: d.date.toISOString(), amount: d.amount}
      });
      return model;
   }

}