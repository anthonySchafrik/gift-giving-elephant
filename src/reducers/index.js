import { combineReducers } from "redux";

import fetchGroupInfo from "./fetchGroupInfoReducer";
import getGroupNamereducer from "./getGroupNameReducer";
import groupReducer from "./groupReducer";
import joinGroupReducer from "./joinGroupReducer";
import logInInfo from "./logInReducer";
import signUpInfo from "./signUpReducer";

const reducer = combineReducers({
  getGroupName: getGroupNamereducer,
  groupInfo: fetchGroupInfo,
  joinGroupInfo: joinGroupReducer,
  logInInfo,
  group: groupReducer,
  signUpInfo
});

export default reducer;
