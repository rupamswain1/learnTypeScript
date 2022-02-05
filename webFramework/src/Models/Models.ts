import { AxiosResponse } from "axios";
import { AxiosPromise } from "axios";


interface Eventing{
    on(eventName:string,callBack:()=>void):void;
    trigger(eventName:string):void;
}

interface Sync<T>{
    fetch(id:number):AxiosPromise;
    save(data:T):AxiosPromise;
}

interface Attributes<T>{
    set(value:T):void;
    get<K extends keyof T>(key:K):T[K];
    getAll():T;
}

interface HasId{
    id?:number
}

export class Models<T extends HasId>{
    constructor(
        private events:Eventing,
        private sync:Sync<T>,
        private attributes:Attributes<T>
    ){}

    get on(){
        return this.events.on;
    }

    get trigger(){
        return this.events.trigger;
    }

    get get(){
        return this.attributes.get;
    }

    set(update:T):void{
        this.attributes.set(update);
        this.events.trigger('change')
    }

    fetch():void{
        const id=this.get('id');
        if(typeof id!=='number'){
            throw new Error('Cannor fetch without an ID');
        }

        this.sync.fetch(id)
        .then((response:AxiosResponse):void=>{
            this.set(response.data)
        })
    }

    save():void{
        this.sync.save(this.attributes.getAll())
        .then((response:AxiosResponse)=>{
            this.trigger('save');
        })
        .catch(()=>{
            this.trigger('error')
        })
    }
    
}