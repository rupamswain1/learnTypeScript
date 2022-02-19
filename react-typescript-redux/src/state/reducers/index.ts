import { combineReducers } from "redux";
import repositoryReducer from './repositoryReducers';

const reducer=combineReducers({
    repositories:repositoryReducer,
});

export default reducer;