import { Views } from "./Views";
import {User,UserProps} from '../Models/Users';

export class UserEdits extends Views<User,UserProps>{
    template(): string {
        return `
        <div>
            <div class='user-show'></div>
            <div class='user-form'></div>
        </div>
        `
    }
}