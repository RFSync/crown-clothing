import DirectoryItem from "../directory-item/DirectoryItem.component";
import "./directory.styles.scss";
import { useNavigate } from "react-router";

const Directory = ({ categories }) => {
	const navigate = useNavigate();
	const handleGoToCategory = (title) => {
		debugger;
		navigate(`/${title}`);
	};
	return (
		<div className='directory-container'>
			{categories.map((category) => {
				return (
					<DirectoryItem
						key={category.id}
						onClick={console.log("ccc")}
						category={category}
					/>
				);
			})}
		</div>
	);
};

export default Directory;
