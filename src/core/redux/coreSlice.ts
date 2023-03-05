import { createSlice } from '@reduxjs/toolkit';
import { CoreReducerState } from '../types/CoreReducerState.d';
import { ProtectedRoutesEnum } from '../../config/routes/routes';

const initialState: CoreReducerState = {
  notifications: [],
  activeRoute: ProtectedRoutesEnum.dashboard,
  slideInBarConfigs: [],
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
    SLIDE_IN_BAR_OPENED: (state, { payload: { from, componentName } }) => {
      state.slideInBarConfigs.push({ from, componentName });
    },
    SLIDE_IN_BARS_CLOSED: (state) => {
      state.slideInBarConfigs = [];
    },
  },
});

export const {
  NOTIFICATION_ADDED: addNotification,
  NOTIFICATIONS_CLEARED: clearNotifications,
  ACTIVE_ROUTE_CHANGED: changeActiveRoute,
  SLIDE_IN_BAR_OPENED: openSlideInBar,
  SLIDE_IN_BARS_CLOSED: closeSlideInBars,
} = coreSlice.actions;

export const coreReducer = coreSlice.reducer;
