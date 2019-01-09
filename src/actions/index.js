import getGroupInfo from "../apis/getGroupInfo";
import regeneratorRuntime from "regenerator-runtime";

export const FETCH_GROUP_INFO = "FETCH_GROUP_INFO";
export const GET_GROUP_NAME = "NEW_GROUP_INFO";
export const LOG_IN_INFO = "LOG_IN_INFO";
export const NEW_GROUP_INFO = "NEW_GROUP_INFO";
export const SIGH_UP_INFO = "SIGH_UP_INFO";

export const fetchGroupInfo = name => async dispatch => {
  const responce = await getGroupInfo.get(`/?name=${name}`);

  dispatch({ type: FETCH_GROUP_INFO, payload: responce.data[0] });
};

export const fetchGroupName = name => {
  return {
    type: GET_GROUP_NAME,
    payload: {
      name
    }
  };
};

export const logInInfoInput = (key, value) => {
  return {
    type: LOG_IN_INFO,
    payload: {
      [key]: value
    }
  };
};

export const newGroupInfo = (key, value) => {
  return {
    type: NEW_GROUP_INFO,
    payload: {
      [key]: value
    }
  };
};

export const newUserInfo = (key, value) => {
  return {
    type: SIGH_UP_INFO,
    payload: {
      [key]: value
    }
  };
};
