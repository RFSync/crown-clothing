// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithRedirect,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAhkBnz2R1X0z_zX3lEyX9eaYR2-TC-aNM",
	authDomain: "crownclothingdb-8f117.firebaseapp.com",
	projectId: "crownclothingdb-8f117",
	storageBucket: "crownclothingdb-8f117.appspot.com",
	messagingSenderId: "602856508886",
	appId: "1:602856508886:web:e809b8654b50af129e2877",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// creates instance
const googleProvider = new GoogleAuthProvider();
// sets up the provedr
googleProvider.setCustomParameters({
	prompt: "select_account",
});
// singleton for all auth
export const auth = getAuth();
export const signInWithGooglePopUp = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createAuthenticatedUserWithEmail = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
export const createUserFromAuth = async (
	userAuthObj,
	additionalUserInformation = {}
) => {
	if (!userAuthObj) return;
	//create a ref to doc with the uid
	const userDocRef = doc(db, "users", userAuthObj.uid);
	// Perform a get on that ref. - we have ref but havent commited
	const userSnapshot = await getDoc(userDocRef);
	// if users doesnt exist - create it
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuthObj;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				createdAt,
				email,
				...additionalUserInformation,
			});
		} catch (error) {
			console.log(`firebase failed to create user: ${error}`);
		}
	}
	// if user exist
	return userDocRef;
};
