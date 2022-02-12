import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetaDataKeys } from './MetadataKey';

export function use(middleware:RequestHandler){
    return function(target:any,key:string, desc:PropertyDescriptor){
        const middlewares=Reflect.getMetadata(MetaDataKeys.middleware,target,key)||[];
        Reflect.defineMetadata(MetaDataKeys.middleware,[...middlewares,middleware],target,key);
    };
}