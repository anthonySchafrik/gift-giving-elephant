import { FETCH_USER_INFO } from "../actions";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_INFO:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};
