export const NEW_GROUP_INFO = "NEW_GROUP_INFO";

export const newGroupInfo = (key, value) => {
  return {
    type: NEW_GROUP_INFO,
    payload: {
      [key]: value
    }
  };
};
