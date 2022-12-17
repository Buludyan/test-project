interface Category {
  id: number;
  name: string;
}

export interface CategoriesState {
  currentCategory: null | number;
  categoriesData: Category[];
}

export enum CategoriesActionTypes {
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  CURRENT_CATEGORY = "CURRENT_CATEGORY",
}

interface FetchCategoriesSuccessAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

interface CurrentCategoryAction {
  type: CategoriesActionTypes.CURRENT_CATEGORY;
  payload: number;
}

export type CategoriesAction =
  | FetchCategoriesSuccessAction
  | CurrentCategoryAction;
