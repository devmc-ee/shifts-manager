import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { AuthReducerState } from './AuthReducerState';

const initialState: AuthReducerState = {
    userName: '',
    isLoggedIn: false,
    token: null,
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        SET_LOGGED_IN: (state) => {
            state.isLoggedIn = true;
        },
        SET_LOGGED_OUT: (state) => {
            state.isLoggedIn = false;
        },
        USER_NAME_CHANGED: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const { SET_LOGGED_IN: setLoggedIn, SET_LOGGED_OUT: setLoggedOut, USER_NAME_CHANGED: changeUserName } = authSlice.actions;

export const selectUserName = (state: { auth: { userName: string } }) => state.auth.userName;

export const authReducer = authSlice.reducer;
