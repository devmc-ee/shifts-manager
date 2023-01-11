import { AppState } from '../../config/redux/store';
import { useAppSelector } from '../../config/redux/hooks';

export const Dashboard = (): JSX.Element => {
  const userName = useAppSelector(({ user }: AppState) => user.userName);

  return <h1>Hi, {userName}!</h1>;
};
