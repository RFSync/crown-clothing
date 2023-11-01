import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-tem/CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router";

export const CartDropdown = () => {
	const { cart } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cart.map((item) => {
					return <CartItem cartItem={item} key={item.id} />;
				})}
			</div>
			<Button onClick={goToCheckoutHandler}>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
