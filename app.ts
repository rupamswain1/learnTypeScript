import axios from 'axios';


const url='https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
.then(response=>{
    const post=response.data;
    const userId=post.userId;
    const id=post.id;
    const title=post.title
    console.log(`
    user id is ${userId}, is is ${id} and title is ${title}
    `);
})