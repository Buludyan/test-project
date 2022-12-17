import * as CatsActionCreators from "./cats";
import * as CategoriesActionCreators from "./categories";

export default {
  ...CatsActionCreators,
  ...CategoriesActionCreators,
};
