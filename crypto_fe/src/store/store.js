import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import newsReducer from './reducers/news';

const composeEnhancers = null || compose;
const rootReducer = combineReducers({
  newsReducer:newsReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk))
);

export default store