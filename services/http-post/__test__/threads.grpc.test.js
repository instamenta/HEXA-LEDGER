const proto = require('../src/generated/grpc/javascript/threads_pb');
const grpc = require('@grpc/grpc-js');
const {ThreadsClient} = require('../src/generated/grpc/javascript/threads_grpc_pb')
const {UInt64Value} = require("google-protobuf/google/protobuf/wrappers_pb");

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
   let client;
   const url = 'localhost:50054';

   beforeAll(() => {
      client = new ThreadsClient(url, grpc.credentials.createInsecure());
   });

   afterAll(() => {
   });

   test('ThreadsService.getMany() should calculate.', (done) => {
      const _local = {
         rand_index: Math.floor(Math.random() * 20),
         matrix: [],
         counter: 0,
      };
      for (let i = 0 ; i < _local.rand_index ; i++) {
         const _test = {
            rand_page: Math.floor(Math.random() * 5),
            rand_limit: Math.floor(Math.random() * 30),
            counter: 0,
            threads: [],
            promises: []
         };
         const request = new proto.Pagination()
            .setLimit(new UInt64Value().setValue(_test.rand_limit))
            .setPage(new UInt64Value().setValue(_test.rand_page))
         ;
         const $_call = client.getMany(request);

         $_call.on('data', (data) => {
            const thread = data.toObject();

            for (const key of Object.keys(thread)) {
               expect(schema.includes(key)).toBe(true);
            }
            expect(typeof thread).toBe('object');
            expect(Object.keys(thread).length).toBe(16);

            _test.threads.push(thread);
            _test.counter++;

            _test.promises.push(new Promise((res) => res()));
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
            _local.matrix.push(_test.threads)
            _local.counter++;
            _test.promises.push(new Promise())
         });

         Promise.all(_test.promises);
      }
      expect(_local.matrix.length).toBe(_local.counter);
      expect(_local.counter).toBe(_local.rand_index);
      done();
   })
});
