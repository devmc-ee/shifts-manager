import { apiBase } from '../../../config/redux/apiBase';
import { clearUserData } from '../../redux/userSlice';

const loginSlice = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: { data: { accessToken: string } }) => response.data,
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'auth/login',
        method: 'DELETE',
      }),
      onQueryStarted: (_, { dispatch }) => {
        localStorage.clear();
        dispatch(clearUserData());
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = loginSlice;
