type Callback= ()=>void;


export class Eventing{
    events:{[key:string]:Callback[]}={};
    on(eventName:string,callBack:Callback){
        console.log('on method is called');
        
        const handlers=this.events[eventName]||[];
        handlers.push(callBack);
        this.events[eventName]=handlers;
    };

    trigger(eventName:string):void{
        console.log('trigger is called');
        
        const eventList=this.events[eventName];
        if(!eventList||eventList.length===0){
            return;
        }
        eventList.forEach(callBack=>{
            callBack();
        })
    };
}