import {ActionType} from '../action-type';
import {Action} from '../actions';

interface repositoryState{
    loading: boolean;
    error:string|null;
    data:string[]
}

const INITIAL_STATE:repositoryState={
    loading:false,
    error:null,
    data:[]
}




const repositoryReducer=(state:repositoryState=INITIAL_STATE,action:Action):repositoryState=>{
      switch(action.type){
        case ActionType.SEARCH_REPOSITORIES:
            return {...state,loading:true}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case ActionType.SEARC_REPOSITORIES_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}

export default repositoryReducer;