import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    operator: "PLUS",
    inputOne: "",
    inputTwo: "",
    result: 0
}
export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        getValueOfInputOne: (state, action) => {
            state.inputOne = action.payload
        },
        getValueOfInputTwo: (state, action) => {
            state.inputTwo = action.payload
        },
        getSelect: (state, action) => {
            state.operator = action.payload
        },
        plusHandler: (state, action) => {
            state.result = state.inputOne + state.inputTwo
        },
        minusHandler: (state, action) => {
            state.result = state.inputOne - state.inputTwo
        },
        multiclicationHandler: (state, action) => {
            state.result = state.inputOne * state.inputTwo
        },
        divisionHandler: (state, action) => {
            state.result = state.inputOne / state.inputTwo
        }
    },
})
export const calculatorReducer = calculatorSlice.reducer
export const calculatorActions = calculatorSlice.actions