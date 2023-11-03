import Home from "./components/routes/home/Home.component";
import { Route, Routes } from "react-router";
import Navigation from "./components/routes/navigation/Navigation.component";
import Authentication from "./components/routes/authentication/Authentication.component";
import Shop from "./components/routes/shop/Shop.component";
import Checkout from "./components/routes/checkout/Checkout.component";
import { useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangeListener,
} from "./utilities/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// We are using useEffect like component did mount
		// when this is run - its returns an unsub function to turn it off
		const unsubscribeFunction = onAuthStateChangeListener((user) => {
			dispatch(setCurrentUser(user));
			if (user) {
				createUserDocumentFromAuth(user);
			}
		});
		// what ever you return is run when compponent unmounts
		return unsubscribeFunction;
	}, []);

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
