import "./checkout-item.styles.scss";
import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems } from "../../store/cart/cart.selectors";

export const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cart = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const handleClearItemFromCart = () =>
		dispatch(clearItemFromCart(cart, cartItem));
	const handleIncrementCartItem = () => dispatch(addItemToCart(cart, cartItem));
	const handleDecrementCartItem = () =>
		dispatch(removeItemFromCart(cart, cartItem));

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
