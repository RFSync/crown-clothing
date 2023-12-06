import "./checkout.styles.scss";
import CheckoutItem from "../../checkout-item/CheckoutItem.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../../store/cart/cart.selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PaymentForm from "../../payment-form/PaymentForm.component";

export const Checkout = () => {
	const cart = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
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
			<PaymentForm />
		</div>
	);
};

export default Checkout;
