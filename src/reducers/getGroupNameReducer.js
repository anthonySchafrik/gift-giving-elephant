import { GET_GROUP_NAME } from "../actions";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GROUP_NAME:
      return { ...state, ...payload };
    default:
      return state;
  }
};
