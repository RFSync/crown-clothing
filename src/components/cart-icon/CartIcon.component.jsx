import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import { useContext } from "react";

const CartIcon = () => {
	const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
	return (
		<div
			className='cart-icon-container'
			onClick={() => setIsCartOpen(!isCartOpen)}
		>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};
export default CartIcon;
