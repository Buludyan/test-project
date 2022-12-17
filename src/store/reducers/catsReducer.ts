import { CatsAction, CatsActionTypes, CatsState } from "../../interfaces/iCats";

const initialState: CatsState = {
  page: 1,
  catsData: [],
};

export const catsReducer = (
  state = initialState,
  action: CatsAction
): CatsState => {
  switch (action.type) {
    case CatsActionTypes.FETCH_CATS_SUCCESS:
      return {
        ...state,
        page: ++state.page,
        catsData: action.payload,
      };
    case CatsActionTypes.FETCH_ADDITIONAL_CATS_SUCCESS:
      return {
        ...state,
        page: ++state.page,
        catsData: [...state.catsData, ...action.payload],
      };
    default:
      return state;
  }
};
