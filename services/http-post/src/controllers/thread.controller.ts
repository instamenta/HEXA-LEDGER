import {Request as Req, Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/thread.zod';
import ThreadRepository from '../repositories/thread.repository';
import ThreadModel from '../models/thread.model';
import {RespondGeneralPurpose} from '../utilities/error.handlers';
import {Transform} from 'stream';
import {TransformCallback} from 'node:stream';
import {type ZodError} from 'zod';
import {type MongoError} from 'mongodb';

export default class ThreadController {

   private threadRepository: ThreadRepository;

   constructor(threadRepository: ThreadRepository) {
      this.threadRepository = threadRepository;
   }

   public async create(r: Req, w: Res): Promise<void> {
      try {
         const threadData = zod.createBody.parse(r.body);

         this.threadRepository.create(
            threadData
         ).then(model => model instanceof ThreadModel
            ? w.status(StatusCode.CREATED)
               .json(model.get()).end()
            : w.status(StatusCode.BAD_REQUEST)
               .json('Failed to create').end()
         );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async update(r: Req, w: Res): Promise<void> {
      try {
         const {postId} = zod.postIdParam.parse(r.params);
         const threadData = zod.updateBody.parse(r.body);

         this.threadRepository.update(
            postId, threadData
         ).then(model => model instanceof ThreadModel
            ? w.status(StatusCode.CREATED)
               .json(model.get()).end()
            : w.status(StatusCode.NOT_FOUND)
               .json('Failed to create').end()
         );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async delete(r: Req, w: Res): Promise<void> {
      try {
         const {postId} = zod.postIdParam.parse(r.params);

         this.threadRepository.deleteById(
            postId
         ).then(model => model instanceof ThreadModel
            ? w.status(StatusCode.OK)
               .json(model.get()).end()
            : w.status(StatusCode.NOT_FOUND)
               .json('Failed to create').end()
         );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getOne(r: Req, w: Res): Promise<void> {
      try {
         const {postId} = zod.postIdParam.parse(r.params);

         this.threadRepository.getOneById(
            postId
         ).then(model => model instanceof ThreadModel
            ? w.status(StatusCode.OK)
               .json(model.get()).end()
            : w.status(StatusCode.NOT_FOUND)
               .json('Failed to create').end()
         );
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getMany(r: Req, w: Res): Promise<void> {
      try {
         const {skip, limit} = zod.pageQuery.parse(r.query);
         console.log('=================')

         const $_DB = await this.threadRepository.getMany(skip, limit);
         const $_T_ = new Transform({readableObjectMode: true, writableObjectMode: true});
         let co = 0;

         $_T_._transform = (d: ThreadModel, enc: BufferEncoding, call: TransformCallback) => {
            console.log(d.getStatic());
            call(null, JSON.stringify(d.getStatic()));
            co++;
         };

         $_T_.on('end', () => {
            co ? w.status(StatusCode.OK).end()
               : w.status(StatusCode.NOT_FOUND).end();
         });

         $_DB.on('error', (e: Error) => {
            console.log('=================ERROR')
            w.status(StatusCode.INTERNAL_SERVER_ERROR).json(e).end();
         });

         $_DB.pipe($_T_).pipe(w);
      } catch
         (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getByOwner(r: Req, w: Res): Promise<void> {
   }

   public async like(r: Req, w: Res): Promise<void> {
   }

   public async dislike(r: Req, w: Res): Promise<void> {
   }

   public async promote(r: Req, w: Res): Promise<void> {
   }

   public async donate(r: Req, w: Res): Promise<void> {
   }

   public async transferOwnership(r: Req, w: Res): Promise<void> {
   }

}
