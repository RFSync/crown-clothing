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

export const UserProvider = ({ children }) => {
	// useReducer hooks up our statae and reducer and creates a dispatch method for us
	// const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	// const { currentUser } = state;
	// const [currentUser, setCurrentUser] = useState(null);
	// const value = { currentUser, setCurrentUser };
	// return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
