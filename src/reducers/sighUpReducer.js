import { SIGH_UP_INFO } from "../actions";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGH_UP_INFO:
      return { ...state, ...payload };
    default:
      return {
        ...state,
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: "",
        hobbyOne: "",
        hobbyTwo: "",
        hobbyThree: ""
      };
  }
};
