import { Fragment, useContext } from "react";
import SHOP_DATA from "../../../shop-data.json";
import { ProductsContext } from "../../../contexts/products.context";
import ProductCard from "../../product-card/ProductCard.component";
import "./shop.styles.scss";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	console.log(products);
	return (
		<div className='products-container'>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</div>
	);
};

export default Shop;
