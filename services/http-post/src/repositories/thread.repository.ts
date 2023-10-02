import * as I from '../types/types';
import {config} from '../utilities/config';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {Readable as NodeRStream} from 'node:stream';
import StatsModel from '../models/statistics.model';
import ThreadBuilder from '../models/builder-models/thread.builder';
import {
   Db, ObjectId, Collection, MongoError,
   Filter, UpdateFilter, FindOptions, FindOneAndUpdateOptions,
   InsertOneResult, ReturnDocument, UpdateResult,
   WithId, CursorStreamOptions,
} from 'mongodb';

export default class ThreadRepository {

   readonly #collection: Collection<I.IThreadSchema>;

   constructor(db: Db) {
      this.#collection = db.collection(config.DB_THREADS_COLLECTION);
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
      return this.#collection
         .insertOne(record)
         .then((res: InsertOneResult<I.IThreadSchema>) => res.insertedId
            ? new ThreadModel({...record, _id: res.insertedId})
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getTotalCount(): Promise<number> {
      const filter: Filter<I.IThreadSchema> = {
         del: false
      };
      return this.#collection.countDocuments(filter)
         .catch((e: MongoError | unknown) => {
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
      return this.#collection
         .findOneAndUpdate(filter, update, options)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null
         ).catch((e: MongoError) => {
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
      return this.#collection
         .findOneAndUpdate(filter, update, options)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null
         ).catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getOneById(threadId: string): Promise<ThreadModel | null> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
      };
      return this.#collection
         .findOne(filter)
         .then((res: WithId<I.IThreadSchema> | null) => res
            ? new ThreadModel(res)
            : null
         ).catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getMany(skip: number, limit: number): Promise<ThreadModel[]> {
      try {
         const filter: Filter<I.IThreadSchema> = {
            del: false
         };
         const options: FindOptions<I.IThreadSchema> = {
            skip, limit
         };
         return this.#collection
            .find(filter, options)
            .toArray()
            .then((models) => models.map((data) => new ThreadModel(data)));
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getByOwner(ownerAddr: string, skip: number, limit: number): Promise<ThreadModel[]> {
      const filter: Filter<I.IThreadSchema> = {
         o: Buffer.from(ownerAddr.replace(/^0x/, ''), 'hex'), del: false
      };
      const options: FindOptions<I.IThreadSchema> = {
         skip, limit,
      };
      return this.#collection
         .find(filter, options)
         .toArray()
         .then((models) => models.map((data) => new ThreadModel(data)))
         .catch((e: MongoError | unknown) => {
            HandleMongoError(e);
            throw e;
         });
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
      return this.#collection
         .updateOne(filter, update)
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
      return this.#collection
         .updateOne(filter, update)
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
      return this.#collection
         .updateOne(filter, update)
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
      return this.#collection
         .updateOne(filter, update)
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
      return this.#collection
         .updateOne(filter, update)
         .then((res: UpdateResult<I.IThreadSchema>) => !!res.modifiedCount)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getLikes(threadId: string): Promise<string[] | null> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
      };
      const options: FindOptions<I.IThreadSchema> = {
         projection: {li: 1}
      };
      return this.#collection
         .findOne(filter, options)
         .then((thread: Pick<WithId<I.IThreadSchema>, 'li'> | null) => thread
            ? thread.li.map((likes: Buffer) => '0x' + likes.toString('hex'))
            : null
         ).catch((e: MongoError | unknown) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getDislikes(threadId: string): Promise<string[] | null> {
      const filter: Filter<I.IThreadSchema> = {
         _id: new ObjectId(threadId), del: false
      };
      const options: FindOptions<I.IThreadSchema> = {
         projection: {di: 1}
      };
      return this.#collection
         .findOne(filter, options)
         .then((thread: Pick<WithId<I.IThreadSchema>, 'di'> | null) => thread
            ? thread.di.map((dislikes: Buffer) => '0x' + dislikes.toString('hex'))
            : null
         ).catch((e: MongoError | unknown) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getStatistics(threadId: string | null): Promise<StatsModel | StatsModel[] | null> {
      try {
         const filter: Filter<I.IThreadSchema> = {
            del: false
         };
         const options: FindOptions<I.IThreadSchema> = {
            projection: {li: 1, do: 1, p: 1, di: 1, n: 1}
         };
         if (threadId) {
            filter._id = new ObjectId(threadId);
            return this.#collection
               .findOne(filter, options)
               .then((thread: I.IStatsModel | null) => thread
                  ? new StatsModel(thread)
                  : null
               );
         } else {
            return this.#collection
               .find(filter, options)
               .toArray()
               .then((threads: I.IStatsModel[]) =>
                  threads.map((t) => new StatsModel(t)));
         }
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getMany_$(skip: number, limit: number,): Promise<NodeRStream & AsyncIterable<ThreadBuilder>> {
      try {
         const filter: Filter<I.IThreadSchema> = {
            del: false
         };
         const options: FindOptions<I.IThreadSchema> = {
            skip, limit,
         };
         const streamOptions: CursorStreamOptions = {
            transform: (doc: WithId<I.IThreadSchema>): ThreadBuilder => new ThreadBuilder(doc)
         };
         return this.#collection
            .find(filter, options)
            .stream(streamOptions);
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getByOwner_$(ownerAddr: string, skip: number, limit: number): Promise<NodeRStream & AsyncIterable<ThreadModel>> {
      const filter: Filter<I.IThreadSchema> = {
         o: Buffer.from(ownerAddr.replace(/^0x/, ''), 'hex'), del: false
      };
      const streamOptions: CursorStreamOptions = {
         transform: (doc: WithId<I.IThreadSchema>): ThreadModel => new ThreadModel(doc)
      };
      try {
         return this.#collection
            .find(filter)
            .skip(skip)
            .limit(limit)
            .stream(streamOptions);
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getStatistics_$(skip: number, limit: number): Promise<NodeRStream & AsyncIterable<WithId<StatsModel>>> {
      try {
         const filter: Filter<I.IThreadSchema> = {
            del: false
         };
         const options: FindOptions<I.IThreadSchema> = {
            projection: {li: 1, do: 1, p: 1, di: 1, n: 1}
         };
         const streamOptions: CursorStreamOptions = {
            transform: (doc: WithId<I.IStatsModel>): StatsModel => new StatsModel(doc)
         };
         return this.#collection
            .find(filter, options)
            .skip(skip)
            .limit(limit)
            .stream(streamOptions)
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

}
