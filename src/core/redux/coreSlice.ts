import { createSlice } from '@reduxjs/toolkit';
import { HEADER_BUTTON_ID } from '../components/HeaderBar/HeaderBar';
import { ProtectedRoute } from '../routing/routes';

import { CoreReducerState } from '../types/CoreReducerState.d';

const initialState: CoreReducerState = {
  notifications: [],
  activeRoute: ProtectedRoute.dashboard,
};

export const coreSlice = createSlice({
  name: 'coreSlice',
  initialState,
  reducers: {
    NOTIFICATION_ADDED: (state, action) => {
      state.notifications.push(action.payload);
    },
    NOTIFICATIONS_CLEARED: (state) => {
      state.notifications = [];
    },
    ACTIVE_ROUTE_CHANGED: (state, action) => {
      state.activeRoute = action.payload;
    },
  },
});

export const callHeaderBlockButtonClicked = (buttonID: HEADER_BUTTON_ID) => ({
  type: 'coreSlice/HEADER_BLOCK_BUTTON_CLICKED',
  payload: buttonID,
});

export const { NOTIFICATION_ADDED: addNotification, NOTIFICATIONS_CLEARED: clearNotifications, ACTIVE_ROUTE_CHANGED: changeActiveRoute } = coreSlice.actions;

export const coreReducer = coreSlice.reducer;
