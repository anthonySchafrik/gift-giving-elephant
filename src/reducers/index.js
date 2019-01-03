import { combineReducers } from "redux";
import groupReducer from "./groupReducer";

const reducer = combineReducers({
  newGroup: groupReducer
});

export default reducer;
