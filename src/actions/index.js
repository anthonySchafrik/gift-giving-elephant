import axios from "axios";
import getGroupInfo from "../apis/getGroupInfo";
import regeneratorRuntime from "regenerator-runtime";

export const NEW_GROUP_INFO = "NEW_GROUP_INFO";
export const GET_GROUP_NAME = "NEW_GROUP_INFO";
export const FETCH_GROUP_INFO = "FETCH_GROUP_INFO";

export const newGroupInfo = (key, value) => {
  return {
    type: NEW_GROUP_INFO,
    payload: {
      [key]: value
    }
  };
};

export const fetchGroupName = name => {
  return {
    type: GET_GROUP_NAME,
    payload: {
      name
    }
  };
};

export const fetchGroupInfo = name => async dispatch => {
  const responce = await getGroupInfo.get(`/?name=${name}`);

  dispatch({ type: FETCH_GROUP_INFO, payload: responce.data });
};
