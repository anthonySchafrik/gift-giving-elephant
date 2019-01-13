import { combineReducers } from "redux";

import fetchGroupInfo from "./FetchGruopInfoReducer";
import getGroupNamereducer from "./getGroupNameReducer";
import groupReducer from "./groupReducer";
import joinGroupReducer from "./joinGroupReducer";
import logInInfo from "./logInReducer";
import sighUpInfo from "./sighUpReducer";

const reducer = combineReducers({
  getGroupName: getGroupNamereducer,
  groupInfo: fetchGroupInfo,
  joinGroupInfo: joinGroupReducer,
  logInInfo,
  group: groupReducer,
  sighUpInfo
});

export default reducer;
