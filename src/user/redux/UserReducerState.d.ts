import { IToken } from '../../core/types/IToken.d';

export interface UserReducerState {
  userName: string;
  isLoggedIn: boolean;
  token: IToken | null;
}
