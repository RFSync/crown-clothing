import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	isCartOpen: [],
	setIsCartOpen: () => {},
	cart: [],
	addItemToCart: () => {},
	cartCount: 0,
	removeItemFromCart: () => {},
	total: 0,
});

const addCartItem = (cartItems, itemToAdd) => {
	const existingCartItem = cartItems.find((item) => {
		return item.id === itemToAdd.id;
	});

	// only if exist item exist lets increment
	if (existingCartItem) {
		return cartItems.map((item) =>
			item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}
	// if item doesn't exist lets add a property to it of 1
	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cart, itemToRemove) => {
	const existingCartItem = cart.find((item) => {
		return item.id === itemToRemove.id;
	});

	if (existingCartItem.quantity === 1) {
		return cart.filter((cartItem) => {
			return cartItem.id !== itemToRemove.id;
		});
	}

	return cart.map((item) =>
		item.id === itemToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};
const clearCartItem = (cart, itemToRemove) => {
	return cart.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [total, setTotal] = useState(0);

	const addItemToCart = (itemToAdd) => {
		setCart(addCartItem(cart, itemToAdd));
	};
	const removeItemFromCart = (itemToRemove) => {
		setCart(removeCartItem(cart, itemToRemove));
	};
	const clearItemFromCart = (itemToRemove) => {
		setCart(clearCartItem(cart, itemToRemove));
	};
	useEffect(() => {
		const newCartCount = cart.reduce((acc, currentValue) => {
			return currentValue.quantity + acc;
		}, 0);
		setCartCount(newCartCount);
	}, [cart]);

	useEffect(() => {
		const newTotal = cart.reduce((total, currentCartItem) => {
			return total + currentCartItem.price * currentCartItem.quantity;
		}, 0);
		setTotal(newTotal);
	}, [cart]);

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cart,
		cartCount,
		total,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
