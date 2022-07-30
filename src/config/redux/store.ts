import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../../core/auth/redux/authSlice';
import storage from 'redux-persist/lib/storage';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  
import { staffReducer } from '../../staff/redux/staffSlice';

const rootReducer = combineReducers({
    // staff: staffReducer,
    // shifts: shiftsReducer,
    // unitWorkingTime: unitWorkingTimeReducer,
    // organisation: orgReducer,
    auth: authReducer,
    staff: staffReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER]
        }
    })
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;