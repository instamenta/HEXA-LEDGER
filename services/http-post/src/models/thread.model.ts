import {WithId} from 'mongodb';
import * as I from '../types/types';
import BaseThread from './base/base.thread';
import {SOThreadsModel} from '../types/types';

export default class ThreadModel extends BaseThread {

   constructor(props: WithId<I.IThreadSchema>) {
      super(props);
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
         likes_count: this.likes_count,
         dislikes_count: this.dislikes_count,
      };
   }

   public getProjected(): I.PThreadsModel {
      const m_ = {} as I.PThreadsModel;
      if (this.id) m_.id = this.id;
      if (this.name) m_.name = this.name;
      if (this.description) m_.description = this.description;
      if (this.content) m_.content = this.content;
      if (this.images) m_.images = this.images;
      if (this.created_at) m_.created_at = this.created_at.toISOString();
      if (this.updated_at) m_.updated_at = this.updated_at.toISOString();
      if (this.owner) m_.owner = this.owner;
      if (this.likes_count) m_.likes = this.likes;
      if (this.dislikes_count) m_.dislikes = this.dislikes;
      if (this.tags_count) m_.tags = this.tags;
      if (this.promoted) m_.promoted = this.promoted.map(({promoter, date, amount}) => {
         return {promoter, date: date.toISOString(), amount};
      });
      if (this.donations) m_.donations = this.donations.map(({donator, date, amount}) => {
         return {donator, date: date.toISOString(), amount};
      });
      return m_;
   }

}