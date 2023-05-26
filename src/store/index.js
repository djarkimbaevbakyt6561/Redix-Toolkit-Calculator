import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth";
import { calculatorReducer } from "./calculator";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    auth: authReducer,
})
export const store = createStore(rootReducer)