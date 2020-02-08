import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./films-reducer";
import filmReducer from "./film-reducer";

const reducers = combineReducers({
  films: filmsReducer,
  film: filmReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
