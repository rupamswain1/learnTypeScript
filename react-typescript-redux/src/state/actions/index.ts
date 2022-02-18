import { ActionType } from "../action-type";
export interface SearchRepositories{
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction{
    type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload:string[]
}

export interface SearchRepositoriesErrorAction{
    type:ActionType.SEARC_REPOSITORIES_ERROR,
    payload:string
}

export type Action=SearchRepositories|SearchRepositoriesSuccessAction|SearchRepositoriesErrorAction;