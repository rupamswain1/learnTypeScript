import axios from 'axios';
import { response } from 'express';

const url='https://jsonplaceholder.typicode.com/todos/1';
interface Todos{
    id:number,
    title:string,
    completed:boolean
}
axios.get(url).then(response=>
    {
        const todo=response.data as Todos;
        const ID=todo.id;
        const Title=todo.title;
        const completed=todo.completed; 
        logTodo(ID,Title,completed)
    }   
    );

const logTodo=(ID:number,Title:string,completed:boolean)=>{
    console.log(`
    Id is: ${ID}
    Title is: ${Title}
    Completed in: ${completed}
    `);
}