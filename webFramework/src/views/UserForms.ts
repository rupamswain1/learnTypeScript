import { Views } from './Views';
import { User, UserProps } from '../Models/Users';


export class UserForms extends Views<User,UserProps>{

    eventsMap():{[key:string]:()=>void}{
        return{
            'click:.set-age':this.setAge,
            'click:.set-name':this.setName,
            'click:.save-btn':this.saveOnClick
        }
    }

    saveOnClick=():void=>{
        this.model.save();
    }

    setName=()=>{
        const input=this.parent.querySelector('input');
        if(input){
            const name=input.value;
            this.model.set({name});
        }

    }
    setAge=():void=>{
       this.model.setRandomAge();
        
    }

    onButtonClick(){
        console.log('button clicked');
    }


    template():string{
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Update Name</button>
                <div>
                    <button class="set-age">Set Random Age</button>
                </div>
                <div>
                    <button class="save-btn">Save</button>
                </div>
            </div>
        `
    }

   
}