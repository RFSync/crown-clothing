import { Fragment } from "react";
import "./directory-item.styles.scss";
import { useNavigate } from "react-router";

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const handleGoToCategory = (title) => {
		navigate(`shop/${title}`);
	};
	return (
		<div
			className='directory-item-container'
			onClick={() => handleGoToCategory(title)}
		>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='body'>
				<h2>{title}</h2>
				<p>shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
