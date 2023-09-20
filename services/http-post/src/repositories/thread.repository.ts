import * as I from '../types/types';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/error.handlers';
import {Readable as NodeRStream} from 'node:stream';
import {config} from '../utilities/config';
import {
   Db, ObjectId, Collection, MongoError,
   InsertOneResult, FindOneAndUpdateOptions,
   Filter, WithId, UpdateFilter,
   ReturnDocument, UpdateResult,
} from 'mongodb';

export default class ThreadRepository {

   private collection: Collection<I.IThreadSchema>;

   constructor(db: Db) {
      this.collection = db.collection(config.DB_THREADS_COLLECTION);
   }

   public async create(d: I.PCreateData): Promise<ThreadModel | null> {
      const record = {
         n: Buffer.from(d.name),
         des: Buffer.from(d.description),
         c: Buffer.from(d.content),
         o: Buffer.from(d.owner, 'hex'),
         p: [{
            promoter: Buffer.from(d.owner, 'hex'),
            date: Math.floor(new Date().getTime() / 1000),
            amount: d.promoted
         }],
         i: d.images.map((img) => Buffer.from(img)),
         t: d.tags.map((tag) => Buffer.from(tag)),
         ca: Math.floor(new Date().getTime() / 1000),
         up: Math.floor(new Date().getTime() / 1000),
         do: [], li: [], di: [],
         del: false,
      };
      return this.collection.insertOne(record)
         .then((res: InsertOneResult<I.IThreadSchema>) => res.insertedId
            ? new ThreadModel({...record, _id: res.insertedId})
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async deleteById(postId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(postId), del: true}
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $set: {del: true, up: Math.floor(new Date().getTime() / 1000)}
      };
      const options: FindOneAndUpdateOptions = {
         returnDocument: 'after' as ReturnDocument
      };
      return this.collection.findOneAndUpdate(filter, update, options)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async update(postId: string, d: I.PUpdateData): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(postId), del: false}
      };
      const update = {
         $set: {up: Math.floor(new Date().getTime() / 1000)}
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
      return this.collection.findOneAndUpdate(filter, update, options)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getOneById(postId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId), del: false
      };
      return this.collection.findOne(filter)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getMany(skip: number, limit: number): Promise<NodeRStream & AsyncIterable<ThreadModel>> {
      try {
         return this.collection.find()
            .skip(skip)
            .limit(limit)
            .stream({
               transform:
                  (doc: WithId<I.IThreadSchema>): ThreadModel => new ThreadModel(doc)
            });
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getByOwner(ownerId: string, skip: number, limit: number): Promise<NodeRStream & AsyncIterable<ThreadModel>> {
      const filter: Filter<I.IThreadSchema> = {
         o: Buffer.from(ownerId, 'hex'), del: false
      };
      try {
         return this.collection
            .find(filter)
            .skip(skip)
            .limit(limit)
            .stream({
               transform:
                  (doc: WithId<I.IThreadSchema>): ThreadModel => new ThreadModel(doc)
            });
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async promote(postId: string, authId: string, amount: number): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId), del: false
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $push: {
            p: {
               promoter: Buffer.from(authId, 'hex'),
               date: new Date().getTime() / 1000,
               amount: +amount,
            }
         }
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async donate(postId: string, authId: string, amount: number): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId), del: false
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $push: {
            do: {
               donator: Buffer.from(authId, 'hex'),
               date: new Date().getTime() / 1000,
               amount: +amount,
            }
         }
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async transferOwnership(postId: string, authId: string, newOwner: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId),
         o: Buffer.from(authId, 'hex'),
         del: false,
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $set: {o: Buffer.from(newOwner, 'hex')}
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async like(postId: string, authId: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId),
         $ne: {o: Buffer.from(authId, 'hex')},
         del: false,
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $addToSet: {li: Buffer.from(authId, 'hex')},
         $pull: {di: Buffer.from(authId, 'hex')}
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async dislike(postId: string, authId: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(postId),
         $ne: {o: Buffer.from(authId, 'hex')},
         del: false,
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $addToSet: {di: Buffer.from(authId, 'hex')},
         $pull: {li: Buffer.from(authId, 'hex')}
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }


}