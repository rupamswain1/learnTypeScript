import {User} from './Models/Users';

const user=new User({name:'rupam',age:28});

user.set({name:'rupam swain'})

console.log(user.get('name'));
console.log(user.get('age'));

user.on('click',()=>{console.log('Click 1');
});
user.on('click',()=>{console.log('Click 2');
});
user.on('change',()=>{console.log('Change 1');
});

console.log(user);

user.trigger('click');
user.trigger('asdasd');//No output
user.trigger('change');