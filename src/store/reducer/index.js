import { combineReducers } from "redux";
import userListReducer from "./userReducer";

const rootReducer = combineReducers({
  userListReducer,
});

export default rootReducer;
