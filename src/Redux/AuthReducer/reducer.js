import * as types from "./action.type.js";
import { saveData, loadData } from "../../utils/LocalStorage.js";
const initalState = {
  isRegister: false,
  isAuth: loadData("isAuth") || false,
  isError: false,
  isLoading: false,
  token: loadData("token") || "",
  userData: loadData("userData") || [],
  cartItems: loadData("cartItems") || [],
};
export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegister: true,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isRegister: false,
      };

    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_USER_SUCCESS:
      saveData("token", payload);
      saveData("isAuth", true);

      return {
        ...state,
        isLoading: false,
        token: payload,
        isAuth: true,
        isError: false,
      };
    case types.LOGIN_USER_FAILURE:
      saveData("userData", "");
      saveData("isAuth", false);
      saveData("token", "");
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
        userData: [],
      };

    case types.PROFILE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.PROFILE_USER_SUCCESS:
      saveData("userData", payload);

      return {
        ...state,
        isLoading: false,
        userData: payload,
        isError: false,
      };
    case types.PROFILE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case types.USER_LOGOUT:
      saveData("userData", "");
      saveData("isAuth", false);
      saveData("token", "");
      return {
        ...state,
        token: "",
        isAuth: false,
        userData: [],
      };

    case types.ADD_TO_CART:
      const CurrentItems = [...state.cartItems, payload];

      saveData("cartItems", CurrentItems);
      return {
        ...state,
        cartItems: CurrentItems,
      };

    default:
      return state;
  }
};
