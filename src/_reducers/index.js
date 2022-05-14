import { combineReducers } from "redux";
import user from "./user_reducer.js";
import content from "./content_reducer.js";
const rootReducer = combineReducers({ user, content });

export default rootReducer;
