import { Fragment, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router";
import ProductCard from "../../product-card/ProductCard.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../../store/categories/categories.selectors";

export const Category = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const { category } = useParams();

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<h2 className='category-title'>{category.toUpperCase()}</h2>
			<div className='category-container'>
				{products &&
					products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</div>
		</Fragment>
	);
};

export default Category;
