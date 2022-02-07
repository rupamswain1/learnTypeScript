import { Collection } from "../Models/Collection";

export abstract class CollectionView<T,K>{
    constructor(public parent:Element, public collection:Collection<T,K>){}
    abstract renderItem(model:T,itemParent:Element):void;

    render=():void=>{
        this.parent.innerHTML='';
        const templateElement=document.createElement('template');
        console.log(this.collection);
        
        for(let mode of this.collection.model){          
            const itemParent=document.createElement('div');
            this.renderItem(mode,itemParent);
            templateElement.content.append(itemParent);
        }

        this.parent.append(templateElement.content);
        
    }
}