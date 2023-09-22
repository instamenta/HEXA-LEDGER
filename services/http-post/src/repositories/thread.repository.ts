import * as I from '../types/types';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/error.handlers';
import {Readable as NodeRStream} from 'node:stream';
import {config} from '../utilities/config';
import {
   Db, ObjectId, Collection, MongoError,
   InsertOneResult, FindOneAndUpdateOptions,
   Filter, WithId, UpdateFilter,
   ReturnDocument, UpdateResult, FindOptions, CursorStreamOptions,
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
         o: Buffer.from(d.owner.replace(/^0x/, ''), 'hex'),
         p: [{
            promoter: Buffer.from(d.owner.replace(/^0x/, ''), 'hex'),
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

   public async deleteById(threadId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(threadId), del: true}
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

   public async update(threadId: string, d: I.PUpdateData): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         $match: {_id: new ObjectId(threadId), del: false}
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

   public async getOneById(threadId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
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
         const filter = {del: false} as Filter<I.IThreadSchema>;
         const options = {
            skip, limit,
            projection: {do: 0, li: 0, di: 0, del: 0}
         } as FindOptions<I.IThreadSchema>;

         return this.collection.find(filter, options)
            .stream({
               transform:
                  (doc: WithId<I.IThreadSchema>): ThreadModel => new ThreadModel(doc)
            } as CursorStreamOptions);
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getByOwner(ownerAddr: string, skip: number, limit: number): Promise<NodeRStream & AsyncIterable<ThreadModel>> {
      const filter: Filter<I.IThreadSchema> = {
         o: Buffer.from(ownerAddr.replace(/^0x/, ''), 'hex'), del: false
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

   public async like(threadId: string, wallet: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId),
         $ne: {o: Buffer.from(wallet.replace(/^0x/, ''), 'hex')},
         del: false,
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $addToSet: {li: Buffer.from(wallet.replace(/^0x/, ''), 'hex')},
         $pull: {di: Buffer.from(wallet.replace(/^0x/, ''), 'hex')}
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async dislike(threadId: string, wallet: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId),
         $ne: {o: Buffer.from(wallet.replace(/^0x/, ''), 'hex')},
         del: false,
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $addToSet: {di: Buffer.from(wallet.replace(/^0x/, ''), 'hex')},
         $pull: {li: Buffer.from(wallet.replace(/^0x/, ''), 'hex')}
      };
      return this.collection.updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async promote(threadId: string, wallet: string, amount: number): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $push: {
            p: {
               promoter: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
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

   public async donate(threadId: string, wallet: string, amount: number): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
      };
      const update: UpdateFilter<I.IThreadSchema> = {
         $push: {
            do: {
               donator: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
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

   public async transferOwnership(threadId: string, wallet: string, newOwner: string): Promise<boolean> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId),
         o: Buffer.from(wallet, 'hex'),
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


}