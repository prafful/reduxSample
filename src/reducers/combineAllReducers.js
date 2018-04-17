import { combineReducers } from "redux";

import UsersReducer from "./reducers-users";
import MoviesReducer from "./reducers-movies"

import UserClickedReducer from "./reducer-userClicked";

const allReducers = combineReducers({
    users:UsersReducer,
    movies:MoviesReducer,
    activeuser:UserClickedReducer
    //other key:value pairs will go here
    
})


export default allReducers;