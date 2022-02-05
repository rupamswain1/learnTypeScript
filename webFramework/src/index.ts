import {User} from './Models/Users';


const collection=User.buildCollection()

collection.on('change',()=>{
    console.log(collection);
    
})

collection.fetch()