import { legacy_createStore, applyMiddleware } from "redux";
import  {thunk}  from "redux-thunk";
import { Reducer } from "./AuthReducer/reducer";

export const store = legacy_createStore(Reducer, applyMiddleware(thunk));