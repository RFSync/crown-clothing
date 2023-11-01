import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { getDocumentsAndCategories } from "../utilities/firebase/firebase.utils.js";

//context
export const CategoriesContext = createContext({
	categoriesMap: {},
	setProducts: () => {},
});

//provider
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategories = async () => {
			const categoriesMap = await getDocumentsAndCategories();
			setCategoriesMap(categoriesMap);
		};
		getCategories();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
