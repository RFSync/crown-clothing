import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import CartIcon from "../../cart-icon/CartIcon.component";
import { UserContext } from "../../../contexts/user..context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utilities/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/CartDropdown.component";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const signoOutHandler = async () => {
		const response = await signOutUser();
		console.log("user signed out");
	};
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<div className='logo'>
						<CrownLogo className='logo' />
					</div>
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						shop
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signoOutHandler}>
							Sign out
						</span>
					) : (
						<Link className='nav-link' to='/authentication'>
							sign-in
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
