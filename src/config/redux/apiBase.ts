import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppState } from './store';

export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as AppState).user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
