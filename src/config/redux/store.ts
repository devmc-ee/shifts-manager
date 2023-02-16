import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../../user/redux/loginSlice';
import { userReducer } from '../../user/redux/userSlice';
import { coreReducer } from '../../core/redux/coreSlice';
import storage from 'redux-persist/lib/storage';

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { teamReducer } from '../../team/redux/teamSlice';
import { apiBase } from './apiBase';
import { apiErrorsMiddleware } from '../../core/redux/apiErrorNotificationsMiddleware';
import { userMiddleware } from '../../user/redux/userMiddleware';

const rootReducer = combineReducers({
  // staff: staffReducer,
  // shifts: shiftsReducer,
  // unitWorkingTime: unitWorkingTimeReducer,
  // organisation: orgReducer,
  core: coreReducer,
  user: userReducer,
  login: loginReducer,
  team: teamReducer,
  // api endpoints
  [apiBase.reducerPath]: apiBase.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', apiBase.reducerPath, 'core'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiErrorsMiddleware, apiBase.middleware, userMiddleware),
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
