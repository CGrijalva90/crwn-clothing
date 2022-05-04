import { createAction } from "../../utils/reducer/reducer.utils";
import CATEGOIRES_ACTION_TYPES from "./categories.types";

export const setCategories = (categories) =>
  createAction(CATEGOIRES_ACTION_TYPES.SET_CATEGORIES, categories);
