import * as GRPC from '@grpc/grpc-js';
import {PostServiceClient} from '../protos/generated/posts_grpc_pb';

const CLIENT = new PostServiceClient(
	'user-remote:50052',
	GRPC.credentials.createInsecure()
);

export default CLIENT;
