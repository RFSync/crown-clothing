import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles.jsx";
import CartIcon from "../../cart-icon/CartIcon.component";
import { signOutUser } from "../../../utilities/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/CartDropdown.component";
import { selectCurrentUser } from "../../../store/user/user.selectors";
import { selectIsCartOpen } from "../../../store/cart/cart.selectors";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutHandler = async () => signOutUser();

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>shop</NavLink>
					{currentUser ? (
						<NavLink onClick={signOutHandler}>Sign out</NavLink>
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
