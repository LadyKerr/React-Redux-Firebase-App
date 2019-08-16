import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  projectReducer,
  authReducer
});
