import { combineReducers } from "redux";
import groupReducer from "./groupReducer";
import getGroupNamereducer from "./getGroupNameReducer";
import fetchGroupInfo from "./FetchGruopInfoReducer";

const reducer = combineReducers({
  newGroup: groupReducer,
  getGroupName: getGroupNamereducer,
  groupInfo: fetchGroupInfo
});

export default reducer;
