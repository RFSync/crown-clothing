import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/ProductCard.component";
import CategoryPreview from "../../category-preview/CategoryPreview.component";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<div className='categories-preview-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
};

export default CategoriesPreview;
