import axios from 'axios';


const url='https://jsonplaceholder.typicode.com/posts/1';
//structure of data
interface Post{
    userId:number;
    id: number;
    title: String;
}

axios.get(url)
.then(response=>{
    const post=response.data as Post;
    const userId=post.userId;
    const id=post.id;
    const title=post.title
    printData(userId,id,title)
   
})

const printData=(userId:number,id:number,title:String)=>{
    console.log(`
    user id is ${userId}, 
    id is ${id} 
    and title is ${title}
    `);
}