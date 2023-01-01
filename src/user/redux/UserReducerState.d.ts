import { IToken } from '../../core/types/IToken.d';

export interface UserReducerState {
  isLoggedIn: boolean;
  token: IToken | null;
}
