import { createAction } from "../../utilities/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

// Here we call dispatch that was provided to modify state -
// setCurrentUser is now the api to interact with state ad modifying state```
export const setCurrentUser = (user) => {
	return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
