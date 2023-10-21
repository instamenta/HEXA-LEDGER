import {config} from '../utilities/config';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {
   Db, ObjectId, Collection, MongoError,
   Filter, UpdateFilter, FindOptions, FindOneAndUpdateOptions,
   InsertOneResult, WithId, ReturnDocument,
} from 'mongodb';
import * as I from "../types/user";

export default class UserRepository {

   readonly #collection: Collection<I.IUserSchema>;

   constructor(db: Db) {
      this.#collection = db.collection(config.DB_USER_COLLECTION);
   }

   public async create(d: I.PCreateData): Promise<ThreadModel | null> {
      const record = {
         n: Buffer.from(d.name),
         des: Buffer.from(d.description),
         c: Buffer.from(d.content),
         o: Buffer.from(d.owner.replace(/^0x/, ''), 'hex'),
         i: d.images.map((img) => Buffer.from(img)),
         ca: Math.floor(new Date().getTime() / 1000),
         up: Math.floor(new Date().getTime() / 1000),
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

}
