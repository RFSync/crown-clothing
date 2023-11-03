import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles.jsx";
import CartIcon from "../../cart-icon/CartIcon.component";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utilities/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/CartDropdown.component";
import { selectCurrentUser } from "../../../store/user/user.selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const signoOutHandler = async () => {
		const response = await signOutUser();
		console.log("user signed out");
	};
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>shop</NavLink>
					{currentUser ? (
						<NavLink onClick={signoOutHandler}>Sign out</NavLink>
					) : (
						<NavLink to='/authentication'>sign-in</NavLink>
					)}
					<CartIcon />
				</NavLinks>

				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
