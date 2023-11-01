import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import CheckoutItem from "../../checkout-item/CheckoutItem.component";

export const Checkout = () => {
	const { cart, total } = useContext(CartContext);
	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>product</span>
				</div>
				<div className='header-block'>
					<span>description</span>
				</div>
				<div className='header-block'>
					<span>quantity</span>
				</div>
				<div className='header-block'>
					<span>price</span>
				</div>
				<div className='header-block'>
					<span>remove</span>
				</div>
			</div>
			{cart.map((cartItem) => {
				return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
			})}
			<span className='total'>${total}</span>
		</div>
	);
};

export default Checkout;
