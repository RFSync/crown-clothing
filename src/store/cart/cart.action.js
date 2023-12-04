import { createAction } from "../../utilities/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cart, itemToAdd) => {
	const newCartItems = addCartItem(cart, itemToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cart, itemToRemove) => {
	const newCartItems = removeCartItem(cart, itemToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cart, itemToRemove) => {
	const newCartItems = clearCartItem(cart, itemToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

//utility functions for actions

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
