import * as GRPC from '@grpc/grpc-js';
import {UserServiceClient} from '../protos/generated/users_grpc_pb';

const CLIENT = new UserServiceClient(
	'user-remote:50051',
	GRPC.credentials.createInsecure()
);

export default CLIENT;
