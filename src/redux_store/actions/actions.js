
import { REVIEWS, PRODUCTS } from '../constants'; //LOAD_BEGIN, LOAD_SUCCESS, LOAD_ERROR, RESET

import review_data from '../../json/reviews.json'
import product_data from '../../json/products.json'



export function RequestReviews() {
    return function (dispatch) {
        dispatch({
            type: REVIEWS.LOAD_SUCCESS,
            payload: review_data.ctRoot
        });
    }
}
export function RequestProducts() {
    return function (dispatch) {
        dispatch({
        type: PRODUCTS.LOAD_SUCCESS,
        payload: product_data.ctRoot
        });
    }
}



/*

import axios from "axios";

export const RequestReviews = (data) => async (dispatch) => {
  dispatch({
    type: REVIEWS.LOAD_BEGIN,
  });
  try {
    const json = await axios.get("../../../json/reviews.json");
    console.log(json);
    dispatch({
      type: REVIEWS.LOAD_SUCCESS,
      usersData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: REVIEWS.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};


*/