import { compose, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const middleWares = [
	process.env.NODE_ENV === "development" && logger,
	thunk,
].filter(Boolean);
// allows redux extension to connect in dev

const composeEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
	key: "root",
	storage,
	whitelist: "cart",
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//rootreducer
export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composeEnhancers
);
export const persistor = persistStore(store);
