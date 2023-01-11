import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { NotificationLevelType } from '../types/notifications.d';
import { addNotification, clearNotifications } from './coreSlice';

export const apiErrorsMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      dispatch(
        addNotification({
          message: action.payload?.data?.message,
          level: NotificationLevelType.ERROR,
          id: action.meta.requestId,
          source: action.meta.arg,
        })
      );
    }

    switch (action.type) {
      case 'api/mutations/removeMutationResult': {
        dispatch(clearNotifications());
        break;
      }
    }

    return next(action);
  };
