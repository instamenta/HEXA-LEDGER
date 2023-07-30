"use strict";
var jspb = require('google-protobuf');
var goog = jspb;
var global = (function () {
    if (this) {
        return this;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    return Function('return this')();
}.call(null));
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.user.FollowUserRequest', null, global);
goog.exportSymbol('proto.user.GetAllUsersRequest', null, global);
goog.exportSymbol('proto.user.GetUserByIdRequest', null, global);
goog.exportSymbol('proto.user.GetUserFollowersRequest', null, global);
goog.exportSymbol('proto.user.GetUserFollowersResponse', null, global);
goog.exportSymbol('proto.user.GetUserFollowingRequest', null, global);
goog.exportSymbol('proto.user.GetUserFollowingResponse', null, global);
goog.exportSymbol('proto.user.GetUsersRequest', null, global);
goog.exportSymbol('proto.user.LoginForm', null, global);
goog.exportSymbol('proto.user.RegisterForm', null, global);
goog.exportSymbol('proto.user.UnfollowUserRequest', null, global);
goog.exportSymbol('proto.user.UpdateForm', null, global);
goog.exportSymbol('proto.user.UserModel', null, global);
goog.exportSymbol('proto.user.UserWallet', null, global);
goog.exportSymbol('proto.user.idRequest', null, global);
proto.user.UserModel = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.user.UserModel.repeatedFields_, null);
};
goog.inherits(proto.user.UserModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.UserModel.displayName = 'proto.user.UserModel';
}
proto.user.LoginForm = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.LoginForm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.LoginForm.displayName = 'proto.user.LoginForm';
}
proto.user.RegisterForm = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.RegisterForm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.RegisterForm.displayName = 'proto.user.RegisterForm';
}
proto.user.UpdateForm = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.UpdateForm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.UpdateForm.displayName = 'proto.user.UpdateForm';
}
proto.user.UserWallet = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.UserWallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.UserWallet.displayName = 'proto.user.UserWallet';
}
proto.user.GetAllUsersRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetAllUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetAllUsersRequest.displayName = 'proto.user.GetAllUsersRequest';
}
proto.user.GetUsersRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.user.GetUsersRequest.repeatedFields_, null);
};
goog.inherits(proto.user.GetUsersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUsersRequest.displayName = 'proto.user.GetUsersRequest';
}
proto.user.GetUserByIdRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUserByIdRequest.displayName = 'proto.user.GetUserByIdRequest';
}
proto.user.GetUserFollowersRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserFollowersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUserFollowersRequest.displayName = 'proto.user.GetUserFollowersRequest';
}
proto.user.GetUserFollowersResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.user.GetUserFollowersResponse.repeatedFields_, null);
};
goog.inherits(proto.user.GetUserFollowersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUserFollowersResponse.displayName = 'proto.user.GetUserFollowersResponse';
}
proto.user.GetUserFollowingRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.GetUserFollowingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUserFollowingRequest.displayName = 'proto.user.GetUserFollowingRequest';
}
proto.user.GetUserFollowingResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.user.GetUserFollowingResponse.repeatedFields_, null);
};
goog.inherits(proto.user.GetUserFollowingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.GetUserFollowingResponse.displayName = 'proto.user.GetUserFollowingResponse';
}
proto.user.FollowUserRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.FollowUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.FollowUserRequest.displayName = 'proto.user.FollowUserRequest';
}
proto.user.UnfollowUserRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.UnfollowUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.UnfollowUserRequest.displayName = 'proto.user.UnfollowUserRequest';
}
proto.user.idRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.user.idRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.user.idRequest.displayName = 'proto.user.idRequest';
}
proto.user.UserModel.repeatedFields_ = [8, 9, 10];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.UserModel.prototype.toObject = function (opt_includeInstance) {
        return proto.user.UserModel.toObject(opt_includeInstance, this);
    };
    proto.user.UserModel.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            username: (f = msg.getUsername()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            password: (f = msg.getPassword()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            picture: (f = msg.getPicture()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            token: (f = msg.getToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            userwallet: (f = msg.getUserwallet()) && proto.user.UserWallet.toObject(includeInstance, f),
            followersList: jspb.Message.toObjectList(msg.getFollowersList(), google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
            followingList: jspb.Message.toObjectList(msg.getFollowingList(), google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
            postsList: jspb.Message.toObjectList(msg.getPostsList(), google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.UserModel.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.UserModel;
    return proto.user.UserModel.deserializeBinaryFromReader(msg, reader);
};
proto.user.UserModel.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setUsername(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setEmail(value);
                break;
            case 4:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setPassword(value);
                break;
            case 5:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setPicture(value);
                break;
            case 6:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setToken(value);
                break;
            case 7:
                var value = new proto.user.UserWallet;
                reader.readMessage(value, proto.user.UserWallet.deserializeBinaryFromReader);
                msg.setUserwallet(value);
                break;
            case 8:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.addFollowers(value);
                break;
            case 9:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.addFollowing(value);
                break;
            case 10:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.addPosts(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.UserModel.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.UserModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.UserModel.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getUsername();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getEmail();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPassword();
    if (f != null) {
        writer.writeMessage(4, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPicture();
    if (f != null) {
        writer.writeMessage(5, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getToken();
    if (f != null) {
        writer.writeMessage(6, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getUserwallet();
    if (f != null) {
        writer.writeMessage(7, f, proto.user.UserWallet.serializeBinaryToWriter);
    }
    f = message.getFollowersList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(8, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getFollowingList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(9, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPostsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(10, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.UserModel.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.UserModel.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.UserModel.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.UserModel.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.UserModel.prototype.getUsername = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.UserModel.prototype.setUsername = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.UserModel.prototype.clearUsername = function () {
    return this.setUsername(undefined);
};
proto.user.UserModel.prototype.hasUsername = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.UserModel.prototype.getEmail = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};
proto.user.UserModel.prototype.setEmail = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.UserModel.prototype.clearEmail = function () {
    return this.setEmail(undefined);
};
proto.user.UserModel.prototype.hasEmail = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.user.UserModel.prototype.getPassword = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};
proto.user.UserModel.prototype.setPassword = function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
};
proto.user.UserModel.prototype.clearPassword = function () {
    return this.setPassword(undefined);
};
proto.user.UserModel.prototype.hasPassword = function () {
    return jspb.Message.getField(this, 4) != null;
};
proto.user.UserModel.prototype.getPicture = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};
proto.user.UserModel.prototype.setPicture = function (value) {
    return jspb.Message.setWrapperField(this, 5, value);
};
proto.user.UserModel.prototype.clearPicture = function () {
    return this.setPicture(undefined);
};
proto.user.UserModel.prototype.hasPicture = function () {
    return jspb.Message.getField(this, 5) != null;
};
proto.user.UserModel.prototype.getToken = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};
proto.user.UserModel.prototype.setToken = function (value) {
    return jspb.Message.setWrapperField(this, 6, value);
};
proto.user.UserModel.prototype.clearToken = function () {
    return this.setToken(undefined);
};
proto.user.UserModel.prototype.hasToken = function () {
    return jspb.Message.getField(this, 6) != null;
};
proto.user.UserModel.prototype.getUserwallet = function () {
    return (jspb.Message.getWrapperField(this, proto.user.UserWallet, 7));
};
proto.user.UserModel.prototype.setUserwallet = function (value) {
    return jspb.Message.setWrapperField(this, 7, value);
};
proto.user.UserModel.prototype.clearUserwallet = function () {
    return this.setUserwallet(undefined);
};
proto.user.UserModel.prototype.hasUserwallet = function () {
    return jspb.Message.getField(this, 7) != null;
};
proto.user.UserModel.prototype.getFollowersList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};
proto.user.UserModel.prototype.setFollowersList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 8, value);
};
proto.user.UserModel.prototype.addFollowers = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.StringValue, opt_index);
};
proto.user.UserModel.prototype.clearFollowersList = function () {
    return this.setFollowersList([]);
};
proto.user.UserModel.prototype.getFollowingList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};
proto.user.UserModel.prototype.setFollowingList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 9, value);
};
proto.user.UserModel.prototype.addFollowing = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.protobuf.StringValue, opt_index);
};
proto.user.UserModel.prototype.clearFollowingList = function () {
    return this.setFollowingList([]);
};
proto.user.UserModel.prototype.getPostsList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};
proto.user.UserModel.prototype.setPostsList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 10, value);
};
proto.user.UserModel.prototype.addPosts = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.protobuf.StringValue, opt_index);
};
proto.user.UserModel.prototype.clearPostsList = function () {
    return this.setPostsList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.LoginForm.prototype.toObject = function (opt_includeInstance) {
        return proto.user.LoginForm.toObject(opt_includeInstance, this);
    };
    proto.user.LoginForm.toObject = function (includeInstance, msg) {
        var f, obj = {
            email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            password: (f = msg.getPassword()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.LoginForm.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.LoginForm;
    return proto.user.LoginForm.deserializeBinaryFromReader(msg, reader);
};
proto.user.LoginForm.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setEmail(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setPassword(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.LoginForm.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.LoginForm.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.LoginForm.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getEmail();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPassword();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.LoginForm.prototype.getEmail = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.LoginForm.prototype.setEmail = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.LoginForm.prototype.clearEmail = function () {
    return this.setEmail(undefined);
};
proto.user.LoginForm.prototype.hasEmail = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.LoginForm.prototype.getPassword = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.LoginForm.prototype.setPassword = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.LoginForm.prototype.clearPassword = function () {
    return this.setPassword(undefined);
};
proto.user.LoginForm.prototype.hasPassword = function () {
    return jspb.Message.getField(this, 2) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.RegisterForm.prototype.toObject = function (opt_includeInstance) {
        return proto.user.RegisterForm.toObject(opt_includeInstance, this);
    };
    proto.user.RegisterForm.toObject = function (includeInstance, msg) {
        var f, obj = {
            username: (f = msg.getUsername()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            password: (f = msg.getPassword()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.RegisterForm.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.RegisterForm;
    return proto.user.RegisterForm.deserializeBinaryFromReader(msg, reader);
};
proto.user.RegisterForm.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setUsername(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setEmail(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setPassword(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.RegisterForm.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.RegisterForm.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.RegisterForm.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getUsername();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getEmail();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPassword();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.RegisterForm.prototype.getUsername = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.RegisterForm.prototype.setUsername = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.RegisterForm.prototype.clearUsername = function () {
    return this.setUsername(undefined);
};
proto.user.RegisterForm.prototype.hasUsername = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.RegisterForm.prototype.getEmail = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.RegisterForm.prototype.setEmail = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.RegisterForm.prototype.clearEmail = function () {
    return this.setEmail(undefined);
};
proto.user.RegisterForm.prototype.hasEmail = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.RegisterForm.prototype.getPassword = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};
proto.user.RegisterForm.prototype.setPassword = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.RegisterForm.prototype.clearPassword = function () {
    return this.setPassword(undefined);
};
proto.user.RegisterForm.prototype.hasPassword = function () {
    return jspb.Message.getField(this, 3) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.UpdateForm.prototype.toObject = function (opt_includeInstance) {
        return proto.user.UpdateForm.toObject(opt_includeInstance, this);
    };
    proto.user.UpdateForm.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            username: (f = msg.getUsername()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            email: (f = msg.getEmail()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            password: (f = msg.getPassword()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.UpdateForm.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.UpdateForm;
    return proto.user.UpdateForm.deserializeBinaryFromReader(msg, reader);
};
proto.user.UpdateForm.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setUsername(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setEmail(value);
                break;
            case 4:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setPassword(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.UpdateForm.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.UpdateForm.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.UpdateForm.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getUsername();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getEmail();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getPassword();
    if (f != null) {
        writer.writeMessage(4, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.UpdateForm.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.UpdateForm.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.UpdateForm.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.UpdateForm.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.UpdateForm.prototype.getUsername = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.UpdateForm.prototype.setUsername = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.UpdateForm.prototype.clearUsername = function () {
    return this.setUsername(undefined);
};
proto.user.UpdateForm.prototype.hasUsername = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.UpdateForm.prototype.getEmail = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};
proto.user.UpdateForm.prototype.setEmail = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.UpdateForm.prototype.clearEmail = function () {
    return this.setEmail(undefined);
};
proto.user.UpdateForm.prototype.hasEmail = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.user.UpdateForm.prototype.getPassword = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};
proto.user.UpdateForm.prototype.setPassword = function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
};
proto.user.UpdateForm.prototype.clearPassword = function () {
    return this.setPassword(undefined);
};
proto.user.UpdateForm.prototype.hasPassword = function () {
    return jspb.Message.getField(this, 4) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.UserWallet.prototype.toObject = function (opt_includeInstance) {
        return proto.user.UserWallet.toObject(opt_includeInstance, this);
    };
    proto.user.UserWallet.toObject = function (includeInstance, msg) {
        var f, obj = {
            token: (f = msg.getToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            amount: (f = msg.getAmount()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            tousd: (f = msg.getTousd()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.UserWallet.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.UserWallet;
    return proto.user.UserWallet.deserializeBinaryFromReader(msg, reader);
};
proto.user.UserWallet.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setToken(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setAmount(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setTousd(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.UserWallet.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.UserWallet.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.UserWallet.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getToken();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getAmount();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getTousd();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.UserWallet.prototype.getToken = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.UserWallet.prototype.setToken = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.UserWallet.prototype.clearToken = function () {
    return this.setToken(undefined);
};
proto.user.UserWallet.prototype.hasToken = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.UserWallet.prototype.getAmount = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.UserWallet.prototype.setAmount = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.UserWallet.prototype.clearAmount = function () {
    return this.setAmount(undefined);
};
proto.user.UserWallet.prototype.hasAmount = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.UserWallet.prototype.getTousd = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};
proto.user.UserWallet.prototype.setTousd = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.UserWallet.prototype.clearTousd = function () {
    return this.setTousd(undefined);
};
proto.user.UserWallet.prototype.hasTousd = function () {
    return jspb.Message.getField(this, 3) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetAllUsersRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetAllUsersRequest.toObject(opt_includeInstance, this);
    };
    proto.user.GetAllUsersRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            limit: (f = msg.getLimit()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
            page: (f = msg.getPage()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetAllUsersRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetAllUsersRequest;
    return proto.user.GetAllUsersRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetAllUsersRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setLimit(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setPage(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetAllUsersRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetAllUsersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetAllUsersRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getLimit();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
    f = message.getPage();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
};
proto.user.GetAllUsersRequest.prototype.getLimit = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};
proto.user.GetAllUsersRequest.prototype.setLimit = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.GetAllUsersRequest.prototype.clearLimit = function () {
    return this.setLimit(undefined);
};
proto.user.GetAllUsersRequest.prototype.hasLimit = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.GetAllUsersRequest.prototype.getPage = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};
proto.user.GetAllUsersRequest.prototype.setPage = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.GetAllUsersRequest.prototype.clearPage = function () {
    return this.setPage(undefined);
};
proto.user.GetAllUsersRequest.prototype.hasPage = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.GetUsersRequest.repeatedFields_ = [5];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUsersRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUsersRequest.toObject(opt_includeInstance, this);
    };
    proto.user.GetUsersRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            limit: (f = msg.getLimit()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
            page: (f = msg.getPage()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
            filter: (f = msg.getFilter()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            match: (f = msg.getMatch()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            idsList: jspb.Message.toObjectList(msg.getIdsList(), google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUsersRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUsersRequest;
    return proto.user.GetUsersRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUsersRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setLimit(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setPage(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setFilter(value);
                break;
            case 4:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setMatch(value);
                break;
            case 5:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.addIds(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUsersRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUsersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUsersRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getLimit();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
    f = message.getPage();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
    f = message.getFilter();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getMatch();
    if (f != null) {
        writer.writeMessage(4, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getIdsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(5, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.GetUsersRequest.prototype.getLimit = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};
proto.user.GetUsersRequest.prototype.setLimit = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.GetUsersRequest.prototype.clearLimit = function () {
    return this.setLimit(undefined);
};
proto.user.GetUsersRequest.prototype.hasLimit = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.GetUsersRequest.prototype.getPage = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};
proto.user.GetUsersRequest.prototype.setPage = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.GetUsersRequest.prototype.clearPage = function () {
    return this.setPage(undefined);
};
proto.user.GetUsersRequest.prototype.hasPage = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.GetUsersRequest.prototype.getFilter = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};
proto.user.GetUsersRequest.prototype.setFilter = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.GetUsersRequest.prototype.clearFilter = function () {
    return this.setFilter(undefined);
};
proto.user.GetUsersRequest.prototype.hasFilter = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.user.GetUsersRequest.prototype.getMatch = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};
proto.user.GetUsersRequest.prototype.setMatch = function (value) {
    return jspb.Message.setWrapperField(this, 4, value);
};
proto.user.GetUsersRequest.prototype.clearMatch = function () {
    return this.setMatch(undefined);
};
proto.user.GetUsersRequest.prototype.hasMatch = function () {
    return jspb.Message.getField(this, 4) != null;
};
proto.user.GetUsersRequest.prototype.getIdsList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};
proto.user.GetUsersRequest.prototype.setIdsList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 5, value);
};
proto.user.GetUsersRequest.prototype.addIds = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.StringValue, opt_index);
};
proto.user.GetUsersRequest.prototype.clearIdsList = function () {
    return this.setIdsList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUserByIdRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUserByIdRequest.toObject(opt_includeInstance, this);
    };
    proto.user.GetUserByIdRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUserByIdRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUserByIdRequest;
    return proto.user.GetUserByIdRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUserByIdRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUserByIdRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUserByIdRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUserByIdRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.GetUserByIdRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.GetUserByIdRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.GetUserByIdRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.GetUserByIdRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUserFollowersRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUserFollowersRequest.toObject(opt_includeInstance, this);
    };
    proto.user.GetUserFollowersRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            limit: (f = msg.getLimit()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
            page: (f = msg.getPage()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUserFollowersRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUserFollowersRequest;
    return proto.user.GetUserFollowersRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUserFollowersRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setLimit(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setPage(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUserFollowersRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUserFollowersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUserFollowersRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getLimit();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
    f = message.getPage();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
};
proto.user.GetUserFollowersRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.GetUserFollowersRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.GetUserFollowersRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.GetUserFollowersRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.GetUserFollowersRequest.prototype.getLimit = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};
proto.user.GetUserFollowersRequest.prototype.setLimit = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.GetUserFollowersRequest.prototype.clearLimit = function () {
    return this.setLimit(undefined);
};
proto.user.GetUserFollowersRequest.prototype.hasLimit = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.GetUserFollowersRequest.prototype.getPage = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};
proto.user.GetUserFollowersRequest.prototype.setPage = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.GetUserFollowersRequest.prototype.clearPage = function () {
    return this.setPage(undefined);
};
proto.user.GetUserFollowersRequest.prototype.hasPage = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.user.GetUserFollowersResponse.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUserFollowersResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUserFollowersResponse.toObject(opt_includeInstance, this);
    };
    proto.user.GetUserFollowersResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            followersList: jspb.Message.toObjectList(msg.getFollowersList(), proto.user.UserModel.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUserFollowersResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUserFollowersResponse;
    return proto.user.GetUserFollowersResponse.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUserFollowersResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.user.UserModel;
                reader.readMessage(value, proto.user.UserModel.deserializeBinaryFromReader);
                msg.addFollowers(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUserFollowersResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUserFollowersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUserFollowersResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getFollowersList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.user.UserModel.serializeBinaryToWriter);
    }
};
proto.user.GetUserFollowersResponse.prototype.getFollowersList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.user.UserModel, 1));
};
proto.user.GetUserFollowersResponse.prototype.setFollowersList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
proto.user.GetUserFollowersResponse.prototype.addFollowers = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.user.UserModel, opt_index);
};
proto.user.GetUserFollowersResponse.prototype.clearFollowersList = function () {
    return this.setFollowersList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUserFollowingRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUserFollowingRequest.toObject(opt_includeInstance, this);
    };
    proto.user.GetUserFollowingRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            limit: (f = msg.getLimit()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
            page: (f = msg.getPage()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUserFollowingRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUserFollowingRequest;
    return proto.user.GetUserFollowingRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUserFollowingRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setLimit(value);
                break;
            case 3:
                var value = new google_protobuf_wrappers_pb.Int32Value;
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
                msg.setPage(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUserFollowingRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUserFollowingRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUserFollowingRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getLimit();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
    f = message.getPage();
    if (f != null) {
        writer.writeMessage(3, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter);
    }
};
proto.user.GetUserFollowingRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.GetUserFollowingRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.GetUserFollowingRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.GetUserFollowingRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.GetUserFollowingRequest.prototype.getLimit = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};
proto.user.GetUserFollowingRequest.prototype.setLimit = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.GetUserFollowingRequest.prototype.clearLimit = function () {
    return this.setLimit(undefined);
};
proto.user.GetUserFollowingRequest.prototype.hasLimit = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.user.GetUserFollowingRequest.prototype.getPage = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};
proto.user.GetUserFollowingRequest.prototype.setPage = function (value) {
    return jspb.Message.setWrapperField(this, 3, value);
};
proto.user.GetUserFollowingRequest.prototype.clearPage = function () {
    return this.setPage(undefined);
};
proto.user.GetUserFollowingRequest.prototype.hasPage = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.user.GetUserFollowingResponse.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.GetUserFollowingResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.user.GetUserFollowingResponse.toObject(opt_includeInstance, this);
    };
    proto.user.GetUserFollowingResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            followingList: jspb.Message.toObjectList(msg.getFollowingList(), proto.user.UserModel.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.GetUserFollowingResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.GetUserFollowingResponse;
    return proto.user.GetUserFollowingResponse.deserializeBinaryFromReader(msg, reader);
};
proto.user.GetUserFollowingResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.user.UserModel;
                reader.readMessage(value, proto.user.UserModel.deserializeBinaryFromReader);
                msg.addFollowing(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.GetUserFollowingResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.GetUserFollowingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.GetUserFollowingResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getFollowingList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.user.UserModel.serializeBinaryToWriter);
    }
};
proto.user.GetUserFollowingResponse.prototype.getFollowingList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.user.UserModel, 1));
};
proto.user.GetUserFollowingResponse.prototype.setFollowingList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
proto.user.GetUserFollowingResponse.prototype.addFollowing = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.user.UserModel, opt_index);
};
proto.user.GetUserFollowingResponse.prototype.clearFollowingList = function () {
    return this.setFollowingList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.FollowUserRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.FollowUserRequest.toObject(opt_includeInstance, this);
    };
    proto.user.FollowUserRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            currentUserId: (f = msg.getCurrentUserId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.FollowUserRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.FollowUserRequest;
    return proto.user.FollowUserRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.FollowUserRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setCurrentUserId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.FollowUserRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.FollowUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.FollowUserRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getCurrentUserId();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.FollowUserRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.FollowUserRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.FollowUserRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.FollowUserRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.FollowUserRequest.prototype.getCurrentUserId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.FollowUserRequest.prototype.setCurrentUserId = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.FollowUserRequest.prototype.clearCurrentUserId = function () {
    return this.setCurrentUserId(undefined);
};
proto.user.FollowUserRequest.prototype.hasCurrentUserId = function () {
    return jspb.Message.getField(this, 2) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.UnfollowUserRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.UnfollowUserRequest.toObject(opt_includeInstance, this);
    };
    proto.user.UnfollowUserRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
            currentUserId: (f = msg.getCurrentUserId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.UnfollowUserRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.UnfollowUserRequest;
    return proto.user.UnfollowUserRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.UnfollowUserRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            case 2:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setCurrentUserId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.UnfollowUserRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.UnfollowUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.UnfollowUserRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
    f = message.getCurrentUserId();
    if (f != null) {
        writer.writeMessage(2, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.UnfollowUserRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.UnfollowUserRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.UnfollowUserRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.UnfollowUserRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.user.UnfollowUserRequest.prototype.getCurrentUserId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};
proto.user.UnfollowUserRequest.prototype.setCurrentUserId = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
proto.user.UnfollowUserRequest.prototype.clearCurrentUserId = function () {
    return this.setCurrentUserId(undefined);
};
proto.user.UnfollowUserRequest.prototype.hasCurrentUserId = function () {
    return jspb.Message.getField(this, 2) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.user.idRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.user.idRequest.toObject(opt_includeInstance, this);
    };
    proto.user.idRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: (f = msg.getId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.user.idRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.user.idRequest;
    return proto.user.idRequest.deserializeBinaryFromReader(msg, reader);
};
proto.user.idRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.StringValue;
                reader.readMessage(value, google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
                msg.setId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.user.idRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.user.idRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.user.idRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter);
    }
};
proto.user.idRequest.prototype.getId = function () {
    return (jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};
proto.user.idRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.user.idRequest.prototype.clearId = function () {
    return this.setId(undefined);
};
proto.user.idRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null;
};
goog.object.extend(exports, proto.user);