import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentButton } from "./payment-form.styles";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useState } from "react";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectCartTotal } from "../../store/cart/cart.selectors";
import { useSelector } from "react-redux";

const PaymentForm = () => {
	const stripe = useStripe();
	const element = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const STRIPE_DEFAULT_DENOMINATION_IN_CENTS = 100;
	const [isProcessing, setIsProcessing] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !element) {
			return;
		}
		// Processing payment start
		setIsProcessing(true);
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				amount: amount * STRIPE_DEFAULT_DENOMINATION_IN_CENTS,
			}),
		}).then((res) => {
			return res.json();
		});

		const {
			paymentIntent: { client_secret },
		} = response;
		console.log(client_secret);
		const PaymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: element.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest",
				},
			},
		});
		if (PaymentResult.error) {
			alert.apply(PaymentResult.error);
		} else {
			if (PaymentResult.paymentIntent.status === "succeeded") {
				alert("Payment success");
			}
		}
		setIsProcessing(false);
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<CardElement />
				<PaymentButton isLoading={isProcessing}> pay now</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
