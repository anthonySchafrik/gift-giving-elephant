import { JOIN_GROUP_INFO } from "../actions";

const INITIAL_STATE = {
  groupName: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
