import {
   Collection,
   Db,
   Filter,
   FindOneAndUpdateOptions, InsertOneResult,
   MongoError,
   ObjectId, ReturnDocument,
   UpdateFilter, WithId,
} from 'mongodb';
import * as I from '../types/types';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/error.handlers';
import {PUpdateData} from "../types/types";

export default class ThreadRepository {

   private collection: Collection<I.IThreadSchema>;

   constructor(db: Db) {
      this.collection = db.collection('threads');
   }

   async create(d: I.PCreateData): Promise<ThreadModel | null> {
      const record = {
         n: Buffer.from(d.name),
         des: Buffer.from(d.description),
         c: Buffer.from(d.content),
         o: new ObjectId(d.owner),
         p: [{promoter: new ObjectId(d.owner), date: new Date(), amount: d.promoted}],
         i: d.images.map((img) => Buffer.from(img)),
         t: d.tags.map((tag) => Buffer.from(tag)),
         ca: new Date(), up: new Date(),
         do: [], li: [], di: [],
         del: false,
      };
      return this.collection.insertOne(
         record
      ).then((res: InsertOneResult<I.IThreadSchema>) => res.insertedId
         ? new ThreadModel({...record, _id: res.insertedId})
         : null
      ).catch((e: MongoError) => {
         HandleMongoError(e);
         throw e;
      });
   }

   async deleteById(postId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(postId), del: true}
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $set: {del: true, up: new Date()}
      };
      const options: FindOneAndUpdateOptions = {
         returnDocument: 'after' as ReturnDocument
      };
      return this.collection.findOneAndUpdate(
         filter, update, options
      ).then((res: WithId<I.IThreadSchema> | null) => res
         ? new ThreadModel(res)
         : null
      ).catch((e: MongoError) => {
         HandleMongoError(e);
         throw e;
      });
   }

   async update(postId: string, d: I.PUpdateData): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(postId), del: false}
      };
      const update = {
         $set: {up: new Date()}
      } satisfies UpdateFilter<I.IThreadSchema>;
      const options: FindOneAndUpdateOptions = {
         returnDocument: 'after' as ReturnDocument
      };
      if (d.name) Object.assign(update.$set, {n: Buffer.from(d.name)});
      if (d.description) Object.assign(update.$set, {des: Buffer.from(d.description)});
      if (d.content) Object.assign(update.$set, {c: Buffer.from(d.content)});
      if (d.images) Object.assign(update.$set, {
         i: (d.images).map((img) => Buffer.from(img))
      });
      if (d.tags) Object.assign(update.$set, {
         t: (d.tags).map((tag) => Buffer.from(tag))
      });
      return this.collection.findOneAndUpdate(
         filter, update, options
      ).then((res: WithId<I.IThreadSchema> | null) => res
         ? new ThreadModel(res)
         : null
      ).catch((e: MongoError) => {
         HandleMongoError(e);
         throw e;
      });
   }

   getOne() {

   }

   getMany() {

   }

   customOne() {

   }

   customMany() {

   }

   promote() {

   }

   transferOwnership() {

   }

   like() {

   }

   dislike() {

   }


}