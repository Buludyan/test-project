interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatsState {
  page: number;
  catsData: Cat[];
}

export enum CatsActionTypes {
  FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS",
  FETCH_ADDITIONAL_CATS_SUCCESS = "FETCH_ADDITIONAL_CATS_SUCCESS",
}

interface FetchCatsSuccessAction {
  type: CatsActionTypes.FETCH_CATS_SUCCESS;
  payload: Cat[];
}

interface FetchAdditionalCatsSuccessAction {
  type: CatsActionTypes.FETCH_ADDITIONAL_CATS_SUCCESS;
  payload: Cat[];
}

export type CatsAction =
  | FetchCatsSuccessAction
  | FetchAdditionalCatsSuccessAction;
