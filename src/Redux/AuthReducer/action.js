import * as types from "./action.type.js";
import axios from "axios";
export const getUserRegistration = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });

  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`)
    .then((res) => {
      dispatch({ type: types.REGISTER_USER_SUCCESS });
      return { type: types.REGISTER_USER_SUCCESS };
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
      dispatch({ type: types.LOGIN_USER_SUCCESS });
      return { type: types.LOGIN_USER_SUCCESS };
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_USER_FAILURE });
    });
};
