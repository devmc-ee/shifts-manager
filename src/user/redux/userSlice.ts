import { createSlice } from '@reduxjs/toolkit';
import { UserReducerState } from './UserReducerState.d';

const initialState: UserReducerState = {
  userName: '',
  isLoggedIn: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    TOKEN_CHANGED: (state, action) => {
      const { token, userName } = action.payload;

      if (token) {
        state.token = token;
        state.userName = userName;
        state.isLoggedIn = true;
      } else {
        state.token = null;
        state.isLoggedIn = false;
        state.userName = '';
      }
    },
    USER_DATA_CLEARED: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userName = '';
    },
  },
});

export const { TOKEN_CHANGED: changeToken, USER_DATA_CLEARED: clearUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
