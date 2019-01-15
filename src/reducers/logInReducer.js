import { LOG_IN_INFO } from "../actions";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN_INFO:
      return { ...state, ...payload };
    default:
      return { ...state, username: "", password: "", logedIn: false };
  }
};
