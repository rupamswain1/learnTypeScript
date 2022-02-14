import { ToDos,FetchToDos } from "../actions"
import { ActionType } from "../actions/actionTypes"

export const todosReducer=(state:ToDos[]=[],action:FetchToDos)=>{
    switch(action.type){
        case ActionType.fetchTodos:
            return action.payload;
        default:
            return state;
    }
}