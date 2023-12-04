import { Routes, Route } from "react-router";
import { useEffect } from "react";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/CategoriesPreview.Component";
import Category from "../category/Category.component";
import { getDocumentsAndCategories } from "../../../utilities/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../store/categories/categories.action";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategories = async () => {
			const categoriesArray = await getDocumentsAndCategories();
			dispatch(setCategories(categoriesArray));
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
