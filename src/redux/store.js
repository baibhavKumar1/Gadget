import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import  {thunk}  from "redux-thunk";
import { Reducer as AuthReducer} from "./AuthReducer/reducer";
import {Reducer as ProductReducer} from "./ProductReducer/reducer"

const RootReducer = combineReducers({AuthReducer, ProductReducer})

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));