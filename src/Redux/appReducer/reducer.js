import {
  ADD_ITEM_CART,
  FILTER_BY,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_BY,
  DELETE_ITEM_CART,
} from "./actionTypes";
import { loadData, saveData } from "../../utils/LocalStorage.js";
const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  cart: loadData("cartItems") || [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: payload,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case ADD_ITEM_CART:
      const CurrentItems = [...state.cart, payload];

      saveData("cartItems", CurrentItems);
      return {
        ...state,
        cart: CurrentItems,
      };
    case DELETE_ITEM_CART:
      const currentItems = [
        ...state.cart.filter((item) => item._id !== payload._id),
      ];
      saveData("cartItems", currentItems);
      return {
        cart: currentItems,
      };

    case SORT_BY:
      return {
        ...state,
        product: [...state.product].sort((a, b) => {
          return a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0;
        }),
      };
    case FILTER_BY:
      let value = payload;
      let filteredValues = [...state.product].filter((product) => {
        return product.title.includes(value) || product.name.includes(value);
      });
      return {
        ...state,
        product: filteredValues,
      };
    default:
      return state;
  }
};
