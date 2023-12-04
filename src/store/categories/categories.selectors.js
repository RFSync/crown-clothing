import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;
const selectCategories = createSelector(
	[categoriesReducer],
	(categoriesSlice) => categoriesSlice.categoriesMap
);
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) => {
		return categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	}
);
