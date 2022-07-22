import * as types from "./action.type.js";
import axios from "axios";
import { loadData,saveData } from "../../utils/LocalStorage.js";

export const getUserRegistration = (payload) => (dispatch) => {
  const userDetails = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    username: payload.username,
    mobile: payload.mobile,
    description: "A Transformation in education!",
  };

  dispatch({ type: types.REGISTER_USER_REQUEST });

  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`, userDetails)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS });

      return {
        type: types.REGISTER_USER_SUCCESS,
        errorStatus: res.data.error,
        errorMess: res.data.message,
      };
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_USER_FAILURE });
    });
};

export const getUserLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });

  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/login`, payload)
    .then((res) => {
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data.token });
      saveData("usename",payload.username)
      return { type: types.LOGIN_USER_SUCCESS };
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_USER_FAILURE });
    });
};

let token = loadData("token");
export const getUserDetails = (payload) => (dispatch) => {
  dispatch({ type: types.PROFILE_USER_REQUEST });

  return axios
    .get(`https://masai-api-mocker.herokuapp.com/user/${payload}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.PROFILE_USER_SUCCESS, payload: res.data });
      
    })
    .catch((err) => {
      dispatch({ type: types.PROFILE_USER_FAILURE });
    });
};
