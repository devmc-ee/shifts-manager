export interface AuthReducreState {
  userName: string;
  token: null | {
    jwt: string;
    createdAt: number;
    receivedAt: number;
    valid: number;
  };
  isLoggedIn: boolean;
  isLoading: boolean;
  errorMessage: string;
  password: string;
}
