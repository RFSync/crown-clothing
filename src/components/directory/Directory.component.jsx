import CategoryItem from "../category-item/CategoryItem.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => {
				return (
					<div key={category.id} className='category-container'>
						<CategoryItem category={category} />
					</div>
				);
			})}
		</div>
	);
};

export default Directory;
