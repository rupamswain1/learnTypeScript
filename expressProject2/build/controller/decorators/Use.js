"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKey_1 = require("./MetadataKey");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKey_1.MetaDataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetadataKey_1.MetaDataKeys.middleware, __spreadArray(__spreadArray([], middlewares), [middleware]), target, key);
    };
}
exports.use = use;
