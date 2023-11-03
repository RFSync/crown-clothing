import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { Logger } from "sass";

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));
//rootreducer
export const store = legacy_createStore(
	rootReducer,
	undefined,
	composeEnhancers
);
