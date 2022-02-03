import {User} from './Models/Users';
import axios from 'axios';
//const user=new User({name:'rupam',age:28});

// user.set({name:'rupam swain'})

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.on('click',()=>{console.log('Click 1');
// });
// user.on('click',()=>{console.log('Click 2');
// });
// user.on('change',()=>{console.log('Change 1');
// });

// console.log(user);

// user.trigger('click');
// user.trigger('asdasd');//No output
// user.trigger('change');

// // axios.post('http://localhost:3000/users',{
// //     name:'rupam',
// //     age:28
// // })
// const user=new User({id:1,name:'typescript',age:25});
// user.save();

// const secondUser=new User({name:'test1',age:1});
// secondUser.save();

const userForEvent=new User({name:'abc'});
userForEvent.events.on('click',()=>{console.log('clicked')});
userForEvent.events.trigger('click')
