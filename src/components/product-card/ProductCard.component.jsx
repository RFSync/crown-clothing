import Button from "../button/Button.component";
import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt='' />
			<div className='footer'>
				<span className='name'></span>
				<span className='price'> </span>
			</div>
			<Button buttonType='inverted'>add to cart</Button>
		</div>
	);
};

export default ProductCard;
