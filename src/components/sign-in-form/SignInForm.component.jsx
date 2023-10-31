import React from "react";
import { useState } from "react";
import {
	createAuthenticatedUserWithEmail,
	createUserFromAuth,
	signInWithGooglePopUp,
	SignAuthenticatedUserWithEmail,
} from "../../utilities/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import "./sign-in-form.styles.scss";
import Button from "../button/Button.component";

const SignInForm = () => {
	const defaultFormFields = {
		email: "",
		password: "",
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleFormChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleOnFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await SignAuthenticatedUserWithEmail(email, password);
			console.log(response);
			resetFormFields();
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};

	const logInWithGoogle = async () => {
		// we get back an auth object and pull just user portion
		const { user } = await signInWithGooglePopUp();
		await createUserFromAuth(user);
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>sign in with email</span>
			<form onSubmit={handleOnFormSubmit}>
				<FormInput
					label='email'
					type='email'
					onChange={handleFormChange}
					name='email'
					value={email}
					required
				/>
				<FormInput
					label='password'
					type='password'
					onChange={handleFormChange}
					name='password'
					value={password}
					required
				/>
				<div className='buttons-container'>
					<Button type='Submit'>Sign In</Button>
					<Button type='button' buttonType='google' onClick={logInWithGoogle}>
						Google Sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
