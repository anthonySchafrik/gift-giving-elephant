import { NEW_GROUP_INFO } from "../actions/index";

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return {
        ...state,
        groupName: "",
        groupPass: "",
        groupPassCheck: "",
        totalPeople: null,
        totalCashAmount: null
      };
  }
};
