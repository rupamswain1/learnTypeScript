
interface UserProps{
    name?:string;
    age?:number;
}

type Callback= ()=>void;

export class User{

    events:{[key:string]:Callback[]}={};

    constructor(private data:UserProps){}

    get(propName:string):number|string{
        return this.data[propName]
    }

    set(data:UserProps):void{
        Object.assign(this.data,data)
    }

    on(eventName:string,callBack:Callback){
        const handlers=this.events[eventName]||[];
        handlers.push(callBack);
        this.events[eventName]=handlers;
    }

    trigger(eventName:string):void{
        const eventList=this.events[eventName];
        if(!eventList||eventList.length===0){
            return;
        }
        eventList.forEach(callBack=>{
            callBack();
        })
    }
}