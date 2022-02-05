import { UserForms } from "./views/UserForms";
import { User } from "./Models/Users";


const user=User.buildUser({name:'testing',age:50});
const userForm=new UserForms(document.querySelector('#root'),user);
userForm.render()