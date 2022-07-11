import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       status: 'not-authenticated', // checking, not-authenticated , authenticated
       uid: null,
       email: null,
       displayName: null,
       photoURL: null,
       errorMessage: null,
   },
   reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
            const state1 = {
                ...state, 
                status: 'not-authenticated',
                errorMessage: payload.errorMessage,
            }
            console.log(state1);
        },
        checkinCredentials: (state) => {
            state.status = 'checking';
        }
   }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkinCredentials } = authSlice.actions;