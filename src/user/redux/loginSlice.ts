import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { LoginReducerState } from './LoginReducerState';

const initialState: LoginReducerState = {
  userName: '',
  errorMessage: '',
  isLoading: false,
  password: '',
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
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

export const { USER_NAME_CHANGED: changeUserName, PASSWORD_CHANGED: changePassword, SET_IS_LOADING: setIsLoading } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
