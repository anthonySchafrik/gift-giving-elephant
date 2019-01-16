import { FETCH_GROUP_INFO } from '../actions';

const INITIAL_STATE = {
  id: null,
  name: '',
  password: '',
  total: null,
  cash: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
