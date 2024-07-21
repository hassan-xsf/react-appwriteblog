


import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: false,
    authData: null
}
const authSlice = createSlice(
{
        name: "Auth",
        initialState,
        reducers: {
            authlogin: (state,action) => {
                state.authStatus = true;
                state.authData = action.payload;
            },
            authlogout: (state) => {
                state.authStatus = false;
                state.authData = null;
            }
        }
    }
)
export const authReducer = authSlice.reducer;
export const {authlogin,authlogout} = authSlice.actions;
