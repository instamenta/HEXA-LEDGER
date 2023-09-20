import {WithId} from 'mongodb';
import * as I from '../types/types';
import BaseThreadModel from './base.thread.model';

export default class ThreadModel extends BaseThreadModel {

   constructor(props: WithId<I.IThreadSchema>) {
      super(props);
   }

   get id(): string {
      return this._id.toString();
   }

   get name(): string {
      return this.n.toString();
   }

   get description(): string {
      return this.des.toString();
   }

   get content(): string {
      return this.c.toString();
   }

   get images(): string[] {
      return this.i.map(img => img.toString());
   }

   get created_at(): Date {
      return new Date(this.ca * 1000);
   }

   get updated_at(): Date {
      return new Date(this.up * 1000);
   }

   get owner(): string {
      return this.o.toString('hex');
   }

   get deleted(): boolean {
      return this.del;
   }

   get promoted(): I.OPromotedObject[] {
      return this.p.map(({promoter, date, amount}) => {
         return {
            promoter: promoter.toString('hex'),
            date: new Date(date * 1000),
            amount
         };
      });
   }

   get donations(): I.ODonationObject[] {
      return this.do.map(({donator, amount, date}) => {
         return {
            donator: donator.toString('hex'),
            date: new Date(date * 1000),
            amount,
         };
      });
   }

   get likes(): string[] {
      return this.li.map(like => like.toString('hex'));
   }

   get dislikes(): string[] {
      return this.di.map(dislike => dislike.toString('hex'));
   }

   get tags(): string[] {
      return this.t.map(tag => tag.toString());
   }

   get(): I.OThreadsModel {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         content: this.content,
         images: this.images,
         created_at: this.created_at,
         updated_at: this.updated_at,
         owner: this.owner,
         deleted: this.deleted,
         promoted: this.promoted,
         donations: this.donations,
         likes: this.likes,
         dislikes: this.dislikes,
         tags: this.tags,
      };
   }
}