import { Models } from "../Models/Models";


export abstract class Views<T extends Models<K>,K>{
    constructor(public parent:Element, public model:T){
        this.bindModel();
    }

    eventsMap():{[key:string]:()=>void}{
        return {};
    }
    abstract template():string;

    bindModel(){
        this.model.on('change',()=>{
            this.render()
        })
    }

    bindEvents(fragments:DocumentFragment):void{
        const eventsMap=this.eventsMap();

        for(let eventKey in eventsMap){
            const [eventName,selector]=eventKey.split(':');

            fragments.querySelectorAll(selector).forEach(element=>{
                element.addEventListener(eventName,eventsMap[eventKey])
            })
        }
    }

    render():void{
        this.parent.innerHTML='';
        const templateElement=document.createElement('template');
        templateElement.innerHTML=this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content);
    }
}