import React from "react";
import { useState } from "react";
import {
	createAuthenticatedUserWithEmail,
	createUserFromAuth,
} from "../../utilities/firebase/firebase.utils";
import FormInput from "../form-input/FormInput.component";
import "./sign-up-form.styles.scss";
import Button from "../button/Button.component";

const SignUpForm = () => {
	const defaultFormFields = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleFormChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleOnFormSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}
		try {
			const { user } = await createAuthenticatedUserWithEmail(email, password);
			await createUserFromAuth(user);
			resetFormFields();
		} catch (error) {
			console.log(`error: ${error}`);
		}
	};
	return (
		<div className='sign-up-container'>
			<h2>Dont have an account?</h2>
			<span>sign up with email</span>
			<form onSubmit={handleOnFormSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					onChange={handleFormChange}
					name='displayName'
					value={displayName}
					required
				/>
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
				<FormInput
					label='Confirm password'
					type='password'
					onChange={handleFormChange}
					name='confirmPassword'
					value={confirmPassword}
					required
				/>
				<Button type='Submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
