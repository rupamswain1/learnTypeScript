import { combineReducers } from "redux";
import repositoryReducer from './repositoryReducers';

const reducer=combineReducers({
    repositories:repositoryReducer,
});

export type RootState=ReturnType<typeof reducer>

export default reducer;