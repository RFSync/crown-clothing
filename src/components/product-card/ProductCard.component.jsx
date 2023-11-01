import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component";
import "./product-card.styles.scss";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const { name, price, imageUrl } = product;
	const handleAddToCart = () => addItemToCart(product);
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
