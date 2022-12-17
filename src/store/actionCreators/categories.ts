import { Dispatch } from "redux";
import axios from "axios";
import {
  CategoriesAction,
  CategoriesActionTypes,
} from "../../interfaces/iCategories";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/categories"
      );
      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export function setCurrentCategory(id: number): CategoriesAction {
  return { type: CategoriesActionTypes.CURRENT_CATEGORY, payload: id };
}
