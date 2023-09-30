import {credentials} from '@grpc/grpc-js'
import {ThreadsClient} from '../src/generated/grpc/typescript/threads_grpc_pb'
import {ThreadModel} from '../src/generated/grpc/typescript/threads_pb'
import PaginationBuilder from '../src/generated/grpc/builders/pagination'
import {ThreadModelExtractor} from "../src/generated/grpc/extacters/extractor";

const schema = [
   'id',
   'name',
   'description',
   'content',
   'imagesList',
   'createdAt',
   'updatedAt',
   'owner',
   'deleted',
   'promotedList',
   'donationsList',
   'likesList',
   'dislikesList',
   'tagsList',
   'likesCount',
   'dislikesCount'
];

describe('[Thread Service] Endpoints.', () => {
   // @ts-ignore
   const _local = {
      URL: 'localhost:50054',
      client: null,
   } as { URL: string, client: ThreadsClient };

   beforeAll(() => {
      _local.client = new ThreadsClient(_local.URL, credentials.createInsecure());
   });

   // afterAll(() => {});

   test('ThreadsService.getMany(): ', (done: jest.DoneCallback) => {
      const _test: { rand_page: number, rand_limit: number, counter: number, threads: ThreadModel[] } = {
         rand_page: Math.floor(Math.random() * 5),
         rand_limit: Math.floor(Math.random() * 30),
         counter: 0,
         threads: [],
      };

      const request = new PaginationBuilder()
         .withLimit(_test.rand_limit)
         .withPage(_test.rand_page)
         .build();

      const $_call = _local.client.getMany(request);

      $_call.on('data', (data: ThreadModel) => {
         const _thread = new ThreadModelExtractor(data).extract();

         for (const key of Object.keys(_thread)) {
            expect(schema.includes(key)).toBe(true);
         }
         expect(typeof _thread).toBe('object');
         expect(Object.keys(_thread).length).toBe(schema.length);

         _test.threads.push(data);
         _test.counter++;
      });

      $_call.on('status', (stats) => {
         expect(stats.metadata.getMap().count).toBe(_test.counter.toString());
         expect(_test.counter).toBe(_test.rand_limit);
      });

      $_call.on('error', (error) => {
         done.fail(`Service ran into error: ${error}`)
      });

      $_call.on('end', () => {
         expect(_test.threads.length).toBe(_test.rand_limit);
         expect(_test.threads.length).toBe(_test.counter);
         done();
      });
   });

});
