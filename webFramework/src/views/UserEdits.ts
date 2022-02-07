import { Views } from "./Views";
import {User,UserProps} from '../Models/Users';
import { UserForms } from "./UserForms";
import {UserView} from '../views/UserShow';

export class UserEdits extends Views<User,UserProps>{

    regionMap(): { [key: string]: string } {
        return{
            userShow:'.user-show',
            userForm:'.user-form'
        };
    }

    onRender(): void {
        new UserView(this.regions.userShow,this.model).render();
        new UserForms(this.regions.userForm,this.model).render();
    }

    template(): string {
        return `
        <div>
            <div class='user-show'></div>
            <div class='user-form'></div>
        </div>
        `
    }
}