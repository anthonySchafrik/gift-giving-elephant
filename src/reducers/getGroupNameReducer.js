import { GET_GROUP_NAME } from '../actions';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GROUP_NAME:
      return { ...state, ...payload };
    default:
      return state;
  }
};
