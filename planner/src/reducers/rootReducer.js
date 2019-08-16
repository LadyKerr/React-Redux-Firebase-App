import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";
import { authReducer } from "./authReducer";
import { firestoreReducer } from "redux-firestore";
// import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  projectReducer,
  authReducer,
  firestoreReducer,
  // firebaseReducer
});
