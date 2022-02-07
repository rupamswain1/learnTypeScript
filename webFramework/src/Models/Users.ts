import {Eventing} from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Models } from './Models';
import { Collection } from './Collection';

export interface UserProps{
    id?:number;
    name?:string;
    age?:number;
}

const rootUrl='http://localhost:3000/users'

export class User extends Models<UserProps>{
    static buildUser(attrs:UserProps):User{
        return new User(
            new Eventing(),
            new Sync<UserProps>(rootUrl),
            new Attributes<UserProps>(attrs),
        )
    }

    static buildCollection(){
        return new Collection<User,UserProps>(
            rootUrl,
            (value:UserProps)=>User.buildUser(value)
        )
    }

    setRandomAge(){
        const age = Math.round(Math.random()*100);
        this.set({age});
    }
} 