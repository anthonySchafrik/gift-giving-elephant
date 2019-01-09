import { combineReducers } from "redux";

import fetchGroupInfo from "./FetchGruopInfoReducer";
import getGroupNamereducer from "./getGroupNameReducer";
import groupReducer from "./groupReducer";
import logInInfo from "./logInReducer";
import sighUpInfo from "./sighUpReducer";

const reducer = combineReducers({
  getGroupName: getGroupNamereducer,
  groupInfo: fetchGroupInfo,
  logInInfo,
  newGroup: groupReducer,
  sighUpInfo
});

export default reducer;
