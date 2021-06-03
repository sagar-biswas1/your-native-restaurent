import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducers from "./reducers/loginReducers";
const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
  userData: loginReducers,
});

const store = createStore(combinedReducer, composeWithDevTools(middleware));

export default store;
