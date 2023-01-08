import { apiBase } from '../../../config/redux/apiBase';

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
  }),
});

export const { useLoginMutation } = loginSlice;
