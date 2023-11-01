import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<div className='cart-item-container'>
			<img src={imageUrl} alt='' />
			<div className='item-details'></div>
			<span className='name'>{name}</span>
			<br />
			<span className='price '>{`${quantity} x $${price}`}</span>
		</div>
	);
};

export default CartItem;
