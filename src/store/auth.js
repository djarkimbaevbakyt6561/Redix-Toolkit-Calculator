import { createSlice } from "@reduxjs/toolkit"
const initialState =  { auth: false }
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLogHandler: (state, action) => {
            state.auth = !state.auth
        }
    }
})
export const authReducer = authSlice.reducer
export const authActions = authSlice.actions