import { CollectionView } from "./CollectionView";
import {User, UserProps} from '../Models/Users';
import { UserView } from "./UserShow";


export class UserList extends CollectionView<User,UserProps>{
    renderItem(model:User,itemParent:Element):void{
        new UserView(itemParent,model).render();
    }
}