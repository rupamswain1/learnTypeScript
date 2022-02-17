interface repositoryState{
    loading: boolean;
    error:string|null;
    data:string[]
}

interface Action{
    type:string;
    payload:any
}

const INITIAL_STATE:repositoryState={
    loading:false,
    error:null,
    data:[]
}

const reducer=(state:repositoryState=INITIAL_STATE,action:any):repositoryState=>{
    switch(action.type){
        case 'search_repositories':
            return {...state,loading:true}
        case 'search_repository_success':
            return {...state,loading:false,data:action.payload}
        case 'search_repositories_error':
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}

export default reducer;