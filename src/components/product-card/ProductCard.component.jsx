import Button from "../button/Button.component";
import "./product-card.styles.scss";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";

export const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCartItems);
	const { name, price, imageUrl } = product;
	const handleAddToCart = () => dispatch(addItemToCart(cart, product));
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt='' />
			<div className='footer'>
				<span className='name'></span>
				<span className='price'> </span>
			</div>
			<Button buttonType='inverted' onClick={handleAddToCart}>
				add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
