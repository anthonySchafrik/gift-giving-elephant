import { FETCH_USER_INFO, UPDATE_USER_INFO } from '../actions';

const INITIAL_STATE = {
  id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  hobbyone: '',
  hobbytwo: '',
  hobbythree: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER_INFO:
      return { ...state, ...payload };
    case UPDATE_USER_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
