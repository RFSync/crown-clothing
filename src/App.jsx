import "./categories..styles.scss";
import Home from "./components/routes/home/Home.component";
import { Route, Routes } from "react-router";
import Navigation from "./components/routes/navigation/Navigation.component";
import SignIn from "./components/routes/sign-in/Signin.component";

const App = () => {
	const Shop = () => {
		return <h1>sdfsdf</h1>;
	};
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
