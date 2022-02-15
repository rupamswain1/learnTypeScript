import { FetchToDos, DeleteTodo } from "./todo";

export enum ActionType{
    fetchTodos,
    deleteTodo
}

export type Action=FetchToDos|DeleteTodo;