import "./categories..styles.scss";
import Home from "./components/routes/home/Home.component";
import { Route, Routes } from "react-router";
import Navigation from "./components/routes/navigation/Navigation.component";
import Authentication from "./components/routes/authentication/Authentication.component";
import Shop from "./components/routes/shop/Shop.component";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='authentication' element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
