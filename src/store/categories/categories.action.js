import { createAction } from "../../utilities/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getDocumentsAndCategories } from "../../utilities/firebase/firebase.utils";

// Here we call dispatch that was provided to modify state -
// setCurrentUser is now the api to interact with state ad modifying state``
export const setCategories = (categories) => {
	return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};

export const fetchCategoriesStart = () =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccessful = (categories) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESSFUL, categories);

export const fetchCategoriesFailed = (error) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getDocumentsAndCategories();
		dispatch(fetchCategoriesSuccessful(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};
