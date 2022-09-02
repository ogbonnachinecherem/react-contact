import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import ContactReducer from "../reducers/ContactReducer";

let Store = createStore(ContactReducer, applyMiddleware(thunk))

export default Store;