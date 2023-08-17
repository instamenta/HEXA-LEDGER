/** @file Start and exports the grpc client. */
import * as GRPC from '@grpc/grpc-js';
import {PostServiceClient} from '../protos/generated/posts_grpc_pb';

const POST_REMOTE_REF = process.env['POST_REMOTE_REF'] || 'post-remote'
   , POST_REMOTE_PORT = process.env['POST_REMOTE_PORT'] || 50_052
;
const GRPC_CLIENT = new PostServiceClient(
   `${POST_REMOTE_REF}:${POST_REMOTE_PORT}`,
   GRPC.credentials.createInsecure()
);

export default GRPC_CLIENT;
