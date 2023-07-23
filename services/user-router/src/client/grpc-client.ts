import * as GRPC from '@grpc/grpc-js';
import {UserServiceClient} from '../protos/generated/users_grpc_pb';
const USER_REMOTE_REF = process.env.USER_REMOTE_REF || 'user-remote-api'
	, USER_REMOTE_PORT = process.env.USER_REMOTE_PORT || 50_051;

const GRPC_CLIENT = new UserServiceClient(
	`${USER_REMOTE_REF}:${USER_REMOTE_PORT}`,
	GRPC.credentials.createInsecure()
);

export default GRPC_CLIENT;
