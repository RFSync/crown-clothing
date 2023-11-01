import Home from "./components/routes/home/Home.component";
import { Route, Routes } from "react-router";
import Navigation from "./components/routes/navigation/Navigation.component";
import Authentication from "./components/routes/authentication/Authentication.component";
import Shop from "./components/routes/shop/Shop.component";
import Checkout from "./components/routes/checkout/Checkout.component";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='authentication' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
