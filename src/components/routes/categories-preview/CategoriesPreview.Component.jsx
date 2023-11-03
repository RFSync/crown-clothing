import CategoryPreview from "../../category-preview/CategoryPreview.component";
import "./categories-preview.styles.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../../store/categories/categories.selectors";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	return (
		<div className='categories-preview-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
};

export default CategoriesPreview;
