import 'reflect-metadata'

@printMetaData
class Plane{
    @flightpath('fly from pune')
    fly():void{
        console.log('vrooooom');    
    }
}

function flightpath(path:string){
    return function(target:Plane,key:string){
        Reflect.defineMetadata('flightPath',path,target,key);
    }
}

function printMetaData(target: typeof Plane){
   
    for(let key in target.prototype){
              
        const flightPathMeta=Reflect.getMetadata('flightPath',target.prototype,key);
        console.log(flightPathMeta);
        
    }
}