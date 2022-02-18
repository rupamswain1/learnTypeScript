import axios from 'axios';
import {ActionType} from '../action-type';
import { Dispatch } from 'redux';
import { SearchRepositories, SearchRepositoriesSuccessAction, SearchRepositoriesErrorAction } from '../actions';
import {Action} from '../actions'

const searchRepositoryAction=():SearchRepositories=>{
    return {type:ActionType.SEARCH_REPOSITORIES,}
    
}

const searchRepositorySuccessAction=(data:string[]):SearchRepositoriesSuccessAction=>{
    return{
        type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload:data
    }
}

const searchRepositoriesErrorAction=(error:string):SearchRepositoriesErrorAction=>{
    return{
        type:ActionType.SEARC_REPOSITORIES_ERROR,
        payload:error,
    }
}

const searchRepository=async (term:string)=>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch(searchRepositoryAction());
    
    // eslint-disable-next-line no-unreachable
    try{
        const {data}=await axios.get('https://registry.npmjs.org/-/v1/search',
        {
            params:{
                text:term
            }
        })

        const packageNames=data.objects.map((result:any)=>{
            return result.package.name;
        })
        dispatch(searchRepositorySuccessAction(packageNames))
    }
    catch(err:any){
        dispatch(searchRepositoriesErrorAction(err));
    }
};
}

