"use strict";
// import {credentials, ServerErrorResponse, ServiceError} from '@grpc/grpc-js'
// import {ThreadsClient} from '../src/generated/grpc/typescript/threads_grpc_pb'
// import {PingPongMessage, ThreadModel} from '../src/generated/grpc/typescript/threads_pb'
// import PaginationBuilder from '../src/generated/grpc/builders/pagination'
// import {ThreadModelExtractor} from "../src/generated/grpc/extacters/extractor";
// import AmountWithAuthRequestBuilder from "../src/generated/grpc/builders/amount.auth.request";
// import {Empty} from "google-protobuf/google/protobuf/empty_pb";
// import PingPongBuilder from "../src/generated/grpc/builders/pingpong";
// import * as zod from "../src/generated/grpc/validation/grpc.messages";
// import WalletWithAuthRequestBuilder from "../src/generated/grpc/builders/wallet.auth.request";
// import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";
// import IdRequestBuilder from "../src/generated/grpc/builders/id.request";
//
// const schema = [
//    'id', 'name', 'description', 'content', 'imagesList', 'createdAt', 'updatedAt', 'owner', 'deleted',
//    'promotedList', 'donationsList', 'likesList', 'dislikesList', 'tagsList', 'likesCount', 'dislikesCount'
// ];
//
// describe('[Thread Service].GetMany(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should stream ThreadModels', (done: jest.DoneCallback) => {
//       const _test: { rand_page: number, rand_limit: number, counter: number, threads: ThreadModel[] } = {
//          rand_page: Math.floor(Math.random() * 5),
//          rand_limit: Math.floor(Math.random() * 30),
//          counter: 0, threads: [],
//       };
//       const request = new PaginationBuilder()
//          .withLimit(_test.rand_limit)
//          .withPage(_test.rand_page)
//          .build();
//       const $_call = _local.client.getMany(request);
//
//       $_call.on('data', (data: ThreadModel) => {
//          const _thread = new ThreadModelExtractor(data).extract();
//          for (const key of Object.keys(_thread)) {
//             expect(schema.includes(key)).toBe(true);
//          }
//          expect(typeof _thread).toBe('object');
//          expect(Object.keys(_thread).length).toBe(schema.length);
//          _test.threads.push(data);
//          _test.counter++;
//       });
//
//       $_call.on('status', (stats) => {
//          expect(stats.metadata.getMap().count).toBe(_test.counter.toString());
//          expect(_test.counter).toBe(_test.rand_limit);
//       });
//
//       $_call.on('error', (e) => {
//          console.log(e);
//          done.fail(`Service ran into error: ${e}`)
//       });
//
//       $_call.on('end', () => {
//          expect(_test.threads.length).toBe(_test.rand_limit);
//          expect(_test.threads.length).toBe(_test.counter);
//          done();
//       });
//    });
//
//    test('Should throw if Limit is 0 ', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(0).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be a positive number.')
//             done()
//          });
//    });
//
//    test('Should throw if Limit is exceeded', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(101).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be less than 100.')
//             done()
//          });
//    });
//
//    test('Should throw if Threads are not found', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withPage(100).withLimit(99).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe(`Threads for [Page: ${100}], [Limit: ${99}] not found.`)
//             done()
//          });
//    });
//
// });
//
// describe('[Thread Service].promote(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should throw if the threads is not found', (done: jest.DoneCallback) => {
//       const request = new AmountWithAuthRequestBuilder()
//          .withAmount(200000)
//          .withAuth('650b0a3753f27c4c89C4e81f')
//          .withThreadId('650b0a3713f27c4c89C4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.promote(request, (error: ServiceError | null, response: Empty) => {
//             error ? reject('error') : resolve('didn\'t throw')
//          });
//       });
//       expect(result).rejects.toBe('error');
//       done();
//    });
//
//    test('Should return no error if all data is proper', (done: jest.DoneCallback) => {
//       const request = new AmountWithAuthRequestBuilder()
//          .withAmount(200000)
//          .withAuth('650b0a3713f27c4c82c4e81f')
//          .withThreadId('650b0a3713f27c4c82c4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.promote(request, (error: ServiceError | null, response: Empty) => {
//             !error ? resolve('success') : reject('error');
//          });
//       });
//       expect(result).resolves.toBe('success');
//       done();
//    });
//
// });
//
// describe('[Thread Service].donate(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should throw if the threads is not found', (done: jest.DoneCallback) => {
//       const request = new AmountWithAuthRequestBuilder()
//          .withAmount(200000)
//          .withAuth('650b0a3713f27c4c89C4e81f')
//          .withThreadId('650b0a3713f27c4c89C4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.donate(request, (error: ServiceError | null, response: Empty) => {
//             error ? reject('error') : resolve('didn\'t throw')
//          });
//       });
//       expect(result).rejects.toBe('error');
//       done();
//    });
//
//    test('Should pass if all data is proper', (done: jest.DoneCallback) => {
//       const request = new AmountWithAuthRequestBuilder()
//          .withAmount(200000)
//          .withAuth('650b0a3713f27c4c82c4e81f')
//          .withThreadId('650b0a3713f27c4c82c4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.donate(request, (error: ServiceError | null, response: Empty) => {
//             !error ? resolve('success') : reject('fail');
//          });
//       });
//       expect(result).resolves.toBe('success');
//       done();
//    });
//
// });
//
// describe('[Thread Service].like(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should throw if the threads is not found', (done: jest.DoneCallback) => {
//       const request = new WalletWithAuthRequestBuilder()
//          .withId('650b0a3713f27c4c89C4e81f')
//          .withWallet('650b0a3713f27c4c89C4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.like(request, (error: ServiceError | null, response: Empty) => {
//             error ? reject('error') : resolve('didn\'t throw')
//          });
//       });
//       expect(result).rejects.toBe('error');
//       done();
//    });
//
//    test('Should pass if all data is proper', (done: jest.DoneCallback) => {
//       const request = new WalletWithAuthRequestBuilder()
//          .withWallet('650b0a3713f27c4c82c4e81f')
//          .withId('650b0a3713f27c4c82c4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.like(request, (error: ServiceError | null, response: Empty) => {
//             !error ? resolve('success') : reject('fail');
//          });
//       });
//       expect(result).resolves.toBe('success');
//       done();
//    });
//
// });
//
// describe('[Thread Service].dislike(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should throw if the threads is not found', (done: jest.DoneCallback) => {
//       const request = new WalletWithAuthRequestBuilder()
//          .withId('650b0a3713f27c4c89C4e81f')
//          .withWallet('650b0a3713f27c4c89C4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.dislike(request, (error: ServiceError | null, response: Empty) => {
//             error ? reject('error') : resolve('didn\'t throw')
//          });
//       });
//       expect(result).rejects.toBe('error');
//       done();
//    });
//
//    test('Should pass if all data is proper', (done: jest.DoneCallback) => {
//       const request = new WalletWithAuthRequestBuilder()
//          .withWallet('650b0a3713f27c4c82c4e81f')
//          .withId('650b0a3713f27c4c82c4e81f')
//          .build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.dislike(request, (error: ServiceError | null, response: Empty) => {
//             !error ? resolve('success') : reject('fail');
//          });
//       });
//       expect(result).resolves.toBe('success');
//       done();
//    });
//
// });
//
// describe('[Thread Service].getLikes(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should stream StringValue', (done: jest.DoneCallback) => {
//       const _test: { rand_page: number, rand_limit: number, counter: number, likes: string[] } = {
//          rand_page: Math.floor(Math.random() * 5),
//          rand_limit: Math.floor(Math.random() * 30),
//          counter: 0, likes: [],
//       };
//       const request = new IdRequestBuilder()
//          .withId('650b0a3713f27c4c82c4e81f')
//          .build();
//       const $_call = _local.client.getLikes(request);
//
//       $_call.on('data', (data: StringValue) => {
//          expect(data instanceof StringValue).toBe(true);
//          const _wallet = data.getValue().toString();
//          expect(typeof _wallet).toBe('string');
//          _test.likes.push(_wallet);
//          _test.counter++;
//       });
//
//       $_call.on('status', (stats) => {
//          expect(stats.metadata.getMap().count).toBe(_test.counter.toString());
//          expect(_test.counter).toBe(_test.rand_limit);
//       });
//
//       $_call.on('error', (e) => {
//          console.log(e);
//          done.fail(`Service ran into error: ${e}`)
//       });
//
//       $_call.on('end', () => {
//          expect(_test.likes.length).toBe(_test.rand_limit);
//          expect(_test.likes.length).toBe(_test.counter);
//          done();
//       });
//    });
//
//    test('Should throw if Limit is 0 ', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(0).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be a positive number.')
//             done()
//          });
//    });
//
//    test('Should throw if Limit is exceeded', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(101).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be less than 100.')
//             done()
//          });
//    });
//
//    test('Should throw if Threads are not found', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withPage(100).withLimit(99).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe(`Threads for [Page: ${100}], [Limit: ${99}] not found.`)
//             done()
//          });
//    });
//
// });
//
//
// describe('[Thread Service].getDislikes(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should stream ThreadModels', (done: jest.DoneCallback) => {
//       const _test: { rand_page: number, rand_limit: number, counter: number, threads: ThreadModel[] } = {
//          rand_page: Math.floor(Math.random() * 5),
//          rand_limit: Math.floor(Math.random() * 30),
//          counter: 0, threads: [],
//       };
//       const request = new PaginationBuilder()
//          .withLimit(_test.rand_limit)
//          .withPage(_test.rand_page)
//          .build();
//       const $_call = _local.client.getMany(request);
//
//       $_call.on('data', (data: ThreadModel) => {
//          const _thread = new ThreadModelExtractor(data).extract();
//          for (const key of Object.keys(_thread)) {
//             expect(schema.includes(key)).toBe(true);
//          }
//          expect(typeof _thread).toBe('object');
//          expect(Object.keys(_thread).length).toBe(schema.length);
//          _test.threads.push(data);
//          _test.counter++;
//       });
//
//       $_call.on('status', (stats) => {
//          expect(stats.metadata.getMap().count).toBe(_test.counter.toString());
//          expect(_test.counter).toBe(_test.rand_limit);
//       });
//
//       $_call.on('error', (e) => {
//          console.log(e);
//          done.fail(`Service ran into error: ${e}`)
//       });
//
//       $_call.on('end', () => {
//          expect(_test.threads.length).toBe(_test.rand_limit);
//          expect(_test.threads.length).toBe(_test.counter);
//          done();
//       });
//    });
//
//    test('Should throw if Limit is 0 ', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(0).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be a positive number.')
//             done()
//          });
//    });
//
//    test('Should throw if Limit is exceeded', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withLimit(101).withPage(0).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe('Limit must be less than 100.')
//             done()
//          });
//    });
//
//    test('Should throw if Threads are not found', (done: jest.DoneCallback) => {
//       _local.client.getMany(new PaginationBuilder().withPage(100).withLimit(99).build())
//          .on('error', (e: ServerErrorResponse) => {
//             expect(e.details).toBe(`Threads for [Page: ${100}], [Limit: ${99}] not found.`)
//             done()
//          });
//    });
//
// });
//
// describe('[Thread Service].pingPong(): __test__ ', () => {
//    // @ts-ignore
//    const _local = {URL: 'localhost:50054', client: null} as { URL: string, client: ThreadsClient };
//    beforeAll(() => _local.client = new ThreadsClient(_local.URL, credentials.createInsecure()));
//
//    test('Should pass', (done: jest.DoneCallback) => {
//       const request = new PingPongBuilder().withName('ThreadsClient').build();
//       const result = new Promise<string>((resolve, reject) => {
//          _local.client.pingPong(request, (error: ServiceError | null, response: PingPongMessage) => {
//             error ? reject(error) : resolve('success');
//          });
//       });
//       expect(result).resolves.toBe('success').then(done()).catch(console.log);
//    });
//
// });
