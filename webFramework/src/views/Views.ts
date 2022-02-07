import { Models } from "../Models/Models";


export abstract class Views<T extends Models<K>,K>{
    regions:{[key:string]:Element}={}
    constructor(public parent:Element, public model:T){
        this.bindModel();
    }

    eventsMap():{[key:string]:()=>void}{
        return {};
    }
    abstract template():string;

    regionMap():{[key:string]:string}{
        return{};
    }

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

    mapRegions(fragments:DocumentFragment):void{
        const regionsMap=this.regionMap();
        for(let key in regionsMap){
            const selector=regionsMap[key];
            const element=fragments.querySelector(selector);
            if(element){
                this.regions[key]=element;
            }
            

        }
    }

    onRender():void{
        
    }

    render():void{
        this.parent.innerHTML='';
        const templateElement=document.createElement('template');
        templateElement.innerHTML=this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.onRender();
        this.parent.append(templateElement.content);
    }
}