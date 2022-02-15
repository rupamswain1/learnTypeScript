import { ToDos,Action } from "../actions"
import { ActionType } from "../actions/actionTypes"

export const todosReducer=(state:ToDos[]=[],action:Action)=>{
    switch(action.type){
        case ActionType.fetchTodos:
            return action.payload;
        case ActionType.deleteTodo:
            return state.filter((todo:ToDos)=>action.payload!==todo.id)
        default:
            return state;
    }
}