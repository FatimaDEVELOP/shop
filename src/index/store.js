import { applyMiddleware, combineReducers, createStore } from "redux";
import { Reducer } from "./Reducer/reducer";
import { thunk } from "redux-thunk";
import { BasketReducer } from "./Reducer/BasketReducer";

export const store = createStore(
  combineReducers({
    main: Reducer,
    basket: BasketReducer,
  }),
  applyMiddleware(thunk)
);
