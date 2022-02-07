import { Views } from "./Views";
import {User, UserProps} from '../Models/Users';

export class UserView extends Views<User,UserProps>{
    template():string{
        return `
            <div>
                <h1>User Details</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
            </div>
        `
    }
}