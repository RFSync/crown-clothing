import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { Logger } from "sass";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
	key: "root",
	storage,
	blacklist: "user",
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//rootreducer
export const store = legacy_createStore(
	persistedReducer,
	undefined,
	composeEnhancers
);
export const persistor = persistStore(store);
