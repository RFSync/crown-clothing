import { Fragment } from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/SignUpForm.component.jsx";
import SignInForm from "../../sign-in-form/SignInForm.component.jsx";
import "./authentication.styles.scss";

import {
	signInWithGooglePopUp,
	createUserFromAuth,
	signInWithGoogleRedirect,
	auth,
} from "../../../utilities/firebase/firebase.utils.js";

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignUpForm />
			<SignInForm />
		</div>
	);
};

export default Authentication;
