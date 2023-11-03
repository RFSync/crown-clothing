import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";
import { createAction } from "../utilities/reducer.utils";

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

const CART_ACTIION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const CartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTIION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTIION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`unknown action ${type}`);
	}
};

const INITIAL_STATE = {
	isCartOpen: true,
	total: 0,
	cartCount: 0,
	cart: [],
};

export const CartProvider = ({ children }) => {
	//reducer
	const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
	const { cart, cartCount, total, isCartOpen } = state;

	const setCartItemsAction = (newCartItems) => {
		const newCartCount = newCartItems.reduce((acc, currentValue) => {
			return currentValue.quantity + acc;
		}, 0);
		const newTotal = cart.reduce((total, currentCartItem) => {
			return total + currentCartItem.price * currentCartItem.quantity;
		}, 0);

		dispatch(
			createAction(CART_ACTIION_TYPES.SET_CART_ITEMS, {
				cart: newCartItems,
				cartCount: newCartCount,
				total: newTotal,
			})
		);
	};

	const addItemToCart = (itemToAdd) => {
		const newCartItems = addCartItem(cart, itemToAdd);
		setCartItemsAction(newCartItems);
	};
	const removeItemFromCart = (itemToRemove) => {
		const newCartItems = removeCartItem(cart, itemToRemove);
		setCartItemsAction(newCartItems);
	};
	const clearItemFromCart = (itemToRemove) => {
		const newCartItems = clearCartItem(cart, itemToRemove);
		setCartItemsAction(newCartItems);
	};
	const setIsCartOpen = (bool) => {
		dispatch(createAction(CART_ACTIION_TYPES.SET_IS_CART_OPEN, bool));
	};

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
