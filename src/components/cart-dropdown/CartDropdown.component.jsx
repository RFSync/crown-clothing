import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-tem/CartItem.component";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems } from "../../store/cart/cart.selectors";

export const CartDropdown = () => {
	const cart = useSelector(selectCartItems);
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
