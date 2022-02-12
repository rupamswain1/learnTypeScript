"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKey_1 = require("./MetadataKey");
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid Request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Not found body property " + key);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKey_1.MetaDataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKey_1.MetaDataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKey_1.MetaDataKeys.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKey_1.MetaDataKeys.validator, target.prototype, key) || [];
            var validator = bodyValidator(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [validator, routeHandler]));
            }
        }
    };
}
exports.controller = controller;
