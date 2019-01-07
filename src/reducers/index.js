import { combineReducers } from "redux";
import groupReducer from "./groupReducer";
import getGroupNamereducer from "./getGroupNameReducer";
import fetchGroupInfo from "./FetchGruopInfoReducer";
import sighUpInfo from "./sighUpReducer";
import logInInfo from "./logInReducer";

const reducer = combineReducers({
  newGroup: groupReducer,
  getGroupName: getGroupNamereducer,
  groupInfo: fetchGroupInfo,
  sighUpInfo,
  logInInfo
});

export default reducer;
