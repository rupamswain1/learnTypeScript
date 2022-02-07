import { UserForms } from "./views/UserForms";
import { User } from "./Models/Users";


const user=User.buildUser({name:'testing',age:50});

const root=document.querySelector('#root');
if(root){
    const userForm=new UserForms(root,user);
    userForm.render()
}
