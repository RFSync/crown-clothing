import { Fragment, useContext, useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router";
import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/ProductCard.component";

export const Category = () => {
	const { categoriesMap } = useContext(CategoriesContext);
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
