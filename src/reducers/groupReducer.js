import { NEW_GROUP_INFO } from "../actions/index";

const INITIAL_STATE = {
  groupName: "",
  groupPass: "",
  groupPassCheck: "",
  totalPeople: null,
  totalCashAmount: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
