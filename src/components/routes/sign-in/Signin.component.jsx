import { Fragment } from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/SignUpForm.component.jsx";

import {
	signInWithGooglePopUp,
	createUserFromAuth,
	signInWithGoogleRedirect,
	auth,
} from "../../../utilities/firebase/firebase.utils.js";

const SignIn = () => {
	// useEffect(() => {
	// 	// because you cannot set aync function as a usehook parameter, but it doesn't
	// 	// return a clean up  it returns a promise`;
	// 	// used IIFE - there is no point in naming and calling this function, it is single us.
	// 	(async () => {
	// 		const repsonse = await getRedirectResult(auth);
	// 		console.log(repsonse);
	// 		if (repsonse) {
	// 			const userRefDoc = await createUserFromAuth(repsonse.user);
	// 		}
	// 	})();
	// }, []);

	const logInWithGoogle = async () => {
		// we get back an auth object and pull just user portion
		const { user } = await signInWithGooglePopUp();
		const userRefDoc = await createUserFromAuth(user);
	};
	return (
		<Fragment>
			<div onClick={logInWithGoogle}>
				<button>popup</button>
			</div>
			{/* <div onClick={signInWithGoogleRedirect}>
				<button>redirect</button>
			</div> */}
			<SignUpForm />
		</Fragment>
	);
};

export default SignIn;
