import { IToken } from '../../core/types/IToken.d';

export interface UserReducerState {
  userFullName: string;
  userName: string;
  isLoggedIn: boolean;
  token: IToken | null;
}
