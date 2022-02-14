import {combineReducers} from 'redux';
import { todosReducer } from './todoReducer';
import { ToDos } from '../actions';

export interface StoreState{
    todos: ToDos[];
} 


export const reducers= combineReducers({
    todos:todosReducer,
});