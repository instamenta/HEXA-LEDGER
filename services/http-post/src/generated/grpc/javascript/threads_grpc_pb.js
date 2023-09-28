// GENERATED CODE -- DO NOT EDIT!
// @ts-nocheck
'use strict';
var grpc = require('@grpc/grpc-js');
var threads_pb = require('./threads_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Int32Value(arg) {
  if (!(arg instanceof google_protobuf_wrappers_pb.Int32Value)) {
    throw new Error('Expected argument of type google.protobuf.Int32Value');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Int32Value(buffer_arg) {
  return google_protobuf_wrappers_pb.Int32Value.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_AmountWithAuthRequest(arg) {
  if (!(arg instanceof threads_pb.AmountWithAuthRequest)) {
    throw new Error('Expected argument of type threads.AmountWithAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_AmountWithAuthRequest(buffer_arg) {
  return threads_pb.AmountWithAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_CreateRequest(arg) {
  if (!(arg instanceof threads_pb.CreateRequest)) {
    throw new Error('Expected argument of type threads.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_CreateRequest(buffer_arg) {
  return threads_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_IdRequest(arg) {
  if (!(arg instanceof threads_pb.IdRequest)) {
    throw new Error('Expected argument of type threads.IdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_IdRequest(buffer_arg) {
  return threads_pb.IdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_Pagination(arg) {
  if (!(arg instanceof threads_pb.Pagination)) {
    throw new Error('Expected argument of type threads.Pagination');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_Pagination(buffer_arg) {
  return threads_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_StatsModel(arg) {
  if (!(arg instanceof threads_pb.StatsModel)) {
    throw new Error('Expected argument of type threads.StatsModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_StatsModel(buffer_arg) {
  return threads_pb.StatsModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_ThreadModel(arg) {
  if (!(arg instanceof threads_pb.ThreadModel)) {
    throw new Error('Expected argument of type threads.ThreadModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_ThreadModel(buffer_arg) {
  return threads_pb.ThreadModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_threads_WalletWithAuthRequest(arg) {
  if (!(arg instanceof threads_pb.WalletWithAuthRequest)) {
    throw new Error('Expected argument of type threads.WalletWithAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_threads_WalletWithAuthRequest(buffer_arg) {
  return threads_pb.WalletWithAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ThreadsService = exports.ThreadsService = {
  // CUD
create: {
    path: '/threads.Threads/Create',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.CreateRequest,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_CreateRequest,
    requestDeserialize: deserialize_threads_CreateRequest,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  update: {
    path: '/threads.Threads/Update',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.ThreadModel,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_ThreadModel,
    requestDeserialize: deserialize_threads_ThreadModel,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  delete: {
    path: '/threads.Threads/Delete',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.IdRequest,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_IdRequest,
    requestDeserialize: deserialize_threads_IdRequest,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  // GETTERS
getMany: {
    path: '/threads.Threads/GetMany',
    requestStream: false,
    responseStream: true,
    requestType: threads_pb.Pagination,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_Pagination,
    requestDeserialize: deserialize_threads_Pagination,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  getTotalCount: {
    path: '/threads.Threads/GetTotalCount',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_wrappers_pb.Int32Value,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Int32Value,
    responseDeserialize: deserialize_google_protobuf_Int32Value,
  },
  getByOwner: {
    path: '/threads.Threads/GetByOwner',
    requestStream: false,
    responseStream: true,
    requestType: threads_pb.IdRequest,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_IdRequest,
    requestDeserialize: deserialize_threads_IdRequest,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  getOne: {
    path: '/threads.Threads/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.IdRequest,
    responseType: threads_pb.ThreadModel,
    requestSerialize: serialize_threads_IdRequest,
    requestDeserialize: deserialize_threads_IdRequest,
    responseSerialize: serialize_threads_ThreadModel,
    responseDeserialize: deserialize_threads_ThreadModel,
  },
  getStatistics: {
    path: '/threads.Threads/GetStatistics',
    requestStream: false,
    responseStream: true,
    requestType: threads_pb.Pagination,
    responseType: threads_pb.StatsModel,
    requestSerialize: serialize_threads_Pagination,
    requestDeserialize: deserialize_threads_Pagination,
    responseSerialize: serialize_threads_StatsModel,
    responseDeserialize: deserialize_threads_StatsModel,
  },
  getLikes: {
    path: '/threads.Threads/GetLikes',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.IdRequest,
    responseType: google_protobuf_wrappers_pb.Int32Value,
    requestSerialize: serialize_threads_IdRequest,
    requestDeserialize: deserialize_threads_IdRequest,
    responseSerialize: serialize_google_protobuf_Int32Value,
    responseDeserialize: deserialize_google_protobuf_Int32Value,
  },
  getDislikes: {
    path: '/threads.Threads/GetDislikes',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.IdRequest,
    responseType: google_protobuf_wrappers_pb.Int32Value,
    requestSerialize: serialize_threads_IdRequest,
    requestDeserialize: deserialize_threads_IdRequest,
    responseSerialize: serialize_google_protobuf_Int32Value,
    responseDeserialize: deserialize_google_protobuf_Int32Value,
  },
  // INTERACTIONS
like: {
    path: '/threads.Threads/Like',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.WalletWithAuthRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_threads_WalletWithAuthRequest,
    requestDeserialize: deserialize_threads_WalletWithAuthRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  dislike: {
    path: '/threads.Threads/Dislike',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.WalletWithAuthRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_threads_WalletWithAuthRequest,
    requestDeserialize: deserialize_threads_WalletWithAuthRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  donate: {
    path: '/threads.Threads/Donate',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.AmountWithAuthRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_threads_AmountWithAuthRequest,
    requestDeserialize: deserialize_threads_AmountWithAuthRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  promote: {
    path: '/threads.Threads/Promote',
    requestStream: false,
    responseStream: false,
    requestType: threads_pb.AmountWithAuthRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_threads_AmountWithAuthRequest,
    requestDeserialize: deserialize_threads_AmountWithAuthRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ThreadsClient = grpc.makeGenericClientConstructor(ThreadsService);
