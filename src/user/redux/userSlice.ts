import { createSlice } from '@reduxjs/toolkit';
import { UserReducerState } from './UserReducerState.d';

const initialState: UserReducerState = {
  isLoggedIn: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    TOKEN_CHANGED: (state, action) => {
      const token = action.payload;

      if (token && token.jwt) {
        state.token = token;
        state.isLoggedIn = true;
      } else {
        state.token = null;
        state.isLoggedIn = false;
      }
    },
    USER_DATA_CLEARED: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { TOKEN_CHANGED: changeToken, USER_DATA_CLEARED: clearUserDate } = userSlice.actions;
export const userReducer = userSlice.reducer;
