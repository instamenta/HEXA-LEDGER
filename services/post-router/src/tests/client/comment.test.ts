/** @file Test file for comment client. */
//
// Import request from 'supertest';
// Import * as jest from 'jest';
// Import * as grpc from '@grpc/grpc-js';
// Import API from '../../index';
// Import grpcClient from '../../client/grpc-client';
//
//
// // Mock the gRPC service client
// Jest.mock('../src/grpc', () => {
//    Return {
//       YourGRPCServiceClient: jest.fn(() => ({
//          GetPosts: jest.fn((request, callback) => {
//             // Simulate gRPC response
//             Const response = {posts: [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}]};
//             Callback(null, response);
//          }),
//       })),
//    };
// });
//
// Describe('POST Router', () => {
//    Let app;
//
//    BeforeAll(() => {
//       App = createApp(); // Create and configure your Express app
//    });
//
//    It('should get a list of posts from the gRPC server', async () => {
//       Const response = await request(app).get('/posts');
//
//       // Perform assertions on the response
//       Expect(response.status).toBe(200);
//       Expect(response.body).toEqual([
//          {id: 1, title: 'Post 1'},
//          {id: 2, title: 'Post 2'},
//       ]);
//    });
// });
