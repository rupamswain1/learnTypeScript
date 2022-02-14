import axios from 'axios';

import {Dispatch} from 'redux';
import { ActionType } from './actionTypes';

const url='https://jsonplaceholder.typicode.com/todos';

export interface ToDos{
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

export interface FetchToDos{
    type:ActionType.fetchTodos;
    payload:ToDos[]
}

export interface DeleteTodo{
    type:ActionType.deleteTodo;
    payload:number
}

export const fetchTodos=()=>{
    return async(dispatch:Dispatch)=>{
        const response = await axios.get<ToDos[]>(url);

        dispatch<FetchToDos>({
            type:ActionType.fetchTodos,
            payload:response.data
        })
    }
}

export const deleteTodo=(id:number):DeleteTodo=>{
    return({
        type:ActionType.deleteTodo,
        payload:id}
    )
}