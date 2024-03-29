import { createAction } from "../../utils/reducer/reducer.utils";
import CATEGOIRES_ACTION_TYPES from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGOIRES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
