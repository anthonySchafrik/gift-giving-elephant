export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GROUP_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
