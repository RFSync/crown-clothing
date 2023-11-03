import { Routes, Route } from "react-router";
import { useEffect } from "react";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/CategoriesPreview.Component";
import Category from "../category/Category.component";
import { getDocumentsAndCategories } from "../../../utilities/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../../store/categories/categories.action";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategories = async () => {
			const categoriesMap = await getDocumentsAndCategories();
			dispatch(setCategoriesMap(categoriesMap));
		};
		getCategories();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
