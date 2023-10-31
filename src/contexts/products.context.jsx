import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json";

//context
export const ProductsContext = createContext({
	products: [],
	// setProducts: () => {},
});

//provider
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);

	// useEffect(() => {
	// 	setShop(PRODUCTS);
	// }, []);
	// useContext(ShopContext);

	const value = { products };
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
