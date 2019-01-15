import { FETCH_GROUP_INFO } from "../actions";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};
