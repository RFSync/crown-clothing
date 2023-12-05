import { Routes, Route } from "react-router";
import { useEffect } from "react";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/CategoriesPreview.Component";
import Category from "../category/Category.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../../store/categories/categories.action";
const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync());
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
