import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { selectedOption } from "./middleware";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(selectedOption, thunk)));

export default store;
