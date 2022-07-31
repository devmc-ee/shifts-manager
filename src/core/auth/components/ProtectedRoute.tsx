import { AppState } from '../../../config/redux/store';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../routing/routes';
import { useAppSelector } from '../../../config/redux/hooks';

export const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
    const isLoggedIn = useAppSelector(({ auth }: AppState) => auth.isLoggedIn);
    const location = useLocation();

    console.log({ isLoggedIn });

    if (!isLoggedIn) {
        return <Navigate to={routes.login} state={{ from: location }} replace />;
    }

    return children;
};
