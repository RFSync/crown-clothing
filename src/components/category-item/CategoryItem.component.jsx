import { Fragment } from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
	const { title, id, imageUrl } = category;
	return (
		<Fragment>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>shop Now</p>
			</div>
		</Fragment>
	);
};

export default CategoryItem;
