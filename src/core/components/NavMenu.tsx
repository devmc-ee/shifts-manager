import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../config/redux/hooks';
import { setLoggedOut } from '../auth/redux/authSlice';
import { routes } from '../routing/routes';

export const NavMenu = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const getActiveRouteClass = (route: string) => {
        const activeRouteClassName = 'font-bold';

        if (route === pathname) return activeRouteClassName;

        if (route === '/') return '';

        const isActiveRoute = new RegExp(route, 'ui').test(pathname);

        return isActiveRoute ? activeRouteClassName : '';
    };

    return (
        <nav>
            <ul>
                <li className={getActiveRouteClass(routes.protected.dashboard)}>
                    <Link to={routes.protected.dashboard}>Dashboard</Link>
                </li>
                <li className={getActiveRouteClass(routes.protected.staff)}>
                    <Link to={routes.protected.staff}>Staff</Link>
                </li>
                <li className={getActiveRouteClass(routes.protected.shifts)}>
                    <Link to={routes.protected.shifts}>Shifts</Link>
                </li>
                <li>
                    <Link onClick={() => dispatch(setLoggedOut())} to={routes.login}>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
