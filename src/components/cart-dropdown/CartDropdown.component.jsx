import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";

export const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button>Checkout</Button>
		</div>
	);
};

export default CartDropdown;
