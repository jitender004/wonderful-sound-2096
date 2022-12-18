import {
  ADD_ITEM_CART,
  FILTER_BY,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_BY,
  DELETE_ITEM_CART,
} from "./actionTypes";
const url = "https://product-list-bcia.onrender.com/api/products";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    })
    .catch((err) => dispatch({ type: GET_PRODUCT_FAILURE, payload: err }));
};
export const addItemCart = (item) => {
  return {
    type: ADD_ITEM_CART,
    payload: item,
  };
};
export const deleteItemCart = (item) => {
  return {
    type: DELETE_ITEM_CART,
    payload: item,
  };
};
export const sortBy = (by) => {
  return {
    type: SORT_BY,
    payload: by,
  };
};
export const filterBy = (by) => {
  return {
    type: FILTER_BY,
    payload: by,
  };
};
