import {ObjectId, WithId} from 'mongodb';
import * as I from '../../types/types';

export default class BaseThread {
   _id: ObjectId; // id
   n: Buffer; // name
   des: Buffer; // description
   c: Buffer; // content
   i: Buffer[]; // images
   ca: number; // created_at
   up: number; // updated_at
   o: Buffer; // owner
   del: boolean; // deleted
   p: I.IPromotedObject[]; // promoted
   do: I.IDonationObject[]; // donations
   li: Buffer[]; // likes
   di: Buffer[]; // dislikes
   t: Buffer[]; // tags

   constructor(props: WithId<I.IThreadSchema>) {
      this._id = props._id;
      this.n = props.n;
      this.des = props.des;
      this.c = props.c;
      this.i = props.i;
      this.ca = props.ca;
      this.up = props.up;
      this.o = props.o;
      this.del = props.del;
      this.p = props.p;
      this.do = props.do;
      this.li = props.li;
      this.di = props.di;
      this.t = props.t;
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

   get likes_count(): number {
      return this.likes.length;
   }

   get dislikes_count(): number {
      return this.dislikes.length;
   }

   get tags_count(): number {
      return this.tags.length;
   }
}