import {
  CategoriesAction,
  CategoriesActionTypes,
  CategoriesState,
} from "../../interfaces/iCategories";

const initialState: CategoriesState = {
  categoriesData: [],
  currentCategory: null,
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesData: action.payload };
    case CategoriesActionTypes.CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};
