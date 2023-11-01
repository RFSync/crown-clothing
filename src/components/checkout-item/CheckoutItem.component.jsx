import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const handleClearItemFromCart = () => clearItemFromCart(cartItem);
	const handleIncrementCartItem = () => addItemToCart(cartItem);
	const handleDecrementCartItem = () => removeItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt='' />
			</div>
			<span className='name'>{name}</span>

			<span className='quantity'>
				<div onClick={handleDecrementCartItem} className='arrow'>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div onClick={handleIncrementCartItem} className='arrow'>
					&#10095;
				</div>
			</span>

			<span className='price'>{price}</span>
			<div className='remove-button' onClick={handleClearItemFromCart}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
