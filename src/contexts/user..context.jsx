import { createContext, useState, useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangeListener,
} from "../utilities/firebase/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	useEffect(() => {
		// We are using useEffect like component did mount
		// when this is run - its returns an unsub function to turn it off
		const unsubscribeFunction = onAuthStateChangeListener((user) => {
			setCurrentUser(user);
			if (user) {
				createUserDocumentFromAuth(user);
			}
		});
		// what ever you return is run when compponent unmounts
		return unsubscribeFunction;
	}, []);
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
