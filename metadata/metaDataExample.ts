import 'reflect-metadata';

const metaTest={
    data:'Hi',
}
//Adding a new Meta Data to the object
Reflect.defineMetadata('newData','this is the new meta data',metaTest);

const newData=Reflect.getMetadata('newData',metaTest);

console.log(newData);

//Adding a new metaData to the data attribute
Reflect.defineMetadata('nestedData','this is the nee metaData inside Data',metaTest,'data');
const nestedMeta=Reflect.getMetadata('nestedData',metaTest,'data');
console.log(nestedMeta);



