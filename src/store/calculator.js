import { createSlice } from "@reduxjs/toolkit"
const calculatsFromLocal = localStorage.getItem("Calculats")
const calculats = calculatsFromLocal ? JSON.parse(calculatsFromLocal) : []
const initialState = {
    calculats: calculats,
    operator: "PLUS",
    inputOne: "",
    inputTwo: "",
    result: 0
}
export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addCalculate: (state, action) => {
            console.log(state.result);
            state.calculats = [...state.calculats, state.result]
        },
        resetHandler: (state, action) => {
            state.inputOne = "";
            state.inputTwo = "";
            state.result = 0;
        },
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
            state.result = state.inputOne + state.inputTwo;
          },
          minusHandler: (state, action) => {
            state.result = state.inputOne - state.inputTwo;
          },
          multiplicationHandler: (state, action) => {
            state.result = state.inputOne * state.inputTwo;
          },
          divisionHandler: (state, action) => {
            state.result = state.inputOne / state.inputTwo;
          }
    },
})
export const calculatorReducer = calculatorSlice.reducer
export const calculatorActions = calculatorSlice.actions