import { combineReducers } from "redux";
import user from "./user_reducer.js";
import content from "./content_reducer.js";
import sidebar from "./sidebar_reducer.js";
const rootReducer = combineReducers({ user, content, sidebar });

export default rootReducer;
