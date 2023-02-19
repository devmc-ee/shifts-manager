import { AppState } from '../../config/redux/store';
import { Navigate, useLocation } from 'react-router-dom';
import { PublicRoutesEnum } from '../../config/routes/routes';
import { useAppSelector } from '../../config/redux/hooks';

export const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(({ user }: AppState) => user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={PublicRoutesEnum.login} state={{ from: location }} replace />;
  }

  return children;
};
