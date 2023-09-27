import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {ThreadsClient} from '../src/generated/grpc/types/threads_grpc_pb';
import * as GRPC_I from '../src/generated/grpc/types/threads_pb';
import {ChannelCredentials} from "@grpc/grpc-js";

const proto = require('../src/generated/grpc/javascript/threads_pb');

describe('Your Test Suite Name', () => {
    let client: ThreadsClient;

    beforeAll(() => {
        // Initialize your client and any necessary setup here
        client = new ThreadsClient(
            'localhost:50054',
            ChannelCredentials.createInsecure()
        );
    });

    afterAll(() => {
        // Clean up any resources if needed
    });

    test('Your Test Case Name', (done) => {
        const request = new proto.Pagination()
            .setLimit(new UInt64Value().setValue(20))
            .setPage(new UInt64Value().setValue(0))
        ;

        const $_call = client.getMany(request);

        $_call.on('status', (status) => {
            console.log({count: status.metadata.getMap().count})
            done();
        });

        $_call.on('data', (data: GRPC_I.ThreadModel) => console.table(data.toObject()));
        $_call.on('error', (error) => {
            console.error(error);
            done.fail();
        });
    });
});
