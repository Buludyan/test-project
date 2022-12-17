import { combineReducers } from "redux";
import { catsReducer } from "./catsReducer";
import { categoriesReducer } from "./categoriesReducer";

export const rootReducer = combineReducers({
  cats: catsReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
