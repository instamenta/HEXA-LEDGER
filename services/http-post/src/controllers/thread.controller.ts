import {Request as Req, Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/thread.zod';
import * as I from '../types/types';
import ThreadRepository from '../repositories/thread.repository';
import ThreadModel from '../models/thread.model';
import {RespondGeneralPurpose} from '../utilities/error.handlers';
import {Transform} from 'stream';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';

export default class ThreadController {

   private threadRepository: ThreadRepository;

   constructor(threadRepository: ThreadRepository) {
      this.threadRepository = threadRepository;
   }

   public async create(
      r: Req<object, object, z.infer<typeof zod.createBody>>,
      w: Res<Omit<I.OThreadsModel, 'deleted'> | string | Error>
   ): Promise<void> {
      try {
         const threadData = zod.createBody.parse(r.body);

         this.threadRepository.create(threadData)
            .then((model: ThreadModel | null) => model instanceof ThreadModel
               ? w.status(StatusCode.CREATED)
                  .json(model.get()).end()
               : w.status(StatusCode.BAD_REQUEST)
                  .json('Failed to create').end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async update(
      r: Req<{ threadId: string }, object, z.infer<typeof zod.updateBody>>,
      w: Res<Omit<I.OThreadsModel, 'deleted'> | string | Error>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParam.parse(r.params);
         const threadData = zod.updateBody.parse(r.body);

         this.threadRepository.update(threadId, threadData)
            .then((model: ThreadModel | null) => model instanceof ThreadModel
               ? w.status(StatusCode.CREATED)
                  .json(model.get()).end()
               : w.status(StatusCode.NOT_FOUND)
                  .json('Failed to create').end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async delete(
      r: Req<{ threadId: string }>,
      w: Res<Omit<I.OThreadsModel, 'deleted'> | string | Error>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.deleteById(threadId)
            .then((model: ThreadModel | null) => model instanceof ThreadModel
               ? w.status(StatusCode.OK)
                  .json(model.get()).end()
               : w.status(StatusCode.NOT_FOUND)
                  .json('Failed to create').end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getOne(
      r: Req<{ threadId: string }>,
      w: Res<string | Omit<I.OThreadsModel, 'deleted'> | Error>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.getOneById(threadId)
            .then((model: ThreadModel | null) =>
               model instanceof ThreadModel
                  ? w.status(StatusCode.OK)
                     .json(model.get()).end()
                  : w.status(StatusCode.NOT_FOUND)
                     .json('Failed to create').end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getMany(
      r: Req<object, { skip: number, limit: number }>,
      w: Res<Omit<I.SOThreadsModel, 'deleted'>[] | Error>
   ): Promise<void> {
      try {
         const {skip, limit} = zod.pageQuery.parse(r.query);

         this.threadRepository.getMany(skip, limit)
            .then((models: ThreadModel[]) =>
               models.length
                  ? w.status(StatusCode.OK)
                     .json(models.map((model) => model.getStatic())).end()
                  : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getByOwner(
      r: Req<object, { skip: number, limit: number }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet: ownerAddr} = zod.walletParam.parse(r.params)
            , {skip, limit} = zod.pageQuery.parse(r.query);

         this.threadRepository.getByOwner(ownerAddr, skip, limit)
            .then((models: ThreadModel[]) =>
               models.length
                  ? w.status(StatusCode.OK)
                     .json(models.map((model) => model.getStatic())).end()
                  : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getTotalCount(
      r: Req,
      w: Res
   ): Promise<void> {
      try {
         this.threadRepository.getTotalCount()
            .then((res: number) => res
               ? w.status(StatusCode.OK).json(res).end()
               : w.status(StatusCode.NOT_FOUND).end());
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async like(
      r: Req<{ threadId: string }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet} = zod.walletAuthClaims.parse(r.auth.claims)
            , {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.like(threadId, wallet)
            .then((res: boolean) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async dislike(
      r: Req<{ threadId: string }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet} = zod.walletAuthClaims.parse(r.auth.claims)
            , {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.dislike(threadId, wallet)
            .then((res: boolean) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async promote(
      r: Req<{ threadId: string }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet} = zod.walletAuthClaims.parse(r.auth.claims)
            , {threadId} = zod.threadIdParam.parse(r.params)
            , {amount} = zod.amountBody.parse(r.body);

         this.threadRepository.promote(threadId, wallet, amount)
            .then((res: boolean) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async donate(
      r: Req<{ threadId: string }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet} = zod.walletAuthClaims.parse(r.auth.claims)
            , {threadId} = zod.threadIdParam.parse(r.params)
            , {amount} = zod.amountBody.parse(r.body);

         this.threadRepository.donate(threadId, wallet, amount)
            .then((res: boolean) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async transferOwnership(
      r: Req<{ threadId: string, wallet: string }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet} = zod.walletAuthClaims.parse(r.auth.claims)
            , {threadId} = zod.threadIdParam.parse(r.params)
            , {wallet: newOwner} = zod.walletParam.parse(r.params);

         this.threadRepository.transferOwnership(threadId, wallet, newOwner)
            .then((res: boolean) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getLikes(
      r: Req<{ threadId: string, }>,
      w: Res<string[]>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.getLikes(threadId)
            .then((res: string[] | null) => res
               ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getDislikes(
      r: Req<{ threadId: string, }>,
      w: Res<string[]>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParam.parse(r.params);

         this.threadRepository.getDislikes(threadId)
            .then((res: string[] | null) => res
               ? w.status(StatusCode.OK).json(res).end()
               : w.status(StatusCode.NOT_FOUND).end()
            );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getStatistics(
      r: Req<{ threadId: string, }>,
      w: Res<I.OStatsModel | I.OStatsModel[] | null>
   ): Promise<void> {
      try {
         const {threadId} = zod.threadIdParamOptional.parse(r.params);

         const stats = await this.threadRepository.getStatistics(threadId ?? null);
         if (Array.isArray(stats)) {
            stats.length
               ? w.status(StatusCode.OK).json(stats.map(d => d.get())).end()
               : w.status(StatusCode.NOT_FOUND).end();
         } else {
            stats
               ? w.status(StatusCode.OK).json(stats.get()).end()
               : w.status(StatusCode.NOT_FOUND).end();
         }
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getMany_$( // deprecated
      r: Req<{ threadId: string }>,
      w: Res<string | Error>
   ): Promise<void> {
      try {
         const {skip, limit} = zod.pageQuery.parse(r.query);

         const $_DB = await this.threadRepository.getMany_$(skip, limit);
         let c = 0;

         w.write('[');
         $_DB.on('data', (model: ThreadModel) => {
            w.write(JSON.stringify(model.getStatic()) + ',');
            c++;
         });

         $_DB.on('end', () => {
            c ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end();
         });

         $_DB.on('error', (e: Error) => {
            w.status(StatusCode.INTERNAL_SERVER_ERROR).json(e).end();
         });

      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getByOwner_$( // deprecated
      r: Req<object, { skip: number, limit: number }>,
      w: Res
   ): Promise<void> {
      try {
         const {wallet: ownerAddr} = zod.walletParam.parse(r.params);
         const {skip, limit} = zod.pageQuery.parse(r.query);

         const $_DB = await this.threadRepository.getByOwner_$(
            ownerAddr, skip, limit
         );
         const $_T_ = new Transform({readableObjectMode: true, writableObjectMode: true});
         w.setHeader('Content-Type', 'application/json');
         let c = 0;

         w.write('[');
         $_T_._transform = (d: ThreadModel, encryption, call) => {
            call(null, JSON.stringify(d.getStatic()) + ',');
            c++;
         };

         $_T_.on('end', () => {
            w.write(']');
            c ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end();
         });

         $_DB.on('error', (e: Error) => {
            w.status(StatusCode.INTERNAL_SERVER_ERROR).json(e).end();
         });

         $_DB.pipe($_T_).pipe(w);
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }
}
