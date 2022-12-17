import { Dispatch } from "redux";
import axios from "axios";
import { CatsAction, CatsActionTypes } from "../../interfaces/iCats";

export const fetchCats = (page = 1, limit = 10, category: number) => {
  return async (dispatch: Dispatch<CatsAction>) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`
      );
      dispatch({
        type: CatsActionTypes.FETCH_CATS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchAdditionalCats = (
  page: number,
  limit = 10,
  category: number
) => {
  return async (dispatch: Dispatch<CatsAction>) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`
      );
      dispatch({
        type: CatsActionTypes.FETCH_ADDITIONAL_CATS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
