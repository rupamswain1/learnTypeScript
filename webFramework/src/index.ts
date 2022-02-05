import {User} from './Models/Users';

const user=User.buildUser({id:1});

user.on('change',()=>{
    console.log('user data is changed');
})

user.on('save',()=>{
    console.log('user is saved');
    
})
user.fetch();
setTimeout(()=>{
    console.log(user.get('name'));
},1000)



