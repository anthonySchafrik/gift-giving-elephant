import { SIGN_UP_INFO } from '../actions';

const INITIAL_STATE = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordCheck: '',
  hobbyOne: '',
  hobbyTwo: '',
  hobbyThree: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
