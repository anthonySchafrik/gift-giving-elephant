import { LOG_IN_INFO } from "../actions";

let INITIAL_STATE = {
  username: "",
  password: "",
  logedIn: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
