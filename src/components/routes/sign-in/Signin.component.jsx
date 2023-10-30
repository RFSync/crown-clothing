import { Fragment } from "react";
import {
	signInWithGooglePopUp,
	createUserFromAuth,
} from "../../../utilities/firebase/firebase.utils.js";

const SignIn = () => {
	const logInWithGoogle = async () => {
		// we get back an auth object and pull just user portion
		const { user } = await signInWithGooglePopUp();
		const userRefDoc = await createUserFromAuth(user);
	};
	return (
		<Fragment>
			<div onClick={logInWithGoogle}>
				<button>hello world</button>
			</div>
		</Fragment>
	);
};

export default SignIn;
