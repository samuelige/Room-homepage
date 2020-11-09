import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "../RootReducer/rootReducer";

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;