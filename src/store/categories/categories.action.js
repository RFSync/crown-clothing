import { createAction } from "../../utilities/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// Here we call dispatch that was provided to modify state -
// setCurrentUser is now the api to interact with state ad modifying state```
export const setCategories = (categories) => {
	return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};
