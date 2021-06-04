import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducers from "./reducers/loginReducers";
import productReducers from "./reducers/productReducers";
const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
  userData: loginReducers,
  products: productReducers,
});

const store = createStore(combinedReducer, composeWithDevTools(middleware));

export default store;
