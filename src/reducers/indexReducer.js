import { combineReducers } from "redux";
import { userReducer } from "./user";

const indexReducer = combineReducers({
  userReducer,
});

export default indexReducer;
