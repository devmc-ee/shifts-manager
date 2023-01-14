import { LoginReducerState } from './LoginReducerState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: LoginReducerState = {
  userName: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    LOGIN_FORM_FIELD_VALUE_CHANGED: (state, action) => {
      const { fieldName, value } = action.payload;
      console.log(action.payload);
      state[fieldName as keyof LoginReducerState] = value;
    },
    LOGIN_FORM_CLEARED: (state) => {
      state.password = '';
      state.userName = '';
    },
  },
});

export const { LOGIN_FORM_FIELD_VALUE_CHANGED: changeLoginFormFieldValue, LOGIN_FORM_CLEARED: clearLoginForm } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
