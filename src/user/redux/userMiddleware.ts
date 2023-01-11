import { Middleware, MiddlewareAPI, isFulfilled } from '@reduxjs/toolkit';
import { changeToken } from './userSlice';
import { clearLoginForm } from './loginSlice';

export const userMiddleware: Middleware =
  ({ dispatch, getState }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    if (isFulfilled(action)) {
      switch (action?.meta?.arg?.endpointName) {
        case 'login': {
          const { login } = getState();

          dispatch(
            changeToken({
              token: action.payload.accessToken,
              userName: login.userName,
            })
          );

          dispatch(clearLoginForm());
          break;
        }
      }
    }

    return next(action);
  };
