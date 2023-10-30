import "./categories..styles.scss";
import Home from "./components/routes/home/Home.component";
import { Route, Routes } from "react-router";
import Navigation from "./components/routes/navigation/Navigation.component";

const App = () => {
	const shop = () => {
		<h1>sdfsdf</h1>;
	};
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<shop />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
