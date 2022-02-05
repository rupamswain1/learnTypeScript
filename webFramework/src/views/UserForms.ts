import {User} from '../Models/Users';

export class UserForms{
    constructor(public parent:Element, public model:User){}

    eventsMap():{[key:string]:()=>void}{
        return{
            'mouseenter:h1':this.onHover,
            'click:.set-age':this.setAge,
        }
    }

    setAge(){
        console.log('set age is clicked');
        
    }
    onHover(){
        console.log('heading hover');
    }

    onButtonClick(){
        console.log('button clicked');
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
    template():string{
        return `
            <div>
                <h1>User Form</h1>
                <div>Name: ${this.model.get('name')}</div>
                <div>Age: ${this.model.get('age')}</div>
                <input/>
                <button>Click Me</button>
                <button class="set-age">Set Age</button>
            </div>
        `
    }

    render():void{
        const templateElement=document.createElement('template');
        templateElement.innerHTML=this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content);
    }
}