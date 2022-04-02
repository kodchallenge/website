import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CookieService from '../services/cookie.service'
import { CookieTypes } from "../constants";
const initialState = {
    auth: CookieService.get(CookieTypes.AUTH) ?? {}
}

export function configureStore() {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}