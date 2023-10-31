import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
import { useContext } from "react";

const CartIcon = () => {
	const { setIsCartOpen, isCartOpen } = useContext(CartContext);
	return (
		<div className='cart-icon-container'>
			<ShoppingIcon
				className='shopping-icon'
				onClick={() => setIsCartOpen(!isCartOpen)}
			/>
			<span className='item-count'>0</span>
		</div>
	);
};
export default CartIcon;
