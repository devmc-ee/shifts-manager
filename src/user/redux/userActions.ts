export const USER_ACTION_TYPE = {
  LOGIN: 'user/LOGGED_IN',
};

export const userAction = {
  login: (token: string) => ({
    type: USER_ACTION_TYPE.LOGIN,
    payload: { token },
  }),
};
