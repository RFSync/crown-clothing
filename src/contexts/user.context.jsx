import { createContext, useEffect, useReducer } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangeListener,
} from "../utilities/firebase/firebase.utils";

import { createAction } from "../utilities/reducer.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
	console.log("reducer called");
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`unknown action: ${type}`);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};
export const UserProvider = ({ children }) => {
	// useReducer hooks up our statae and reducer and creates a dispatch method for us
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;

	// Here we call dispatch that was provided to modify state -
	// setCurrentUser is now the api to interact with state ad modifying state```
	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};
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
	// const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
