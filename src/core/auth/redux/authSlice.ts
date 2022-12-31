import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { AuthReducreState } from './AuthReducreState';

const initialState: AuthReducreState = {
  userName: '',
  isLoggedIn: false,
  token: null,
  errorMessage: '',
  isLoading: false,
  password: '',
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
      state.errorMessage = '';
    },
    PASSWORD_CHANGED: (state, action) => {
      state.password = action.payload;
      state.errorMessage = '';
    },
    SET_IS_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { SET_LOGGED_IN: setLoggedIn, SET_LOGGED_OUT: setLoggedOut, USER_NAME_CHANGED: changeUserName, PASSWORD_CHANGED: changePassword, SET_IS_LOADING: setIsLoading } = authSlice.actions;
export const selectUserName = (state: { auth: { userName: string } }) => state.auth.userName;
export const selectPassword = (state: { auth: { password: string } }) => state.auth.password;
export const selectIsLoading = (state: { auth: { isLoading: boolean } }) => state.auth.isLoading;
export const selectErrorMessage = (state: { auth: { errorMessage: string } }) => state.auth.errorMessage;

export const authReducer = authSlice.reducer;
