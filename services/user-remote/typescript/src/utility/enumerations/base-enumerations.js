"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAttr = exports.UAttr = void 0;
var UAttr;
(function (UAttr) {
    UAttr["_ID"] = "_id";
    UAttr["USER"] = "username";
    UAttr["EMAIL"] = "email";
    UAttr["PASSWORD"] = "password";
    UAttr["PICTURE"] = "picture";
    UAttr["FOLLOWERS"] = "followers";
    UAttr["FOLLOWING"] = "following";
})(UAttr || (exports.UAttr = UAttr = {}));
var LogAttr;
(function (LogAttr) {
    LogAttr["DEFAULT"] = "DEFAULT";
    LogAttr["ERROR"] = "ERROR";
    LogAttr["DEBUG"] = "DEBUG";
    LogAttr["COLLECT"] = "COLLECT";
    LogAttr["CRITICAL"] = "CRITICAL";
    LogAttr["INFO"] = "INFO";
})(LogAttr || (exports.LogAttr = LogAttr = {}));
